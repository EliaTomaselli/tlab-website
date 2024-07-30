import styles from "./EventListItem.module.css";

import eventColors from "../../data/event-colors.json";
import { CalendarEventCategory } from "../../data/events";

import Checkbox from "../Checkbox/Checkbox";
import EventBullet from "../EventBullet/EventBullet";

type EventListItemProps = {
	category: CalendarEventCategory;
	checked: boolean;
	onChange: () => void;
};

function EventListItem(props: EventListItemProps) {
	const { category } = props;
	const color = eventColors[category as keyof typeof eventColors];
  // TODO - count should be calculated based on the number of events in the category
  const count = 1;

	return (
		<li className={styles.EventListItem}>
			<Checkbox className={styles.checkbox} checked={props.checked} onChange={props.onChange} />
			<EventBullet color={color} />
			<span className={styles.eventName}>{category}</span>
			<span className={styles.eventCount}>({count})</span>
		</li>
	);
}

export default EventListItem;
