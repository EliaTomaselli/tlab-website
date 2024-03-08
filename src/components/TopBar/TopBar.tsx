import styles from "./TopBar.module.css";

import LanguageSelector, { Locale } from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import TlabLogo from "../TlabLogo/TlabLogo";

function TopBar() {
	const { i18n } = useTranslation();

	const locales: Locale[] = ["it", "en", "de"];
	const selectedLocale = i18n.language as Locale;

	return (
		<div className={styles.TopBar}>
      <TlabLogo />
			<LanguageSelector
				className={styles.LanguageSelector}
				selectedLocale={selectedLocale}
				locales={locales}
				onLocaleChange={(locale) => i18n.changeLanguage(locale)}
			></LanguageSelector>
		</div>
	);
}

export default TopBar;
