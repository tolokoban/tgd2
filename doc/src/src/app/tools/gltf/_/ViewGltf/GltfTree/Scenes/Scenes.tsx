/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { IconMap, Theme } from "@tolokoban/ui";
import type { TgdDataGlb } from "@tolokoban/tgd";
import type { Action } from "../../types";

import { Expander } from "../Expander";
import { ViewScene } from "./Scene";

export type ViewScenesProps = {
	data: TgdDataGlb;
	onAction?(action: Action): void;
};

export function ViewScenes(props: ViewScenesProps): JSX.Element {
	const scenes = props.data.getScenes();
	if (scenes.length === 0) return <p>No scenes.</p>;

	return (
		<Expander title="Scenes" icon={IconMap}>
			{scenes.map((scene, index) => (
				<ViewScene
					key={`Scene#${index}`}
					data={props.data}
					scene={scene}
					title={scene.name ?? `Scene #${index}`}
					index={index}
					onAction={props.onAction}
				/>
			))}
		</Expander>
	);
}
