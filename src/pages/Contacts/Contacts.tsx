import { useTranslation } from "react-i18next";
import styles from "./Contacts.module.css";

function Contacts() {
	const { t } = useTranslation();

	return (
		<main className={styles.Contacts}>
			<h1>{t("Contacts")}</h1>
			<p>Massimo Simini - 123 123 1234</p>
			<p>Elia Tomaselli - 123 123 1234</p>
			<p>Licia Tomaselli - 123 123 1234</p>
		</main>
	);
}

export default Contacts;
