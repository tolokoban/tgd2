import { assertType } from "./guards";

export type ArrayNumber2 = [number, number];
export type ArrayNumber3 = [number, number, number];
export type ArrayNumber4 = [number, number, number, number];
// prettier-ignore
export type ArrayNumber9 = [
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
];
// prettier-ignore
export type ArrayNumber16 = [
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
	number,
];

export function expectArrayNumber16(data: unknown): ArrayNumber16 {
	assertType<ArrayNumber16>(data, [
		"array",
		"number",
		{
			min: 16,
			max: 16,
		},
	]);
	return data;
}

export function expectArrayNumber9(data: unknown): ArrayNumber9 {
	assertType<ArrayNumber9>(data, [
		"array",
		"number",
		{
			min: 9,
			max: 9,
		},
	]);
	return data;
}

export function expectArrayNumber4(data: unknown): ArrayNumber4 {
	assertType<ArrayNumber4>(data, [
		"array",
		"number",
		{
			min: 4,
			max: 4,
		},
	]);
	return data;
}

export function expectArrayNumber3(data: unknown): ArrayNumber3 {
	assertType<ArrayNumber3>(data, [
		"array",
		"number",
		{
			min: 3,
			max: 3,
		},
	]);
	return data;
}

export function expectArrayNumber2(data: unknown): ArrayNumber2 {
	assertType<ArrayNumber2>(data, [
		"array",
		"number",
		{
			min: 2,
			max: 2,
		},
	]);
	return data;
}
