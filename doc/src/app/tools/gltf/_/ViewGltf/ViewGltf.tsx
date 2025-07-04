import * as React from "react";

import {
	IconImport,
	Theme,
	ViewInputFile,
	ViewPanel,
	ViewStrip,
} from "@tolokoban/ui";

import { ViewGltfTree } from "./GltfTree";
import { useData } from "./hooks";
import type { Action } from "./types";
import { ViewAction } from "./Action";

import { ViewFileSize } from "@/components/FileSize";

import Styles from "./ViewGltf.module.css";
import { webglLookup } from "../../../../../../../lib/dist";

const $ = Theme.classNames;

export type ViewViewGltfProps = {
	className?: string;
};

export function ViewGLTF(props: ViewViewGltfProps): JSX.Element {
	const [action, setAction] = React.useState<Action>({ type: "verbatim" });
	const [data, load] = useData();
	const handleLoad = (files: File[]): void => {
		const [file] = files;
		if (!file) return;

		load(file);
	};

	return (
		<ViewStrip
			className={$.join(props.className, Styles.viewgltf)}
			template="*1"
			orientation="row"
			fullsize
			gap="8px"
		>
			<ViewStrip template="*1" orientation="column">
				<ViewPanel
					color="primary-5"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					padding={["S", "M"]}
					minWidth="300px"
					gap="M"
				>
					<div>GLB Viewer</div>
					{data && <ViewFileSize value={data.fileSize} />}
					<ViewInputFile accept="glb" onLoad={handleLoad}>
						<IconImport />
					</ViewInputFile>
				</ViewPanel>
				<ViewPanel
					overflow="auto"
					minHeight="auto"
					color="neutral-5"
					padding="S"
				>
					{!data && <div>Loading...</div>}
					{data && <ViewGltfTree data={data} onAction={setAction} />}
					<hr />
					<ViewPanel
						display="grid"
						gridTemplateColumns="auto 1fr"
						fontSize="S"
						gap={["XS", "M"]}
						padding="S"
						color="primary-1"
					>
						{[5120, 5121, 5122, 5123, 5124, 5125, 5126, 34962, 34963].map(
							(v) => (
								<>
									<div key={`${v}`}>{v}</div>
									<div key={`${webglLookup(v)}`}>{webglLookup(v)}</div>
								</>
							),
						)}
					</ViewPanel>
				</ViewPanel>
			</ViewStrip>
			{data && (
				<ViewPanel position="relative" overflow="auto" fullsize>
					<ViewAction action={action} data={data} />
				</ViewPanel>
			)}
		</ViewStrip>
	);
}
