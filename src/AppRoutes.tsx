import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Events from "./pages/Events/Events";
import Paths from "./pages/Paths/Paths";
import Contacts from "./pages/Contacts/Contacts";
import WhatIsTLab from "./pages/WhatIsTlab/WhatIsTLab";
import Editor from "./pages/Editor/Editor";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/tlab-website"
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route index element={<Home />} />
					<Route path="paths" element={<Paths />} />
					<Route path="events" element={<Events />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="what-is-tlab" element={<WhatIsTLab />} />
					<Route path="editor" element={<Editor />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
