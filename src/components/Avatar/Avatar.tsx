import styles from "./Avatar.module.css";

import clsx from "clsx";

type AvatarProps = {
  className?: string;
};

function Avatar(props: AvatarProps) {
	return (
		<div className={clsx(styles.Avatar, props.className)}>
			<img className={styles.image} src="/images/stick-man.png" alt="Image of an avatar" />
		</div>
	);
}

export default Avatar;
