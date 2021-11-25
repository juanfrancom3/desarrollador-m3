import { CartState } from "../../context/Context";

const PricesInputs = () => {
	const { filterPriceDispatch } = CartState();

	return (
		<>
			<input
				type="checkbox"
				onChange={() => filterPriceDispatch({ type: "FILTER_OF_50" })}
			/>
			<label>de R$0 ate R$50</label>
			<br />
			<input
				type="checkbox"
				onChange={() => filterPriceDispatch({ type: "FILTER_OF_150" })}
			/>
			<label>de R$51 ate R$150</label>
			<br />
			<input
				type="checkbox"
				onChange={() => filterPriceDispatch({ type: "FILTER_OF_300" })}
			/>
			<label>de R$151 ate R$300</label>
			<br />
			<input
				type="checkbox"
				onChange={() => filterPriceDispatch({ type: "FILTER_OF_500" })}
			/>
			<label>de R$301 ate R$500</label>
			<br />
			<input
				type="checkbox"
				onChange={() => filterPriceDispatch({ type: "FILTER_OF_0" })}
			/>
			<label>a partir de R$ 01</label>
		</>
	);
};

export default PricesInputs;
