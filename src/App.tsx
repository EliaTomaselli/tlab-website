import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Events from "./pages/Events/Events";
import Paths from "./pages/Paths/Paths";
import Contacts from "./pages/Contacts/Contacts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/tlab-website">
					<Route
						index
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route
						path="paths"
						element={
							<Layout>
								<Paths />
							</Layout>
						}
					/>
					<Route
						path="events"
						element={
							<Layout>
								<Events />
							</Layout>
						}
					/>
					<Route
						path="contacts"
						element={
							<Layout>
								<Contacts />
							</Layout>
						}
					/>
					<Route
						path="*"
						element={
							<Layout>
								<Error404 />
							</Layout>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
