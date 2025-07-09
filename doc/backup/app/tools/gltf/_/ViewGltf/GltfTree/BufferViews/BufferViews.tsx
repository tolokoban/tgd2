/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import * as React from "react";

import { Theme, IconData } from "@tolokoban/ui";
import { TgdDataGlb, webglLookup } from "@tolokoban/tgd";

import { Action } from "../../types";

import Styles from "./BufferViews.module.css";
import { Expander } from "../Expander";
import { isNumber } from "@tolokoban/type-guards";

const $ = Theme.classNames;

export type ViewBufferViewsProps = {
	className?: string;
	data: TgdDataGlb;
	onAction?(action: Action): void;
};

export function ViewBufferViews(props: ViewBufferViewsProps): JSX.Element {
	const { className, data, onAction } = props;
	const bufferViews = data.getBufferViews();

	return (
		<Expander
			className={$.join(className, Styles.bufferViews)}
			icon={IconData}
			title="BufferViews"
		>
			{bufferViews.map((bufferView, index) => (
				<Expander
					key={`bufferView#${index}`}
					icon={IconData}
					title={`BufferView #${index}`}
					onClick={() =>
						onAction?.({
							type: "bufferView",
							index,
						})
					}
				>
					<ul>
						<li>
							buffer: <b>{bufferView.buffer}</b>
						</li>
						<li>
							byteLength: <b>{bufferView.byteLength}</b>
						</li>
						{isNumber(bufferView.byteOffset) && (
							<li>
								byteOffset: <b>{bufferView.byteOffset}</b>
							</li>
						)}
						{isNumber(bufferView.byteStride) && (
							<li>
								byteStride: <b>{bufferView.byteStride}</b>
							</li>
						)}
						{isNumber(bufferView.target) && (
							<li>
								target: <b>{webglLookup(bufferView.target)}</b>
							</li>
						)}
					</ul>
				</Expander>
			))}
		</Expander>
	);
}
