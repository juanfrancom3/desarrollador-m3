import { CartState } from "../../context/Context";

const ColorInputs = () => {
	const {  filterDispatch } = CartState();


	return (
		<>
			<div>
				<input
					type="checkbox"
					value="amarelo"
					onChange={(e) =>
						filterDispatch({ type: "FILTER_BY_COLOR", payload: e.target })
					}
				/>
				<label>Amarelo</label>
			</div>
			<div>
				<input
					type="checkbox"
					value="azul"
					onChange={(e) =>
						filterDispatch({ type: "FILTER_BY_COLOR", payload: e.target })
					}
				/>
				<label>Azul</label>
			</div>
			<div>
				<input
					type="checkbox"
					value="branco"
					onChange={(e) =>
						filterDispatch({ type: "FILTER_BY_COLOR", payload: e.target })
					}
				/>
				<label>Branco</label>
			</div>
			<div>
				<input
					type="checkbox"
					value="cinza"
					onChange={(e) =>
						filterDispatch({ type: "FILTER_BY_COLOR", payload: e.target })
					}
				/>
				<label>Cinza</label>
			</div>
			<div>
				<input
					type="checkbox"
					value="laranja"
					onChange={(e) =>
						filterDispatch({ type: "FILTER_BY_COLOR", payload: e.target })
					}
				/>
				<label>Laranja</label>
			</div>

			<div className="more-link">
				<a href="/">Ver todos los colore</a>
			</div>
		</>
	);
};

export default ColorInputs;
