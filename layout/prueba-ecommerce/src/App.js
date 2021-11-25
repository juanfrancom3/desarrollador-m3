import "./App.css";
import Headers from "./components/Headers/Headers";
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import Cart from "./components/Headers/Cart";
function App() {
	return (
		<Router>
			<div className="App">
				<Headers />
				<div className="container">
					<Routes>
						<Route exact path="/" element={<SideBar />} />
					</Routes>
					<Routes>
						<Route path="/" element={<MainContent />} />
					</Routes>
				</div>
				<Routes>
					<Route exact path="/details/:id" element={<DetailsProduct />} />
					<Route exact path="/cart" element={<Cart />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
