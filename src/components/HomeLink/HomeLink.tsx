import styles from "./HomeLink.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

type HomeLinkProps = {
	text: string;
	to: string;
};

function HomeLink(props: HomeLinkProps) {
	return (
		<div className={clsx(styles.HomeLink, styles.underlineFromCenter)}>
			<img className={styles.frame} src="/tlab-website/images/cornice-ovale.png" />
			<Link className={styles.link} to={props.to}>
				{props.text}
			</Link>
		</div>
	);
}

export default HomeLink;
