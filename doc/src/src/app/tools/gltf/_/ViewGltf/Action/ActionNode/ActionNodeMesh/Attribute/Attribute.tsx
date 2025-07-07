import {
	webglLookup,
	type TgdDataGlb,
	type TgdFormatGltfMeshPrimitiveAttribute,
} from "@tolokoban/tgd";
import { Theme } from "@tolokoban/ui";
import { isNumber } from "@tolokoban/type-guards";

import Styles from "./Attribute.module.css";
import ViewError from "@/components/Error";

const $ = Theme.classNames;

export type ViewAttributeProps = {
	className?: string;
	data: TgdDataGlb;
	/** Attribute's name */
	name: string;
	attribute: TgdFormatGltfMeshPrimitiveAttribute;
};

export function ViewAttribute({
	className,
	data,
	attribute,
}: ViewAttributeProps) {
	if (isNumber(attribute)) {
		const accessor = data.getAccessor(attribute);
		if (!accessor) {
			return <ViewError>Accessor #{attribute} does not exist!</ViewError>;
		} else {
			return (
				<fieldset className={$.join(className, Styles.attribute)}>
					<legend>Accessor #{attribute}</legend>
					<ul>
						<li>bufferView: {renderValue(accessor.bufferView)}</li>
						<li>byteOffset: {renderValue(accessor.byteOffset)}</li>
						<li>componentType: {renderValue(accessor.componentType, true)}</li>
						<li>normalized: {renderValue(accessor.normalized)}</li>
						<li>count: {renderValue(accessor.count)}</li>
						<li>type: {renderValue(accessor.type)}</li>
						<li>name: {renderValue(accessor.name)}</li>
						<li>min: {renderValue(accessor.min)}</li>
						<li>max: {renderValue(accessor.max)}</li>
					</ul>
				</fieldset>
			);
		}
	} else {
		// return (
		// 	<fieldset className={$.join(className, Styles.attribute)}>
		// 		<legend>Inline</legend>
		// 		<ul>
		// 			<li>size: {renderValue(attribute.size)}</li>
		// 			<li>count: {renderValue(attribute.count)}</li>
		// 			<li>byteOffset: {renderValue(attribute.byteOffset)}</li>
		// 			<li>type: {renderValue(attribute.type)}</li>
		// 			<li>componentType: {renderValue(attribute.componentType, true)}</li>
		// 			<li>min: {renderValue(attribute.min)}</li>
		// 			<li>max: {renderValue(attribute.max)}</li>
		// 		</ul>
		// 	</fieldset>
		// );
        return null
	}
}

function renderValue(value: unknown, lookup = false) {
	if (value === undefined)
		return <em className={Styles.undefined}>undefined</em>;

	if (isNumber(value) && lookup)
		return (
			<>
				<b>{webglLookup(value)}</b> ({value})
			</>
		);
	return <b>{JSON.stringify(value)}</b>;
}
