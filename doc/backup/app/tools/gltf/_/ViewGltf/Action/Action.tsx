import type * as React from "react";

import { Theme, type CommonProps, styleCommon } from "@tolokoban/ui";
import type { TgdDataGlb } from "@tolokoban/tgd";
import type { Action } from "../types";

import Styles from "./Action.module.css";
import { ViewActionVerbatim } from "@/app/tools/gltf/_/ViewGltf/Action/ActionVerbatim";
import { ViewActionNode } from "./ActionNode";
import { ViewActionImage } from "./ActionImage";
import { ViewActionScene } from "./ActionScene";
import { ViewActionBufferView } from "./ActionBufferView";

const $ = Theme.classNames;

export type ViewActionProps = CommonProps & {
	data: TgdDataGlb;
	action: Action;
};

export function ViewAction(props: ViewActionProps): JSX.Element {
	const style: React.CSSProperties = {
		...styleCommon(props),
	};

	switch (props.action.type) {
		case "scene":
			return <ViewActionScene data={props.data} index={props.action.index} />;
		case "verbatim":
			return <ViewActionVerbatim data={props.data} />;
		case "node":
			return <ViewActionNode data={props.data} index={props.action.index} />;
		case "image":
			return <ViewActionImage data={props.data} index={props.action.index} />;
		case "bufferView":
			return (
				<ViewActionBufferView data={props.data} index={props.action.index} />
			);
		default:
			return (
				<div className={$.join(props.className, Styles.action)} style={style}>
					Don't know what to do with this action:{" "}
					<pre>{JSON.stringify(props.action, null, "  ")}</pre>.
				</div>
			);
	}
}
