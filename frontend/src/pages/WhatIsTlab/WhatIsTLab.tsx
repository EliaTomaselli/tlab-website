import styles from "./WhatIsTLab.module.css";

import StuddedBar from "../../components/StuddedBar/StuddedBar";

function WhatIsTLab() {
	return (
		<main className={styles.WhatIsTLab}>
			<div className={styles.background}></div>
			<div className={styles.barContainer}>
				<StuddedBar className={styles.StuddedBar} direction="v" />
				<img
					className={styles.maestraConBambino}
					src="/tlab-website/images/maestra-con-bambino.png"
					alt="Maestra con bambino"
				/>
			</div>
			<div className={styles.content}>
				{/* <img className={styles.logo} alt="Logo del T-LAB" /> */}
				<img className={styles.logo} src="/tlab-website/images/tlab-logo.png" alt="Logo del T-LAB" />
				<p className={styles.description}>
					Aute cillum veniam ut qui officia voluptate in id tempor nulla velit laboris. Aliquip minim excepteur sint
					tempor enim sit culpa ad quis id. Aute anim ad nisi mollit est do culpa laboris laborum elit reprehenderit
					elit velit. Eiusmod cillum aliqua ipsum mollit pariatur eu laboris velit. Excepteur consequat mollit amet
					ullamco veniam ex aliquip magna culpa dolore elit ut proident. Ullamco ullamco deserunt nisi ipsum. Eiusmod ut
					ut qui ea sint sint.Aute cillum veniam ut qui officia voluptate in id tempor nulla velit laboris. Aliquip
					minim excepteur sint tempor enim sit culpa ad quis id. Aute anim ad nisi mollit est do culpa laboris laborum
					elit reprehenderit elit velit. Eiusmod cillum aliqua ipsum mollit pariatur eu laboris velit. Excepteur
					consequat mollit amet ullamco veniam ex aliquip magna culpa dolore elit ut proident. Ullamco ullamco deserunt
					nisi ipsum. Eiusmod ut ut qui ea sint sint.Aute cillum veniam ut qui officia voluptate in id
				</p>
			</div>
		</main>
	);
}

export default WhatIsTLab;
