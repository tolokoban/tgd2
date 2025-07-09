import * as React from "react";

import {
	Theme,
	useLocalStorageState,
	ViewOptions,
	ViewPanel,
	ViewSlider,
	ViewStrip,
} from "@tolokoban/ui";
import { TgdDataGlb, webglLookup } from "@tolokoban/tgd";

import Styles from "./ActionBufferView.module.css";
import { isNumber } from "@tolokoban/type-guards";
import { ViewHeader } from "./Header";

const $ = Theme.classNames;

export type ViewActionBufferViewProps = {
	className?: string;
	data: TgdDataGlb;
	index: number;
};

const COLUMNS = [3, 4, 6, 8, 9, 12];
const MAX_LINES = 25;

export function ViewActionBufferView({
	className,
	data,
	index,
}: ViewActionBufferViewProps): React.ReactNode {
	const bufferView = data.getBufferView(index);
	const [format, setFormat] = React.useState<
		"Int8" | "Uint8" | "Int16" | "Uint16" | "Uint32" | "Float32"
	>(
		bufferView?.target === WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER
			? "Uint16"
			: "Float32",
	);
	const [columns, setColumns] = useLocalStorageState(
		4,
		`ViewActionBufferView/columns`,
		ensureColumns,
	);
	const [start, setStart] = React.useState(0);
	const view = React.useMemo(() => {
		try {
			return data.getBufferViewData(index, format);
		} catch {
			return new Float32Array();
		}
	}, [data, index, format]);

	if (!bufferView) return null;

	const max = view.length - columns;
	const lines = range(
		Math.min(MAX_LINES, Math.ceil((view.length - start) / columns)),
	);

	return (
		<ViewStrip
			className={$.join(className, Styles.actionBufferView)}
			template="1*"
			orientation="column"
		>
			<ViewPanel display="flex" flexDirection="column">
				<ViewHeader index={index} bufferView={bufferView} />
				<ViewPanel
					color="primary-4"
					padding="S"
					display="flex"
					justifyContent="flex-start"
					gap="XL"
				>
					<ViewOptions value={format} onChange={setFormat} label="Format">
						<div key="Int8">Int 8</div>
						<div key="Uint8">Uint 8</div>
						<div key="Int16">Int 16</div>
						<div key="Uint16">Uint 16</div>
						<div key="Uint32">Uint 32</div>
						<div key="Float32">Float 32</div>
					</ViewOptions>
					<ViewOptions
						value={`${columns}`}
						onChange={(value) => setColumns(ensureColumns(parseInt(value, 10)))}
						label="Columns"
					>
						{COLUMNS.map((col) => (
							<div key={`${col}`}>{col}</div>
						))}
					</ViewOptions>
				</ViewPanel>
				{max > MAX_LINES * columns - 1 && (
					<ViewPanel color="primary-3" padding="S">
						<ViewSlider
							wide
							min={0}
							max={max}
							step={columns}
							value={start}
							onChange={setStart}
						/>
					</ViewPanel>
				)}
			</ViewPanel>
			<div className={Styles.grid} style={{ "--custom-columns": columns }}>
				{lines.map((line) => (
					<>
						<div className={Styles.th} key={`line/${line}`}>
							{start + line * columns}
						</div>
						{range(columns).map((col) => (
							<div key={`line/${line}/${col}`}>
								{view[start + line * columns + col]}
							</div>
						))}
					</>
				))}
			</div>
		</ViewStrip>
	);
}

function ensureColumns(data: unknown): number {
	if (!isNumber(data) || !COLUMNS.includes(data)) return 8;
	return data;
}

function range(size: number): number[] {
	const arr = new Array(size);
	for (let i = 0; i < size; i++) arr[i] = i;
	return arr;
}
