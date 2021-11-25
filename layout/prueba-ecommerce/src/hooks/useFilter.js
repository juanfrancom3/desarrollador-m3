import { CartState } from "../context/Context";
import { Products } from "../db/products";

const useFilter = () => {
	const {
		state: { products },
		filterState: { sort, event },
		filterPriceState: { by50, by150, by300, by500, by0 },
		filterBySizes: { eventSizes, filterSizes },
	} = CartState();

	const trasnformProducts = () => {
		// variables
		let sortProducts = Products;
		let Products2 = Products;
		let template = [];
		let newArray = [];

		// sort products
		if (sort) {
			sortProducts = sortProducts.sort((a, b) =>
				sort === "menor"
					? a.price - b.price
					: sort === "mayor"
					? b.price - a.price
					: ""
			);
		}
		if (sort === "recientes") {
			sortProducts = sortProducts.filter(
				(product) => product.filterP !== products.filterP
			);
		}

		// filter color

		if (event.checked) {
			template = Products2.filter((product) => product.color === event.value);
			sortProducts = [];
			newArray.push(...template);
			sortProducts = newArray;
		}

		/// filter by price

		if (by50) {
			sortProducts = sortProducts.filter((product) => product.price <= 50);
		}

		if (by150) {
			sortProducts = sortProducts.filter((product) => product.price >= 51);
		}

		if (by150) {
			sortProducts = sortProducts.filter((product) => product.price <= 150);
		}

		if (by300) {
			sortProducts = sortProducts.filter((product) => product.price >= 150);
		}

		if (by500) {
			sortProducts = sortProducts.filter((product) => product.price >= 301);
		}

		if (by0) {
			sortProducts = sortProducts.filter((product) => product.price > 0);
		}

		/// filter sizes
		if (filterSizes) {
			sortProducts = sortProducts.filter(
				(product) => product.sizes === eventSizes.toLowerCase()
			);
		}

		return sortProducts;
	};

	return { trasnformProducts };
};

export default useFilter;
