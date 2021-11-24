import { Product, sortOrder, sortType } from "../types";

export const sortItems = (array: Array<Product>, sortBy: [sortOrder, sortType]) => {
    return array.sort((a, b) => {
        const order = (sortBy[0] === 'asc') ? 1 : -1;
        const sortType = sortBy[1];
        switch (sortType) {
            case 'name':
                return ( a.name.toLowerCase() < b.name.toLowerCase() ? -1 * order : 1 * order )
            case 'price':
                return (a.price < b.price ? -1 * order : 1 * order )
            case 'createdAt':
                return (new Date(a.createdAt) < new Date(b.createdAt) ? -1 * order : 1 * order )
            default:
                return 0;
        }
    });
}