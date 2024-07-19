import Checkbox from "../Checkbox/Checkbox";
import EventBullet from "../EventBullet/EventBullet";
import styles from "./EventListItem.module.css";

type EventListItemProps = {
	category: string;
	checked: boolean;
	onChange: () => void;
};

function EventListItem(props: EventListItemProps) {
	return (
		<li className={styles.event}>
			<Checkbox checked={true} onChange={() => {}} />
			<EventBullet color={getEventColor(category as keyof typeof categories)} title={category} />
			<span className={styles.eventName}>{category}</span>
			<span className={styles.eventCount}>({getEventCount(category as keyof typeof categories)})</span>
		</li>
	);
}

export default EventListItem;
