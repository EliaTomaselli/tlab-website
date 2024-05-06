import styles from "./EventCheckbox.module.css";

import Checkbox from "../Checkbox/Checkbox";
import EventBullet from "../EventBullet/EventBullet";

type EventCheckboxProps = {
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function EventCheckbox(props: EventCheckboxProps) {

	return (
		<li className={styles.EventCheckbox}>
			<Checkbox checked={true} onChange={() => {}} />
			<EventBullet color={getEventColor(category as keyof typeof categories)} title={category} />
			<span className={styles.eventName}>{category} </span>
			<span className={styles.eventCount}>({getEventCount(category as keyof typeof categories)}) </span>
		</li>
	);
}

export default EventCheckbox;
