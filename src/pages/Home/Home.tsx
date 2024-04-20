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
			{/* <SpeechBubble className={styles.SpeechBubble} text={t("title")} /> */}
			<Avatar className={styles.Avatar} alt={t("avatar")}/>
			<div className={styles.links}>
				<div className={styles.leftLinks}>
					<HomeLink to="what-is-tlab" text={t("Cos'è il T-Lab")} />
					<HomeLink to="what-to-see" text={t("Luoghi d'interesse")} />
					<HomeLink to="paths" text={t("Mappa percorsi")} />
				</div>
				<div className={styles.rightLinks}>
					<HomeLink to="events" text={t("Eventi")} />
					<HomeLink to="where-to-eat" text={t("Accoglienza")} />
					<HomeLink to="where-to-eat" text={t("Prodotti del territorio")} />
				</div>
			</div>
		</main>
	);
}

export default Home;
