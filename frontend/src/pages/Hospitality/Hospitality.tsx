import FramedLink from "../../components/FramedLink/FramedLink";
import StuddedBar from "../../components/StuddedBar/StuddedBar";
import styles from "./Hospitality.module.css";

function Hospitality() {
	return (
		<main className={styles.Hospitality}>
			{/* <img src="/tlab-website/public/images/donna-tesina-che-porta-il-caffè.png"></img> */}
			<StuddedBar direction="v" />
			<div className={styles.links}>
				<FramedLink to="where-to-eat" text={"Ristoranti\ne Pizzerie"} />
				<FramedLink to="where-to-eat" text={"Bar\ne Caffetterie"} />
				<FramedLink to="where-to-eat" text={"Alberghi\ne Alloggi"} />
			</div>
		</main>
	);
}

export default Hospitality;
