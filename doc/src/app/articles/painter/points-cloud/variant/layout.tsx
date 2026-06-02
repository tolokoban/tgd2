export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<hr />
			<a href="#/articles/painters/points-cloud">Back to Points Cloud</a>
		</>
	);
}
