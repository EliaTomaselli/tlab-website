import styles from "./Events.module.css";
import "rsuite/Calendar/styles/index.css";

import { Calendar } from "rsuite";

function Events() {
	return (
		<main className={styles.Events}>
			<Calendar bordered={true} />
		</main>
	);
}

export default Events;
