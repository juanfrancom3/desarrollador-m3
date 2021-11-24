export interface Product {
    name: string,
    color: string,
    price: number,
    size: string,
    image: {
        src: string,
        alt: string
    },
    isOffer: boolean,
    createdAt: string,
    id?: number,
}

export interface ProductsState {
    products: Array<Product>,
    paginatedItems: Array<Product>,
    totalProducts: number
}

export interface CartItems {
    quantity: number,
    product: Product
}

export interface CartState {
    products: Array<any>
}

export interface Ui {
    isModalOpen: boolean,
    isCartOpen: boolean,
    sortBy:[sortOrder, sortType],
    colorFilter: string[],
    sizeFilter: string[],
    priceRange: Array<priceRange>,
    theme: themeType,
    isLightMode: boolean
}

export type sortOrder = 'asc' | 'desc';
export type sortType = 'name' | 'price' | 'createdAt';
export type priceRange = '0-100' | '100-200' | '200-300' | 'more300';
export type themeType = 'light' | 'dark';

