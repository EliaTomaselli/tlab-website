import styles from "./Calendar.module.css";

import React from "react";
import { DateTime, Info } from "luxon";
import clsx from "clsx";

import translations from "./translations.json";
import Arrow from "../Arrow/Arrow";

type CalendarProps = {
	locale: string;
	events: object[];
};

type CalendarState = {
	date: DateTime;
};

class Calendar extends React.Component<CalendarProps, CalendarState> {
	// Time to use to initialize the calendar
	private now: DateTime = DateTime.now();

	constructor(props: CalendarProps) {
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

	render() {
		const locale = this.props.locale as keyof typeof translations;

		const start = this.state.date.setLocale(locale).startOf("month").startOf("week", { useLocaleWeeks: true });
    const end = this.state.date.setLocale(locale).endOf("month").endOf("week", { useLocaleWeeks: true });

		const weekElements = [];
		for (let date = start, index = 0; date.startOf("day") <= end.startOf("day"); index++) {
			const dayElements = [];
			for (let i = 0; i < 7; i++) {
				dayElements.push(
					<li
						key={date.day}
						className={clsx({
							[styles.day]: true,
							[styles.isInMonth]: date.month === this.state.date.month,
						})}
					>
						{date.day}
					</li>
				);

				date = date.plus({ days: 1 });
			}

			weekElements.push(
				<ul key={index} className={styles.daysRow}>
					{dayElements}
				</ul>
			);
		}

		const weekdayElements = [];
		for (let date = start, i = 0; i < 7; date = date.plus({ day: 1 }), i++) {
			weekdayElements.push(<li key={i} className={styles.weekDay}>{date.weekdayShort}</li>);
		}

		return (
			<div className={styles.Calendar}>
				<div className={styles.calendarViewNavigator}>
					<div className={styles.nextAndPrevContainer}>
						<button className={styles.prevButton} onClick={() => this.onCalendarViewChange("previous")}>
							<Arrow direction="left" />
						</button>
						<span className={styles.currentYearAndMonth}>
							{this.state.date.toLocaleString({ month: "short", year: "numeric" })}
						</span>
						<button className={styles.nextButton} onClick={() => this.onCalendarViewChange("next")}>
							<Arrow direction="right" />
						</button>
					</div>
					<button className={styles.todayButton} onClick={() => this.onCalendarViewChange("today")}>
						{translations[locale].today}
					</button>
				</div>
				<ul className={styles.calendarView}>
					<ul className={styles.weekDays}>{weekdayElements}</ul>
					<ul className={styles.daysTable}>{weekElements}</ul>
				</ul>
			</div>
		);
	}
}

export default Calendar;
