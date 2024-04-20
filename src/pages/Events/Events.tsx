import styles from "./Events.module.css";

import { useTranslation } from "react-i18next";

import { DateTime } from "luxon";

import Calendar, { CalendarEvent } from "../../components/Calendar/Calendar";
import EventsList from "../../components/EventsList/EventsList";

import events from "../../data/events.json";
import categories from "../../data/event-categories.json";

function getEventColor(category: keyof typeof categories): string {
  return categories[category].color;
}

function Events() {
	const { i18n } = useTranslation();

  const calendarEvents: CalendarEvent[] = [];

  for (const event of events) {
    calendarEvents.push({
      title: event.name,
      category: event.category,
      date: DateTime.fromISO(event.start),
      color: getEventColor(event.category as keyof typeof categories)
    });
  }

	return (
		<main className={styles.Events}>
      <EventsList />
      <Calendar locale={i18n.language} events={calendarEvents}/>
		</main>
	);
}

export default Events;
