import clsx from "clsx";
import styles from "./CortenFrame.module.css";
import { useRef } from "react";

type CortenFrameProps = {
	className?: string;
	children: React.ReactNode;
};

const frameSize = 40;
const imageWidth = 800;
const imageHeight = 30;
const aspectRatio = imageWidth / imageHeight;

function CortenFrame(props: CortenFrameProps) {
	return (
		<div className={clsx(styles.CortenFrame, props.className)}>
			<svg className={styles.defs}>
				<defs>
					<pattern
						id="band-h"
						width={aspectRatio * frameSize}
						height={frameSize}
						patternTransform="scale(-1, 1)"
						patternUnits="userSpaceOnUse"
					>
						<image href="/tlab-website/images/fascia.png" height={frameSize} />
					</pattern>
					<pattern
						id="band-v"
						width={aspectRatio * frameSize}
						height={frameSize}
						patternUnits="userSpaceOnUse"
						patternTransform="rotate(90)"
					>
						<image href="/tlab-website/images/fascia.png" height={frameSize} />
					</pattern>
				</defs>
			</svg>
			<svg className={styles.topFrame} width="100%" height="100%">
				<rect width="100%" height="100%" fill="url(#band-h)" />
			</svg>
			<svg className={styles.leftFrame} width="100%" height="100%">
				<rect width="100%" height="100%" fill="url(#band-v)" />
			</svg>
			<div className={styles.content}>{props.children}</div>
			<svg className={styles.rightFrame} width="100%" height="100%">
				<rect width="100%" height="100%" fill="url(#band-v)" />
			</svg>
			<svg className={styles.bottomFrame} width="100%" height="100%">
				<rect width="100%" height="100%" fill="url(#band-h)" />
			</svg>
		</div>
	);
}

export default CortenFrame;
