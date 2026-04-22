import { TgdPainterClear } from "../../../../../lib/dist"
import type { TestCase } from "../../types"

const testCase: TestCase = {
	label: "Clear Red",
	async exec(context) {
		return () => {
			context.add(
				new TgdPainterClear(context, {
					color: [0.7, 0.3, 0.1, 1],
				}),
			)
		}
	},
}

export default testCase
