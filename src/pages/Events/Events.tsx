import styles from "./Events.module.css";

import { useTranslation } from "react-i18next";

import Calendar from "../../components/Calendar/Calendar";

function Events() {
	const { i18n } = useTranslation();

	return (
		<main className={styles.Events}>
      <Calendar locale={i18n.language}/>
		</main>
	);
}

export default Events;
