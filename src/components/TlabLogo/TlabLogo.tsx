import styles from "./TlabLogo.module.css";

import clsx from "clsx";

type TlabLogoProps = {
  className?: string;
};

function TlabLogo(props: TlabLogoProps) {
	return (
		<div className={clsx(styles.TlabLogo, props.className)}>
      T-LAB
			{/* <img src="/tlab-logo.svg" alt="Tlab Logo" /> */}
		</div>
	);
}

export default TlabLogo;
