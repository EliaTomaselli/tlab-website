import styles from "./Error404.module.css";

import { useTranslation } from "react-i18next";

import StuddedBar from "../../components/StuddedBar/StuddedBar";

function Error404() {
	const { t } = useTranslation();

	return (
		<main className={styles.Error404}>
			<div className={styles.background}>
				<img src="/tlab-website/images/uomo-confuso.png" alt="Uomo confuso"></img>
			</div>
			<StuddedBar direction="v" />
			<p className={styles.description}>{t("Error 404")}</p>
		</main>
	);
}

export default Error404;
