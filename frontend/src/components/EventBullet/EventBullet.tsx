import styles from "./EventBullet.module.css";

type EventBulletProps = {
	title: string;
	color: string;
};

function EventBullet(props: EventBulletProps) {
	return <span className={styles.EventBullet} style={{ backgroundColor: props.color }}></span>;
}

export default EventBullet;
