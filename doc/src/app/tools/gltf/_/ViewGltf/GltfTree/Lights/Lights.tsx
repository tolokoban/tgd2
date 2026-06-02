import * as React from "react";

import { IconImage, IconLightOff, Theme } from "@tolokoban/ui";
import type { TgdDataGlb } from "@tolokoban/tgd";

import { Expander } from "../Expander";
import type { Action } from "../../types";

import Styles from "./Lights.module.css";

const $ = Theme.classNames;

export type ViewLightsProps = {
	className?: string;
	data: TgdDataGlb;
	onAction?(action: Action): void;
};

export function ViewLights({ className, data, onAction }: ViewLightsProps) {
	const lights = figureLights(data);
	return (
		<Expander
			className={$.join(className, Styles.images)}
			title="Lights"
			icon={IconLightOff}
		></Expander>
	);
}

function figureLights(data: TgdDataGlb) {}
