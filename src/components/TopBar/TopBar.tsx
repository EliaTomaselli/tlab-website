import styles from "./TopBar.module.css";

import { useTranslation } from "react-i18next";

import TlabLogo from "../TlabLogo/TlabLogo";
import TtsButton from "../TtsButton/TtsButton";
import LanguageSelector, { Locale } from "../LanguageSelector/LanguageSelector";
import TopBarLink from "../TopBarLink/TopBarLink";

function TopBar() {
	const { i18n } = useTranslation();

	const locales: Locale[] = ["it", "en", "de"];
	const selectedLocale = i18n.language as Locale;

	return (
		<div className={styles.TopBar}>
			<div className={styles.rightTopBar}>
				<TlabLogo />
				<TopBarLink text={"Contatti"} to="contacts" />
			</div>
			<div className={styles.leftTopBar}>
				<TtsButton />
				<LanguageSelector
					className={styles.LanguageSelector}
					selectedLocale={selectedLocale}
					locales={locales}
					onLocaleChange={(locale) => i18n.changeLanguage(locale)}
				></LanguageSelector>
			</div>
		</div>
	);
}

export default TopBar;
