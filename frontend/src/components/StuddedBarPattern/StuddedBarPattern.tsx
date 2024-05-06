import styles from "./StuddedBarPattern.module.css";

const frameSize = 40;
const imageWidth = 800;
const imageHeight = 30;
const aspectRatio = imageWidth / imageHeight;

function StuddedBarPattern() {
	return (
		<svg className={styles.StuddedBarPattern}>
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
	);
}

export default StuddedBarPattern;
