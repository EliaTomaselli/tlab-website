import styles from "./TopBarLink.module.css";

import { Link } from "react-router-dom";

type TopBarLinkProps = {
	text: string;
	to: string;
};

function TopBarLink(props: TopBarLinkProps) {
	return (
		<Link className={styles.TopBarLink} to={props.to}>
			{props.text}
		</Link>
	);
}

export default TopBarLink;
