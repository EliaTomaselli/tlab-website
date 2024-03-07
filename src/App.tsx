import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={null}>
					<Route index element={<Home />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
