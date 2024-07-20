import styles from "./WhatIsTLab.module.css";

import StuddedBar from "../../components/StuddedBar/StuddedBar";

function WhatIsTLab() {
	return (
		<main className={styles.WhatIsTLab}>
			<img src="/tlab-website/images/maestra-con-bambino.png" alt="Maestra con bambino" />
			<StuddedBar direction="v" />
			<div className={styles.content}>
				{/* <img className={styles.logo} alt="Logo del T-LAB" /> */}
				<div className={styles.logoPlaceholder}></div>
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
