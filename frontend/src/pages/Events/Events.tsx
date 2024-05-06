import styles from "./Events.module.css";

import { useTranslation } from "react-i18next";

import { DateTime } from "luxon";

import MonthlyCalendar, { MonthlyCalendarEvent } from "../../components/MonthlyCalendar/MonthlyCalendar";
import EventsList from "../../components/EventsList/EventsList";

import events from "../../data/events.json";
import categories from "../../data/event-categories.json";
import WeeklyCalendar from "../../components/WeeklyCalendar/WeeklyCalendar";
import StuddedBar from "../../components/StuddedBar/StuddedBar";

function getEventColor(category: keyof typeof categories): string {
	return categories[category].color;
}

function Events() {
	const { i18n } = useTranslation();

	const calendarEvents: MonthlyCalendarEvent[] = [];

	for (const event of events) {
		calendarEvents.push({
			title: event.name,
			category: event.category,
			date: DateTime.fromISO(event.start),
			color: getEventColor(event.category as keyof typeof categories),
		});
	}

	return (
		<main className={styles.Events}>
			<div className={styles.left}>
				<EventsList className={styles.EventsList} />
				<StuddedBar direction="h" />
				<MonthlyCalendar className={styles.monthlyCalendar} locale={i18n.language} events={calendarEvents} />
			</div>
			<div className={styles.barContainer}>
				<StuddedBar className={styles.studdedBar} direction="v" />
				<img className={styles.uomoConGiornale} src="/tlab-website/images/uomo-con-giornale.png" alt="uomo con giornale" />
			</div>
			<div className={styles.right}>
				<WeeklyCalendar locale={i18n.language} events={calendarEvents} />
			</div>
		</main>
	);
}

export default Events;
