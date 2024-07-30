import styles from "./Home.module.css";

import { useTranslation } from "react-i18next";

import MaleAvatar from "../../components/MaleAvatar/MaleAvatar";
import FemaleAvatar from "../../components/FemaleAvatar/FemaleAvatar";
import OvalLink from "../../components/OvalLink/OvalLink";
// import BlackboardLink from "../../components/BlackboardLink/BlackboardLink";
import StuddedBar from "../../components/StuddedBar/StuddedBar";

function Home() {
	const { t } = useTranslation();

	return (
		<main className={styles.Home}>
			<div className={styles.background}>
				<MaleAvatar className={styles.MaleAvatar} alt={t("avatar")} />
			</div>
			<StuddedBar direction="v" />
			<div className={styles.links}>
				{/* <BlackboardLink to="what-is-tlab" text={t("Cos'è il T-Lab")} type={2} /> */}
				<OvalLink to="what-is-tlab" text={t("Cos'è il T-Lab")} />
				<OvalLink to="paths" text={t("Esplora il territorio")} />
				<OvalLink to="events" text={t("Eventi in programma")} />
				<OvalLink to="hospitality" text={t("Accoglienza\ne servizi")} />
			</div>
			<FemaleAvatar className={styles.FemaleAvatar} alt={t("avatar")} />
		</main>
	);
}

export default Home;
