import styles from "./Layout.module.css";

import TopBar from "./components/TopBar/TopBar";

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.Layout}>
			<TopBar />
			{children}
		</div>
	);
}

export default Layout;
