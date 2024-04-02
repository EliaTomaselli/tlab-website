import styles from "./HomeLink.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

type HomeLinkProps = {
  text: string;
  to: string;
};

function HomeLink(props: HomeLinkProps) {
  return (
    <Link className={clsx(styles.HomeLink, styles.underlineFromCenter)} to={props.to}>
      {props.text}
    </Link>
  );
}

export default HomeLink;