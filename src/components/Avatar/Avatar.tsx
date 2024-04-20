import styles from "./Avatar.module.css";

import clsx from "clsx";

type AvatarProps = {
	className?: string;
  alt: string;
};

function Avatar(props: AvatarProps) {
	return (
		<img
			className={clsx(styles.Avatar, props.className)}
			src="/tlab-website/images/uomo-con-bacchetta-lunga.png"
			alt={props.alt}
		/>
	);
}

export default Avatar;
