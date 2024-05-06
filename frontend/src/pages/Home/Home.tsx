import styles from "./Home.module.css";

import { useTranslation } from "react-i18next";

import Avatar from "../../components/Avatar/Avatar";
import FramedLink from "../../components/FramedLink/FramedLink";
import StuddedBar from "../../components/StuddedBar/StuddedBar";

function Home() {
	const { t } = useTranslation();

	return (
		<main className={styles.Home}>
			{/* <SpeechBubble className={styles.SpeechBubble} text={t("title")} /> */}
			<Avatar className={styles.Avatar} alt={t("avatar")} />
      <StuddedBar direction="v" />
			<div className={styles.links}>
				<FramedLink to="what-is-tlab" text={t("Cos'è il T-Lab")} />
				<FramedLink to="points-of-interests" text={t("Luoghi d'interesse")} />
				<FramedLink to="paths" text={t("Mappa percorsi")} />
				<FramedLink to="events" text={t("Eventi in programma")} />
				<FramedLink to="hospitality" text={t("Accoglienza")} />
				<FramedLink to="products" text={t("Prodotti del territorio")} />
			</div>
		</main>
	);
}

export default Home;
