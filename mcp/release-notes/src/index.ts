import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { execSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const PROJECT_ROOT = resolve(import.meta.dirname, "..", "..", "..")

const VERSION_FILES = ["package.json", "lib/package.json", "doc/package.json"] as const

function git(cmd: string): string {
    try {
        return execSync(`git ${cmd}`, {
            cwd: PROJECT_ROOT,
            encoding: "utf-8",
        }).trim()
    } catch {
        return ""
    }
}

function getCommitOfPreviousVersion(version: string) {
    const commit = git(
        `git rev-parse $(git log -S "v${version}" --reverse --format=%H -- "${PROJECT_ROOT}/README.md" | head -1)^`,
    ).trim()
    return git(`git log --format=%H --diff-filter=M -1 ${commit} -- "${PROJECT_ROOT}/README.md"`).trim()
}

function getLastTag(): string {
    return git("describe --tags --abbrev=0")
}

function getCommitsSince(ref: string): string[] {
    const range = ref ? `${ref}..HEAD` : "-20"
    const log = git(`log ${range} --oneline`)
    return log ? log.split("\n") : []
}

function getDiffStat(ref: string): string {
    if (!ref) return git("diff --stat --stat-count=50 HEAD~20..HEAD")
    return git(`diff --stat --stat-count=50 ${ref}..HEAD`)
}

function readVersion(relativePath: string): { path: string; version: string } {
    const path = resolve(PROJECT_ROOT, relativePath)
    const pkg = JSON.parse(readFileSync(path, "utf-8"))
    return { path: relativePath, version: pkg.version ?? "unknown" }
}

function getReleaseNotesSection(): string {
    const readme = readFileSync(resolve(PROJECT_ROOT, "README.md"), "utf-8")
    const match = readme.match(/## Release notes[\s\S]*/)
    return match ? match[0] : ""
}

const server = new McpServer({
    name: "tgd2-release-notes",
    version: "1.0.0",
})

server.registerTool(
    "generate_release_notes",
    {
        description: "Gather git history and project context to draft a release note entry for the tgd2 project",
    },
    async () => {
        const versions = VERSION_FILES.map(readVersion)
        const allMatch = versions.every((v) => v.version === versions[0].version)

        if (!allMatch) {
            const details = versions.map((v) => `  - ${v.path}: ${v.version}`).join("\n")
            return {
                content: [
                    {
                        type: "text" as const,
                        text: [
                            "ERROR: Version mismatch detected across package.json files:",
                            details,
                            "",
                            "DO NOT generate a release note.",
                            "Tell the user that the versions in package.json, lib/package.json, and doc/package.json must all match before a release note can be generated.",
                        ].join("\n"),
                    },
                ],
            }
        }

        const version = `v${versions[0].version}`
        const lastTag = getLastTag()
        const commits = getCommitsSince(lastTag).slice(0, 50)
        const diffStat = getDiffStat(lastTag)
        const releaseNotes = getReleaseNotesSection()

        return {
            content: [
                {
                    type: "text" as const,
                    text: JSON.stringify(
                        {
                            version,
                            previousTag: lastTag || "(no previous tag)",
                            commits,
                            changedFiles: diffStat,
                            existingReleaseNotes: releaseNotes,
                            instructions: [
                                "Draft a new release note entry matching the existing style in the README under '## Release notes'.",
                                'Use "### ${version}" for the version header.',
                                "Use bold (**text**) for key feature/area names.",
                                "Group related changes together.",
                                "Mention specific types, functions, and files when relevant.",
                                "Be concise but informative.",
                                "Only report changes that have occured under `lib/` folder.",
                            ],
                        },
                        null,
                        2,
                    ),
                },
            ],
        }
    },
)

const transport = new StdioServerTransport()
await server.connect(transport)
