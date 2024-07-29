import styles from "./Paths.module.css";

import { useTranslation } from "react-i18next";

import Map from "../../components/Map/Map";
import StuddedBar from "../../components/StuddedBar/StuddedBar";
import FramedLink from "../../components/OvalLink/OvalLink";

function Paths() {
	const { t } = useTranslation();

	return (
		<main className={styles.Paths}>
			<div className={styles.links}>
				<FramedLink to="explore" text={t("Esplora il territorio")} />
				<FramedLink to="paths" text={t("Percorsi")} />
				<FramedLink to="create-your-path" text={t("Crea il tuo percorso")} />
			</div>
			<div className={styles.barContainer}>
				<StuddedBar direction="v" />
				<img className={styles.uomoConCannocchiale} src="/tlab-website/public/images/uomo-con-cannocchiale.png" alt="Uomo con cannocchiale" />
			</div>
			<Map></Map>
		</main>
	);
}

export default Paths;
