import styles from "./Layout.module.css";

import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.Layout}>
			<TopBar />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
