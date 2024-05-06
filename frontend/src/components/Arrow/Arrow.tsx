import styles from "./Arrow.module.css";
import clsx from "clsx";

type ArrowProps = {
	direction: "up" | "down" | "left" | "right";
	length?: number;
	width?: number;
	color?: string;
	className?: string;
};

function Arrow(props: ArrowProps) {
	return (
		<i
			className={clsx(styles.Arrow, styles[props.direction], props.className)}
			style={{
				borderWidth: `0 ${props.width}px ${props.width}px 0`,
				padding: `${props.length}px`,
			}}
		></i>
	);
}

export default Arrow;
