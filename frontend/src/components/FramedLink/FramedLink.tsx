import styles from "./FramedLink.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

type FramedLinkProps = {
	text: string;
	to: string;
};

const escapedNewLineToLineBreakTag = (s: string) => {
	return s.split("\n").map((item, index) => {
		return index === 0 ? item : [<br key={index} />, item];
	});
};

function FramedLink(props: FramedLinkProps) {
	return (
		<div className={clsx(styles.FramedLink, styles.underlineFromCenter)}>
			<img className={styles.frame} src="/tlab-website/images/cornice-ovale.png" />
			<Link className={styles.link} to={props.to}>
				<span className={styles.text}>{escapedNewLineToLineBreakTag(props.text)}</span>
			</Link>
		</div>
	);
}

export default FramedLink;
