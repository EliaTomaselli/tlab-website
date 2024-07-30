import styles from "./Events.module.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { DateTime } from "luxon";

import MonthlyCalendar, { MonthlyCalendarEvent } from "../../components/MonthlyCalendar/MonthlyCalendar";
import EventsList from "../../components/EventsList/EventsList";

import { CalendarEvent } from "../../data/events";

import events from "../../data/events.json";
import eventColors from "../../data/event-colors.json";
import WeeklyCalendar from "../../components/WeeklyCalendar/WeeklyCalendar";
import StuddedBar from "../../components/StuddedBar/StuddedBar";
import DashedOutline from "../../components/DashedOutline/DashedOutline";

function Events() {
	const { i18n } = useTranslation();
	const [date, setDate] = useState<DateTime>(DateTime.now());

	const calendarEvents: MonthlyCalendarEvent[] = [];

	for (const event of events as CalendarEvent[]) {
		const color = eventColors[event.category];
		calendarEvents.push({
			title: event.title,
			category: event.category,
			date: DateTime.fromISO(event.start),
			color,
		});
	}

	return (
		<main className={styles.Events}>
			<div className={styles.left}>
				<EventsList className={styles.EventsList} />
				<StuddedBar direction="h" />
				<MonthlyCalendar
					className={styles.monthlyCalendar}
					locale={i18n.language}
					events={calendarEvents}
					date={date}
					onDateChange={(time: DateTime) => setDate(time)}
				/>
			</div>
			<div className={styles.barContainer}>
				<StuddedBar className={styles.studdedBar} direction="v" />
				<img
					className={styles.uomoConGiornale}
					src="/tlab-website/images/uomo-con-giornale.png"
					alt="uomo con giornale"
				/>
			</div>
			<div className={styles.right}>
				<WeeklyCalendar
					className={styles.weeklyCalendar}
					locale={i18n.language}
					events={calendarEvents}
					date={date}
					onDateChange={(time: DateTime) => setDate(time)}
				/>
				<DashedOutline className={styles.dashedOutline} color={"rgba(0, 0, 0, 0.7)"} width={2}>
					<span className={styles.eventDescriptionPlaceholder}>Seleziona un evento dal calendario per visualizzarne i dettagli</span>
				</DashedOutline>
			</div>
		</main>
	);
}

export default Events;
