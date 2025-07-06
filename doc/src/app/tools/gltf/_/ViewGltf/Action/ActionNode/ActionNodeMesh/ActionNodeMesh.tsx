/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import * as React from "react";

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui";
import { TgdDataGlb } from "@tolokoban/tgd";

import Styles from "./ActionNodeMesh.module.css";
import ViewError from "@/components/Error";
import { Expander } from "../../../GltfTree/Expander";
import { isNumber } from "@tolokoban/type-guards";
import { ViewAttribute } from "./Attribute";
import { stringifyJson } from "../../../util";

const $ = Theme.classNames;

export type ViewActionNodeMeshProps = CommonProps & {
	data: TgdDataGlb;
	meshIndex: number;
};

export function ViewActionNodeMesh({
	className,
	data,
	meshIndex,
}: ViewActionNodeMeshProps): JSX.Element {
	const mesh = data.getMesh(meshIndex);
	if (!mesh)
		return <ViewError>No mesh found with index #{meshIndex}!</ViewError>;

	return (
		<div className={$.join(className, Styles.actionNodeMesh)}>
			<ul>
				<Expander title={mesh.name || `Mesh #${meshIndex}`}>
					<pre>{stringifyJson(mesh)}</pre>
				</Expander>
				{mesh.primitives.map((primitive, index) => (
					<li key={index}>
						<b>Primitive {index}</b>
						<Expander title="Attributes">
							{Object.keys(primitive.attributes).map((attName) => (
								<Expander key={attName} title={attName}>
									<ViewAttribute
										data={data}
										attribute={primitive.attributes[attName]}
										name={attName}
									/>
								</Expander>
							))}
						</Expander>
						{primitive.indices !== undefined && (
							<Expander title="Indices">
								<ViewAttribute
									data={data}
									attribute={primitive.indices}
									name={"Indices"}
								/>
							</Expander>
						)}
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
									<pre>
										{JSON.stringify(
											data.getMaterial(primitive.material),
											null,
											"  ",
										)}
									</pre>
								)}
							</Expander>
						)}
						<Expander title="Verbatim">
							<pre>{stringifyJson(primitive)}</pre>
						</Expander>
					</li>
				))}
			</ul>
		</div>
	);
}
