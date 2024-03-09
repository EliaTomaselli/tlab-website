import styles from "./TtsButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

function TtsButton() {
	return (
		<button className={styles.TtsButton} onClick={() => console.log("TTS button clicked")}>
			<FontAwesomeIcon icon={faHeadphones} size="xl" />
		</button>
	);
}

export default TtsButton;
