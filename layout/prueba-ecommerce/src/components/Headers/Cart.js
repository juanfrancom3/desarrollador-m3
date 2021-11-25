import { useState, useEffect } from "react";
import { CartState } from "../../context/Context";
import { BsFillTrash2Fill } from "react-icons/bs";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";

const Cart = () => {
	const [total, setTotal] = useState(0);

	const {
		state: { cart },
		dispatch,
	} = CartState();

	const [quantity, setQuantity] = useState([]);

	const sum = (idProduct) => {
		cart.map((item) => {
			if (item.id === idProduct) {
				item.qty += 1;
			}
			setQuantity([...cart]);
		});
	};

	useEffect(() => {
		setTotal(
			quantity.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [quantity]);

	const res = (idProduct) => {
		cart.map((item) => {
			if (item.id === idProduct) {
				item.qty === 1 ? (item.qty = 1) : (item.qty -= 1);
			}
			setQuantity([...cart]);
		});
	};

	return (
		<div>
			<div className="cart-item">
				<table>
					<thead>
						<tr>
							<th>Producto</th>
							<th>Cantidad</th>
						</tr>
					</thead>
					{cart.map((cartItem) => {
						return (
							<tbody key={cartItem.id}>
								<tr>
									<td>
										<div className="cartInfo">
											<img
												src={cartItem.img}
												alt={cartItem.title}
												className="cartItemImg"
											/>
											<div>
												<p className="cartItemTitle">{cartItem.title}</p>
												<small>{`R$ ${cartItem.price},00`}</small>
												<BsFillTrash2Fill
													onClick={(e) => {
														e.preventDefault();
														dispatch({
															type: "REMOVE_FROM_CART",
															payload: cartItem,
														});
													}}
													className="remove-item"
												/>
											</div>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div className="addMMore">
											<div>
												<IoMdArrowDropupCircle
													onClick={() => sum(cartItem.id)}
												/>
											</div>
											<div>
												<span>{cartItem.qty}</span>
											</div>
											<div>
												<IoMdArrowDropdownCircle
													onClick={() => res(cartItem.id)}
												/>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						);
					})}
					{cart.length > 0 ? (
						<tfoot>
							<tr>
								<th>TOTAL: $R {total}.00</th>
								<th className="c">
									<button>PAGAR</button>
								</th>
							</tr>
						</tfoot>
					) : (
						""
					)}
				</table>
			</div>
		</div>
	);
};

export default Cart;
