import React from "react";
import { tgdLoadArrayBuffer, TgdDataGlb } from "@tolokoban/tgd";

// import DefaultURL from "./danatia.glb";
// import DefaultURL from "./apple.glb"
import DefaultURL from "./cube-zip.glb";

export function useData(): [
	TgdDataGlb | null,
	(urlOrFile: string | File) => void,
] {
	const [data, setData] = React.useState<TgdDataGlb | null>(null);
	const load = React.useCallback((urlOrFile: string | File) => {
		tgdLoadArrayBuffer(urlOrFile)
			.then((content) => {
				if (!content) return;

				TgdDataGlb.parse(content).then(setData);
			})
			.catch(console.error);
	}, []);
	React.useEffect(() => {
		load(DefaultURL);
	}, [load]);
	return [data, load];
}
