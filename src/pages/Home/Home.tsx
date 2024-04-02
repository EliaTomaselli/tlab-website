import styles from "./Home.module.css";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar/Avatar";
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble";
import HomeLink from "../../components/HomeLink/HomeLink";

function Home() {
	const { t } = useTranslation();

	return (
		<main className={styles.Home}>
			<SpeechBubble className={styles.SpeechBubble} text={t("title")} />
			<Avatar className={styles.Avatar} />
			<div className={styles.links}>
				<HomeLink to="what-is-tlab" text={t("Cos'è il T-Lab")} />
				<HomeLink to="what-to-see" text={t("Cosa vedere")} />
				<HomeLink to="where-to-eat" text={t("Dove mangiare")} />
				<HomeLink to="what-to-do" text={t("Cosa fare")} />
				<HomeLink to="events" text={t("Eventi")} />
				<HomeLink to="paths" text={t("Mappa percorsi")} />
			</div>
		</main>
	);
}

export default Home;
