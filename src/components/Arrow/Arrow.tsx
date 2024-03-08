import styles from "./Arrow.module.css";
import clsx from "clsx";

type ArrowProps = {
	direction: "up" | "down" | "left" | "right";
	className?: string;
};

function Arrow(props: ArrowProps) {
	return <i className={clsx(styles.Arrow, styles[props.direction], props.className)}></i>;
}

export default Arrow;
