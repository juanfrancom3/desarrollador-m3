export const filtersByCategory = [
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b81', name: 'Amarillo', value: 'yellow' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b82', name: 'Azul', value: 'blue' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b83', name: 'Gris', value: 'grey' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b84', name: 'Blanco', value: 'white' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b86', name: 'Rosado', value: 'pink' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b87', name: 'Morado', value: 'purple' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b88', name: 'Negro', value: 'black' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b89', name: 'Rojo', value: 'red' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b90', name: 'Verde', value: 'green' },
];
export const filtersByPrice = [
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b91', name: '$0 - $100.000', value: '0-100' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b92', name: '$100.000 - $200.000', value: '100-200' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b93', name: '$200.000 - $300.000', value: '200-300' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b94', name: 'Más de $300.000', value: 'more300' },
];
export const filtersBySize = [
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b95', name: 'XS', value: 'XS' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b96', name: 'S', value: 'S' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b97', name: 'M', value: 'M' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b98', name: 'L', value: 'L' },
    { id: 'e211c7d3-eb62-4f55-a31b-3a00ec5d3b99', name: 'XL', value: 'XL' },
];

export interface ThemeTypes {
    isLightMode: boolean,
    isFadeIn?: boolean
}

export const PRIMARY_COLOR = '#292929';
export const SECONDARY_COLOR = '#f6f6f6';
export const TERTIARY_COLOR = '#00C9FF';
export const GREY_COLOR = '#b3b3b3';

export const DEFAULT_TEXT = `So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter 
likely scrambled part of Cicero's De Finibus in order to provide placeholder
text to mockup various fonts for a type specimen book.So how did the classical 
Latin become so incoherent? According to McClintock.`

export const data = [
    {
        "id": 1,
        "name": "Camiseta blanca",
        "color": "white",
        "size": "L",
        "price": 86000,
        "createdAt": "22/01/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0JTIwd2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Camiseta blanca"
        },
        "isOffer": false
    },
    {
        "id": 2,
        "name": "Camiseta negra",
        "color": "black",
        "size": "M",
        "price": 75000,
        "createdAt": "05/05/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1606115757624-6b9bfe9fa5e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0JTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Camiseta negra"
        },
        "isOffer": true
    },
    {
        "id": 3,
        "name": "Camiseta roja",
        "color": "red",
        "size": "XL",
        "price": 45000,
        "createdAt": "15/02/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Camiseta roja"
        },
        "isOffer": true
    },
    {
        "id": 4,
        "name": "Camiseta verde",
        "color": "green",
        "size": "M",
        "price": 26000,
        "createdAt": "15/06/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Camiseta verde"
        },
        "isOffer": false
    },
    {
        "id": 5,
        "name": "Camiseta morada",
        "color": "purple",
        "size": "M",
        "price": 55000,
        "createdAt": "15/09/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1629483371146-63aa7e437b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Camiseta morada"
        },
        "isOffer": false
    },
    {
        "id": 6,
        "name": "Suéter amarillo",
        "color": "yellow",
        "size": "XS",
        "price": 76000,
        "createdAt": "20/07/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1589728125279-527c67c9e829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Suéter amarillo"
        },
        "isOffer": true
    },
    {
        "id": 7,
        "name": "Suéter rojo",
        "color": "red",
        "size": "L",
        "price": 80000,
        "createdAt": "23/07/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1608355023471-c13d29ac8fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Suéter rojo"
        },
        "isOffer": false
    },
    {
        "id": 8,
        "name": "Suéter negro",
        "color": "black",
        "size": "S",
        "price": 85000,
        "createdAt": "20/05/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1516114679580-9b087a6012df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Suéter negro"
        },
        "isOffer": false
    },
    {
        "id": 9,
        "name": "Suéter verde",
        "color": "green",
        "size": "S",
        "price": 65000,
        "createdAt": "02/02/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Suéter verde"
        },
        "isOffer": true
    },
    {
        "id": 10,
        "name": "Suéter azul",
        "color": "blue",
        "size": "L",
        "price": 70000,
        "createdAt": "03/10/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Suéter azul"
        },
        "isOffer": true
    },
    {
        "id": 11,
        "name": "Sudadera blanca",
        "color": "white",
        "size": "S",
        "price": 55000,
        "createdAt": "10/10/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1525818918160-9ceba31508da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Sudadera blanca"
        },
        "isOffer": false
    },
    {
        "id": 12,
        "name": "Sudadera negra",
        "color": "black",
        "size": "M",
        "price": 155000,
        "createdAt": "17/10/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1594587002961-1a75dfaf34b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Sudadera negra"
        },
        "isOffer": true
    },
    {
        "id": 13,
        "name": "Sudadera rosada",
        "color": "pink",
        "size": "M",
        "price": 259000,
        "createdAt": "07/11/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Sudadera rosada"
        },
        "isOffer": true
    },
    {
        "id": 14,
        "name": "Sudadera gris",
        "color": "grey",
        "size": "S",
        "price": 69000,
        "createdAt": "27/10/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1594656375376-64d56e2f3ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Sudadera gris"
        },
        "isOffer": false
    },
    {
        "id": 15,
        "name": "Sudadera roja",
        "color": "red",
        "size": "L",
        "price": 361000,
        "createdAt": "25/02/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1625024573124-57a3efa69d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Sudadera roja"
        },
        "isOffer": true
    },
    {
        "id": 16,
        "name": "Jean azul",
        "color": "blue",
        "size": "M",
        "price": 100000,
        "createdAt": "30/08/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Jean azul"
        },
        "isOffer": false
    },
    {
        "id": 17,
        "name": "Jean negro",
        "color": "black",
        "size": "L",
        "price": 99000,
        "createdAt": "30/05/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1517553844237-d51624c8dca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Jean negro"
        },
        "isOffer": true
    },
    {
        "id": 18,
        "name": "Chaqueta de jean",
        "color": "blue",
        "size": "S",
        "price": 85000,
        "createdAt": "13/09/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Chaqueta de jean"
        },
        "isOffer": false
    },
    {
        "id": 19,
        "name": "Chaqueta verde",
        "color": "green",
        "size": "L",
        "price": 85000,
        "createdAt": "19/11/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Chaqueta verde"
        },
        "isOffer": false
    },
    {
        "id": 20,
        "name": "Chaqueta negra",
        "color": "black",
        "size": "L",
        "price": 150000,
        "createdAt": "03/04/2021",
        "image": {
            "src": "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=100",
            "alt": "Chaqueta negra"
        },
        "isOffer": true
    }
];