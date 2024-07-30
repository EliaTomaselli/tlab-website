import styles from "./EventsList.module.css";

import { useState } from "react";
import clsx from "clsx";

import eventColors from "../../data/event-colors.json";
import { CalendarEventCategory } from "../../data/events";
import EventListItem from "../EventListItem/EventListItem";

type EventsListProps = {
	className?: string;
};

function EventsList(props: EventsListProps) {
	const [selectedCategories, setSelectedCategories] = useState<Record<CalendarEventCategory, boolean>>({
		Cinema: true,
		"Conferenze e incontri": true,
		"Escursioni e visite": true,
		Laboratori: true,
		"Manifestazioni e sagre": true,
		"Teatro e musica": true,
	});

	const eventElements: JSX.Element[] = [];

	// TODO Usare memoization per evitare di calcolare getEventCount e getEventColor ad ogni render
	for (const category of Object.keys(eventColors) as CalendarEventCategory[]) {
		const checked = selectedCategories[category];
		const onChange = () => {
			setSelectedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
		};

		eventElements.push(<EventListItem category={category} checked={checked} onChange={onChange} />);
	}

	return (
		<div className={clsx(styles.EventsList, props.className)}>
			<h1 className={styles.eventsTitle}>Eventi in programma</h1>
			<ul className={styles.events}>{eventElements}</ul>
		</div>
	);
}

export default EventsList;
