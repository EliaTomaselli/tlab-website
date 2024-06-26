import styles from "./Layout.module.css";

import TopBar from "./components/TopBar/TopBar";
import CortenFrame from "./components/CortenFrame/CortenFrame";

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.Layout}>
			<TopBar />
			<CortenFrame className={styles.frame}>{children}</CortenFrame>
		</div>
	);
}

export default Layout;
