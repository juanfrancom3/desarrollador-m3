export const CartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((c) => c.id !== action.payload.id),
			};
		default:
			return state;
	}
};

export const ProductReducer = (state, action, tarea) => {
	switch (action.type) {
		case "SORT_BY_PRICE":
			return { ...state, sort: action.payload };
		case "FILTER_BY_COLOR":
			return { state, event: action.payload };
		default:
			return state;
	}
};

export const filterPriceReducer = (state, action) => {
	switch (action.type) {
		case "FILTER_OF_50":
			return { ...state, by50: !state.by50 };
		case "FILTER_OF_150":
			return { ...state, by150: !state.by150 };
		case "FILTER_OF_300":
			return { ...state, by300: !state.by300 };
		case "FILTER_OF_500":
			return { ...state, by500: !state.by500 };
		case "FILTER_OF_0":
			return { ...state, by0: !state.by0 };
		default:
			return state;
	}
};

export const sizesReducer = (state, action) => {
	switch (action.type) {
		case "FILTER_BY_SIZES":
			return {
				...state,
				filterSizes: !state.filterSizes,
				eventSizes: action.payload,
			};
		default:
			break;
	}
};
