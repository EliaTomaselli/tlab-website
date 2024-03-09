import styles from "./Home.module.css";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar/Avatar";
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble";

function Home() {
	const { t } = useTranslation();

	return (
		<main className={styles.Home}>
			<SpeechBubble className={styles.SpeechBubble} text="Ciao! Cosa vuoi fare?" />
			<Avatar className={styles.Avatar} />
			<div className={styles.links}>
				<Link className={styles.link} to="./paths">
					{t("Percorsi")}
				</Link>
				<Link className={styles.link} to="./events">
					{t("Eventi")}
				</Link>
				<Link className={styles.link} to="./contacts">
					{t("Contatti")}
				</Link>
				<Link className={styles.link} to="./error">
					{t("Errore 404")}
				</Link>
			</div>
		</main>
	);
}

export default Home;
