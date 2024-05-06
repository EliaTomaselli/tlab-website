import clsx from "clsx";
import styles from "./CortenFrame.module.css";

import StuddedBarPattern from "../StuddedBarPattern/StuddedBarPattern";
import StuddedBar from "../StuddedBar/StuddedBar";

type CortenFrameProps = {
	className?: string;
	children: React.ReactNode;
};

function CortenFrame(props: CortenFrameProps) {
	return (
		<div className={clsx(styles.CortenFrame, props.className)}>
			<StuddedBarPattern />
			<div className={styles.content}>{props.children}</div>
			<StuddedBar className={styles.topFrame} direction="h" />
			<StuddedBar className={styles.leftFrame} direction="v" />
			<StuddedBar className={styles.rightFrame} direction="v" />
			<StuddedBar className={styles.bottomFrame} direction="h" />
		</div>
	);
}

export default CortenFrame;
