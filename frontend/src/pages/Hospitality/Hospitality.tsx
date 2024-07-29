import styles from "./Hospitality.module.css";

import StuddedBar from "../../components/StuddedBar/StuddedBar";
import PictureLink from "../../components/PictureLink/PictureLink";

function Hospitality() {
	return (
		<main className={styles.Hospitality}>
			<div className={styles.background}>
				<div className={styles.links}>
					<PictureLink to="where-to-eat" text={"Ristoranti\ne pizzerie"} type={0} />
					<PictureLink to="where-to-eat" text={"Bar\ne caffetterie"} type={1} />
					<PictureLink to="where-to-eat" text={"Alberghi\ne alloggi"} type={2} />
				</div>
			</div>
			<div className={styles.barContainer}>
				<StuddedBar className={styles.studdedBar} direction="v" />
				<img className={styles.donnaConCaffe} src="/tlab-website/public/images/donna-con-caffe.png"></img>
			</div>
		</main>
	);
}

export default Hospitality;
