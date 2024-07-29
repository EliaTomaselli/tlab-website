import styles from "./WeeklyCalendar.module.css";

import React from "react";
import { DateTime } from "luxon";
import clsx from "clsx";

import translations from "./translations.json";
import Arrow from "../Arrow/Arrow";
import EventBullet from "../EventBullet/EventBullet";

export type WeeklyCalendarEvent = {
	title: string;
	category: string;
	date: DateTime;
	color: string;
};

type WeeklyCalendarProps = {
	locale: string;
	events: WeeklyCalendarEvent[];
	className?: string;
};

type WeeklyCalendarState = {
	date: DateTime;
};

class WeeklyCalendar extends React.Component<WeeklyCalendarProps, WeeklyCalendarState> {
	// Time to use to initialize the calendar
	// And to keep track of today when the user clicks on the "today" button
	private now: DateTime = DateTime.now();

	constructor(props: WeeklyCalendarProps) {
		super(props);

		this.state = {
			date: this.now,
		};

		this.onCalendarViewChange = this.onCalendarViewChange.bind(this);
	}

	private onCalendarViewChange(operation: "today" | "next" | "previous") {
		switch (operation) {
			case "today":
				this.setState({
					date: this.now,
				});
				break;
			case "next":
				this.setState({
					date: this.state.date.plus({ month: 1 }),
				});
				break;
			case "previous":
				this.setState({
					date: this.state.date.minus({ month: 1 }),
				});
				break;
		}
	}

	private sortCalendarEventsByDate(calendarEvents: WeeklyCalendarEvent[]): WeeklyCalendarEvent[] {
		return calendarEvents.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
	}

	render() {
		const locale = this.props.locale as keyof typeof translations;

		const start = this.state.date.setLocale(locale).startOf("week", { useLocaleWeeks: true });
		const end = this.state.date.setLocale(locale).endOf("week", { useLocaleWeeks: true });

		let calendarEvents = this.sortCalendarEventsByDate([...this.props.events]);
		calendarEvents = calendarEvents.filter((event) => event.date >= start && event.date <= end);

		// Index used to keep track of the current event that is being navigated in the calendarEvents array
		let currentEventIndex = 0;

		const dayElements = [];
		for (let date = start, index = 0; date.startOf("day") <= end.startOf("day"); index++) {
			const eventsOfTheDay = [];
			for (; currentEventIndex < calendarEvents.length; currentEventIndex++) {
				if (calendarEvents[currentEventIndex].date.startOf("day") <= date.startOf("day")) {
					eventsOfTheDay.push(calendarEvents[currentEventIndex]);
				} else {
					break;
				}
			}

			dayElements.push(
				<li
					key={date.day}
					className={clsx({
						[styles.day]: true,
						[styles.isInMonth]: date.month === this.state.date.month,
						[styles.isToday]: date.month === this.now.month && date.day === this.now.day,
					})}
				>
					{date.day}
					{eventsOfTheDay.length !== 0 && (
						<div className={styles.events}>
							{eventsOfTheDay.map((event, index) => (
								<EventBullet key={index} color={event.color} title={event.title} />
							))}
						</div>
					)}
				</li>
			);

			date = date.plus({ days: 1 });
		}

		const weekdayElements = [];
		for (let date = start, i = 0; i < 7; date = date.plus({ day: 1 }), i++) {
			weekdayElements.push(
				<li key={i} className={styles.weekday}>
					{date.weekdayShort}
				</li>
			);
		}

		return (
			<div className={clsx(styles.WeeklyCalendar, this.props.className)}>
				<div className={styles.calendarNavigator}>
					<div className={styles.nextAndPrevContainer}>
						<button className={styles.prevButton} onClick={() => this.onCalendarViewChange("previous")}>
							<Arrow className={styles.prevArrow} direction="left" length={4} width={3} />
						</button>
						<span className={styles.currentYearAndMonth}>
							{this.state.date.toLocaleString({ month: "short", year: "numeric" })}
						</span>
						<button className={styles.nextButton} onClick={() => this.onCalendarViewChange("next")}>
							<Arrow className={styles.nextArrow} direction="right" length={4} width={3} />
						</button>
					</div>
					<button className={styles.todayButton} onClick={() => this.onCalendarViewChange("today")}>
						{translations[locale].today}
					</button>
				</div>
				<ul className={styles.weekdays}>{weekdayElements}</ul>
				<ul className={styles.week}>{dayElements}</ul>
			</div>
		);
	}
}

export default WeeklyCalendar;
