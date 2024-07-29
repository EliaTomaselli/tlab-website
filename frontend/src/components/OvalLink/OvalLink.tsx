import styles from "./OvalLink.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

type OvalLinkProps = {
	text: string;
	to: string;
};

const escapedNewLineToLineBreakTag = (s: string) => {
	return s.split("\n").map((item, index) => {
		return index === 0 ? item : [<br key={index} />, item];
	});
};

function OvalLink(props: OvalLinkProps) {
	return (
		<div className={clsx(styles.OvalLink, styles.underlineFromCenter)}>
			<img className={styles.frame} src="/tlab-website/images/cornice-ovale.png" />
			<Link className={styles.link} to={props.to}>
				<span className={styles.text}>{escapedNewLineToLineBreakTag(props.text)}</span>
			</Link>
		</div>
	);
}

export default OvalLink;
