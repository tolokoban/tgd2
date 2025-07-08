import * as React from "react"
import type { TgdDataGlb } from "@tolokoban/tgd"
import {
	Theme,
	type CommonProps,
	styleCommon,
	ViewPanel,
	ViewButton,
} from "@tolokoban/ui"

import { Expander } from "../../GltfTree/Expander"
import { ViewValue } from "../Value"

import Styles from "./Accessor.module.css"
import { isNumber } from "@tolokoban/type-guards"
import { ViewData } from "../Data"

const $ = Theme.classNames

export type ViewAccessorProps = CommonProps & {
	data: TgdDataGlb
	index: number
}

export function ViewAccessor(props: ViewAccessorProps): JSX.Element {
	const refDialog = React.useRef<HTMLDialogElement | null>(null)
	const [open, setOpen] = React.useState(false)
	React.useEffect(() => {
		const dialog = refDialog.current
		if (!dialog) return

		if (open) dialog.showModal()
		else dialog.close()
	}, [open])
	const style: React.CSSProperties = {
		...styleCommon(props),
	}
	const { data, index } = props
	const accessor = data.getAccessor(index)

	return (
		<Expander
			className={$.join(props.className, Styles.accessor)}
			style={style}
			title={`Accessor #${index}`}
		>
			<ViewValue label="name" value={accessor.name} />
			<ViewValue label="type" value={accessor.type} />
			<ViewValue label="componentType" value={accessor.componentType} lookup />
			<ViewValue label="count" value={accessor.count} />
			<ViewValue label="bufferView" value={accessor.bufferView} />
			<ViewValue label="byteOffset" value={accessor.byteOffset} />
			<ViewValue label="normalized" value={accessor.normalized} />
			<ViewValue label="min" value={accessor.min} />
			<ViewValue label="max" value={accessor.max} />
			{isNumber(accessor.bufferView) && (
				<ViewButton variant="outlined" onClick={() => setOpen(true)}>
					Show data
				</ViewButton>
			)}
			<dialog ref={refDialog}>
				{open && (
					<ViewPanel>
						<ViewData
							buffer={data.getBufferViewData(accessor)}
							type={accessor.type}
							componentType={accessor.componentType}
							onClose={() => setOpen(false)}
						/>
					</ViewPanel>
				)}
			</dialog>
		</Expander>
	)
}
