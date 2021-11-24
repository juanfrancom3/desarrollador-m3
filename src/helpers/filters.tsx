import { priceRange, Product } from "../types";

export const filterByColor = (array: Array<Product>, categoryFilter: Array<string>) => {
    return array.filter((item: Product) => categoryFilter.includes(item.color) ? item : null)
}
export const filterBySize = (array: Array<Product>, sizeFilter: Array<string>) => {
    return array.filter((item: Product) => sizeFilter.includes(item.size) ? item : null)
}

export const filterByPriceRange = (array: Array<Product>, priceRange: Array<priceRange>) => {
    let newArray: Array<Product> = [];
    for (const range of priceRange) {
        switch (range) {
            case '0-100':
                newArray.push(...array.filter((item: Product) => item.price <= 100000));
                break;
            case '100-200':
                newArray.push(...array.filter((item: Product) => item.price > 100000 && item.price <= 200000));
                break;
            case '200-300':
                newArray.push(...array.filter((item: Product) => item.price > 200000 && item.price <= 300000));
                break;
            case 'more300':
                newArray.push(...array.filter((item: Product) => item.price > 300000));
                break;
        }
    }
    return newArray;
}