import styles from "./TlabLogo.module.css";

import { Link } from "react-router-dom";
import clsx from "clsx";

type TlabLogoProps = {
  className?: string;
};

function TlabLogo(props: TlabLogoProps) {
	return (
		<Link className={clsx(styles.TlabLogo, props.className)} to={"/tlab-website/"}>
      T-LAB
			{/* <img src="/tlab-logo.svg" alt="Tlab Logo" /> */}
		</Link>
	);
}

export default TlabLogo;
