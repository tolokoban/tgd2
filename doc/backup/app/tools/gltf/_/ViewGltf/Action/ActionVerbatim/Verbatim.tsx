import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui";
import type { TgdDataGlb } from "@tolokoban/tgd";

import Styles from "./Verbatim.module.css";
import { stringifyJson } from "../../util";

const $ = Theme.classNames;

export type ViewVerbatimProps = {
	className?: string;
	data: TgdDataGlb;
};

export function ViewActionVerbatim(props: ViewVerbatimProps): JSX.Element {
	return (
		<ViewPanel
			className={$.join(props.className, Styles.verbatin)}
			overflow="auto"
			fullsize
			color="neutral-1"
			padding="S"
		>
			<ViewButton onClick={() => console.log(props.data.getJson())}>
				Write to console
			</ViewButton>
			<pre>{stringifyJson(props.data.getJson())}</pre>
		</ViewPanel>
	);
}
