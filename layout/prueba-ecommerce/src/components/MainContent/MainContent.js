import "../../styles/mainContent.css";
import { useState } from "react";
import { CartState } from "../../context/Context";
import { Link } from "react-router-dom";
import useFilter from "../../hooks/useFilter";

const MainContent = () => {
	const [loadMore, setLoadMore] = useState(9);

	const { trasnformProducts } = useFilter();

	const {
		state: { cart },
		filterDispatch,
		dispatch,
	} = CartState();

	const loaded = (e) => {
		e.preventDefault();
		setLoadMore((preventValue) => preventValue + 9);
	};

	return (
		<>
		<form className="form-main">
				<select
					name="select"
					onChange={(e) =>
						filterDispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
					}
				>
					<option defaultValue="disabled selected" className="disapear">
						Ordenar por:
					</option>
					<option value="recientes">Mas recientes</option>
					<option value="mayor">Mayor precio</option>
					<option value="menor">Menor precio</option>
				</select>
			</form>


		<div className="container2">
			{trasnformProducts().length === 0 ? (
				<div className="noShow">
					<h1>No hay nada que mostrar</h1>
				</div>
			) : (
				trasnformProducts()
					.slice(0, loadMore)
					.map((product) => {
						return (
							<div className="product" key={product.id}>
								<Link to={`/details/${product.id}`} className="linkToProduct">
									<img src={product.img} alt="product" />
								</Link>
								<p className="title">{product.title}</p>
								<span className="price">{`R$ ${product.price},00`}</span>
								<span className="promotion">ate 3x de R$30.00</span>
								{cart.some((p) => p.id === product.id) ? (
									<a
										href="/"
										onClick={(e) => {
											e.preventDefault();
											dispatch({ type: "REMOVE_FROM_CART", payload: product });
										}}
									>
										ELIMINAR DEL CARRITO
									</a>
								) : (
									<a
										href="/"
										onClick={(e) => {
											e.preventDefault();
											dispatch({ type: "ADD_TO_CART", payload: product, qty: +1 });
										}}
									>
										COMPRAR
									</a>
								)}
							</div>
						);
					})
			)}
			<div className="loadMore">
				<a href="/" onClick={loaded}>
					CARGAR MAS
				</a>
			</div>
		</div>
		</>
	);
};

export default MainContent;
