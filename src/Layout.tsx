import TopBar from "./components/TopBar/TopBar";

import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<TopBar />
			<Outlet />
		</>
	);
}

export default Layout;
