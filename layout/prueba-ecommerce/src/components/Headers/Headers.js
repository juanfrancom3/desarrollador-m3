import logo from "../../images/logo-m3.png";
import { GiShoppingBag } from "react-icons/gi";
import "../../styles/headers.css";
import { CartState } from "../../context/Context";
import { Link } from "react-router-dom";

const Headers = () => {
	const {
		state: { cart },
	} = CartState();

	return (
		<div>
			<header>
				<nav>
					<ul className="List">
						<div className="logo-container">
							<Link to="/">
								<img src={logo} alt="logo" />
							</Link>
							<li>
								<Link to="/cart" className="logolink">
									<GiShoppingBag className="cartLogo"/>
								</Link>
								<span className="counCart">{cart.length}</span>
							</li>
						</div>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Headers;
