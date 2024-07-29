import styles from "./PictureLink.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

type OvalLinkProps = {
	text: string;
	to: string;
	type: 0 | 1 | 2 | 3 | 4;
};

const escapedNewLineToLineBreakTag = (s: string) => {
	return s.split("\n").map((item, index) => {
		return index === 0 ? item : [<br key={index} />, item];
	});
};

function PictureLink(props: OvalLinkProps) {
	const src = `/tlab-website/images/quadro${props.type}.png`;

	return (
		<div className={clsx(styles.PictureLink, styles.underlineFromCenter, styles[`type${props.type}`])}>
			<img className={styles.frame} src={src} />
			<Link className={styles.link} to={props.to}>
				<span className={styles.text}>{escapedNewLineToLineBreakTag(props.text)}</span>
			</Link>
		</div>
	);
}

export default PictureLink;
