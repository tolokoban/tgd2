/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Theme, CommonProps } from "@tolokoban/ui"
import { TgdDataGlb } from "@tolokoban/tgd"

import Styles from "./ActionNodeMesh.module.css"
import ViewError from "@/components/Error"
import { Expander } from "../../../GltfTree/Expander"
import { isNumber } from "@tolokoban/type-guards"
import { ViewJson } from "@/components/Json"
import { ViewAccessor } from "../../../components/Accessor"

const $ = Theme.classNames

export type ViewActionNodeMeshProps = CommonProps & {
	data: TgdDataGlb
	meshIndex: number
}

export function ViewActionNodeMesh({
	className,
	data,
	meshIndex,
}: ViewActionNodeMeshProps): JSX.Element {
	const mesh = data.getMesh(meshIndex)
	if (!mesh)
		return <ViewError>No mesh found with index #{meshIndex}!</ViewError>

	return (
		<div className={$.join(className, Styles.actionNodeMesh)}>
			<ul>
				{mesh.primitives.map((primitive, index) => (
					<li key={index}>
						<b>Primitive {index}</b>
						<Expander title="Attributes">
							{Object.keys(primitive.attributes).map((attName) => {
								const attribute = primitive.attributes[attName]
								if (!isNumber(attribute)) {
									console.log("🚀 [ActionNodeMesh] attribute =", attribute) // @FIXME: Remove this line written on 2025-07-07 at 16:02
									return <ViewError>Attribute is not a number!</ViewError>
								}

								return (
									<Expander key={attName} title={attName}>
										{isNumber(attribute) ? (
											<ViewAccessor data={data} index={attribute} />
										) : (
											<ViewJson value={attribute} />
										)}
									</Expander>
								)
							})}
						</Expander>
						<Expander title="Indices">
							{primitive.indices &&
								(isNumber(primitive.indices) ? (
									<ViewAccessor data={data} index={primitive.indices} />
								) : (
									<ViewJson value={primitive.indices} />
								))}
							{!primitive.indices && <div>No indices...</div>}
						</Expander>
						{(primitive.material ?? -1) > -1 && (
							<Expander
								title={
									<div>
										Material{" "}
										<b>
											{data.getMaterial(primitive.material ?? -1)?.name ??
												"Material"}
										</b>
									</div>
								}
							>
								{isNumber(primitive.material) && (
									<ViewJson value={data.getMaterial(primitive.material)} />
								)}
							</Expander>
						)}
						<Expander title="Verbatim">
							<ViewJson value={mesh} />
						</Expander>
					</li>
				))}
			</ul>
		</div>
	)
}
