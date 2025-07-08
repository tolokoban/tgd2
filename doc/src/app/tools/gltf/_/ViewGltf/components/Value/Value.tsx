/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
import * as React from "react"

import { webglLookup } from "@tolokoban/tgd"
import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { isNumber } from "@tolokoban/type-guards"

import Styles from "./Value.module.css"

const $ = Theme.classNames

export type ViewValueProps = CommonProps & {
	value: unknown
	label?: string
	lookup?: boolean
}

export function ViewValue(props: ViewValueProps): JSX.Element {
	const style: React.CSSProperties = {
		...styleCommon(props),
	}
	const { value, label, lookup = false } = props

	if (isNumber(value) && lookup) {
		return (
			<div className={$.join(props.className, Styles.value)} style={style}>
				{label && <label>{label}:</label>}
				<div>
					gl.<b>{webglLookup(value)}</b>
				</div>
			</div>
		)
	}

	return (
		<div className={$.join(props.className, Styles.value)} style={style}>
			{label && <label>{label}:</label>}
			<Value value={value} />
		</div>
	)
}

function Value({ value }: { value: unknown }) {
	if (value === undefined) return <em>undefined</em>
	if (value === null) return <em>null</em>

	return <b>{JSON.stringify(value)}</b>
}
