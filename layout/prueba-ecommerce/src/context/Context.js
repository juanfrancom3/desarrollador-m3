import { createContext, useContext, useReducer } from "react";
import { Products } from "../db/products";
import {
	CartReducer,
	filterPriceReducer,
	ProductReducer,
	sizesReducer,
} from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, {
		products: Products,
		cart: [],
	});

	const [filterState, filterDispatch] = useReducer(ProductReducer, {
		event: "",
	});

	const [filterPriceState, filterPriceDispatch] = useReducer(
		filterPriceReducer,
		{
			by50: false,
			by150: false,
			by300: false,
			by500: false,
			by0: false,
		}
	);

	const [filterBySizes, sizesDispatch] = useReducer(sizesReducer, {
		eventSizes: "",
		filterSizes: false,
	});

	return (
		<Cart.Provider
			value={{
				state,
				dispatch,
				filterState,
				filterDispatch,
				filterPriceState,
				filterPriceDispatch,
				filterBySizes,
				sizesDispatch,
			}}
		>
			{children}
		</Cart.Provider>
	);
};

export default Context;

export const CartState = () => {
	return useContext(Cart);
};
