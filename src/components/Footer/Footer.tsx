import styles from "./Footer.module.css";

export function Footer() {
	return <footer className={styles.Footer}>
    <p className={styles.info}>© 2024 T-LAB</p>
    <p className={styles.info}>Piazza dei Santi, 55 - 38059 Castel Ivano (TN)</p>
    <p className={styles.info}>Mail: tlab@gmail.com</p>
    <p className={styles.info}>Tel: +39 123 456 7890</p>
  </footer>;
}

export default Footer;
