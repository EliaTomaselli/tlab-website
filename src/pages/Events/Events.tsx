import styles from "./Events.module.css";

import { useTranslation } from "react-i18next";

import Calendar, { CalendarEvent } from "../../components/Calendar/Calendar";
import { DateTime } from "luxon";
import EventsList from "../../components/EventsList/EventsList";

function Events() {
	const { i18n } = useTranslation();

  const events: CalendarEvent[] = [
    {
      title: "Event 1",
      category: "event",
      date: DateTime.now(),
    }
  ];

	return (
		<main className={styles.Events}>
      <EventsList />
      <Calendar locale={i18n.language} events={events}/>
		</main>
	);
}

export default Events;
