import { Theme } from "@tolokoban/ui";
import Style from "./Error.module.css";

const $ = Theme.classNames;

export interface ErrorProps {
	className?: string;
	children: React.ReactNode;
}

export default function ViewError({ className, children }: ErrorProps) {
	return <div className={$.join(className, Style.Error)}>{children}</div>;
}
