import styles from "./Error404.module.css";

import { useTranslation } from "react-i18next";

function Error404() {
  const { t } = useTranslation();

	return <main className={styles.Error404}>
    <img src="/tlab-website/images/uomo-confuso.png" alt="Uomo confuso"></img>
    <p>{t("Error 404")}</p>
  </main>;
}

export default Error404;
