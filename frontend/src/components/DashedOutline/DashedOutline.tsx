import styles from "./DashedOutline.module.css";

import clsx from "clsx";

type DashedOutlineProps = {
	color: string;
	width: number;
	className?: string;
	children?: React.ReactNode;
};

function DashedOutline(props: DashedOutlineProps) {
	return (
		<div className={clsx(styles.DashedOutline, props.className)}>
			<svg
				className={styles.svg}
				stroke={props.color}
				strokeWidth={props.width}
				strokeDasharray={"15 5"}
				preserveAspectRatio="none"
				viewBox="0 0 100 100"
			>
				<path d="M 5 5 L 95 5 L 95 95 L 5 95 Z" fill="none" vector-effect="non-scaling-stroke" />
			</svg>
			{props.children}
		</div>
	);
}

export default DashedOutline;
