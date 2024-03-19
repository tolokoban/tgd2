import React from "react"
import {
    IconChevronDown,
    IconShow,
    IconSpaceInvader,
    Theme,
} from "@tolokoban/ui"
import Style from "./Branch.module.css"

const $ = Theme.classNames

export interface BranchProps {
    className?: string
    label: React.ReactNode
    onClick?(): void
    children?: React.ReactNode
}

export default function Branch({
    className,
    label,
    onClick,
    children,
}: BranchProps) {
    const hasChildren = checkChildren(children)
    return (
        <details className={$.join(className, Style.Branch)}>
            <summary>
                {hasChildren ? (
                    <IconChevronDown className={Style.icon} />
                ) : (
                    <IconSpaceInvader className={Style.icon} />
                )}
                <div className={Style.label}>{label}</div>
                {onClick && <IconShow onClick={onClick} />}
            </summary>
            <div>{children}</div>
        </details>
    )
}

function checkChildren(children?: React.ReactNode) {
    if (!children) return false

    if (Array.isArray(children) && children.length === 0) return false

    return true
}
