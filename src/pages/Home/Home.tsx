import styles from "./Home.module.css";

import { useTranslation } from "react-i18next";

const Home = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<button
				onClick={() => {
					i18n.language === "en" ? i18n.changeLanguage("it") : i18n.changeLanguage("en");
				}}
			>
				Premi per cambiare lingua
			</button>
			<div className={styles.Home}>{t("title")}</div>
			<img alt="Omino che saluta" src={"/images/stick-man.png"}></img>
		</>
	);
};

export default Home;
