import { Theme, ViewButton, ViewPanel } from "@tolokoban/ui";
import type { TgdDataGlb } from "@tolokoban/tgd";

import Styles from "./Verbatim.module.css";

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
			<pre>{JSON.stringify(props.data.getJson(), replacer, "  ")}</pre>
		</ViewPanel>
	);
}

function replacer(this: Record<string, unknown>, _key: string, value: unknown) {
	if (value instanceof Float32Array)
		return `<<< Float32Array(${value.length}) >>>`;
	if (value instanceof Uint8Array) return `<<< Uint8Array(${value.length}) >>>`;
	if (value instanceof Uint16Array)
		return `<<< Uint16Array(${value.length}) >>>`;
	if (value instanceof Uint32Array)
		return `<<< Uint32Array(${value.length}) >>>`;
	return value;
}
