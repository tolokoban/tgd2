export default function Page() {
	return (
		<iframe
			title="Reference"
			src="docs/index.html"
			style={{
				position: "absolute",
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
				width: "100%",
				height: "100%",
				border: "none",
			}}
		></iframe>
	);
}
