import styles from "./Home.module.css";

import { useTranslation } from "react-i18next";

import Avatar from "../../components/Avatar/Avatar";
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble";

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles.Home}>
        <SpeechBubble className={styles.SpeechBubble} text="Ciao! Cosa vuoi fare?" />
        <Avatar className={styles.Avatar}/>
        <div className={styles.buttons}>
          <button>{t("button1")}</button>
          <button>{t("button2")}</button>
        </div>
			</div>
		</>
	);
}

export default Home;
