import styles from "./EventsList.module.css";

import { useState } from "react";
import clsx from "clsx";

import categories from "../../data/event-categories.json";
import events from "../../data/events.json";
import Checkbox from "../Checkbox/Checkbox";
import EventBullet from "../EventBullet/EventBullet";

type EventsListProps = {
	className?: string;
};

function getEventColor(category: keyof typeof categories): string {
	return categories[category].color;
}

function getEventCount(category: keyof typeof categories): number {
	let count = 0;

	for (const eventIndex in events) {
		const event = events[eventIndex];
		if (event.category === category) {
			count++;
		}
	}

	return count;
}

function EventsList(props: EventsListProps) {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([...Object.keys(categories)]);

	const eventElements: JSX.Element[] = [];

	// TODO Usare memoization per evitare di calcolare getEventCount e getEventColor ad ogni render
	for (const category in categories) {
		eventElements.push(
			
		);
	}

	return (
		<div className={clsx(styles.EventsList, props.className)}>
			<h1 className={styles.eventsTitle}>Eventi</h1>
			<ul className={styles.events}>{eventElements}</ul>
		</div>
	);
}

export default EventsList;
