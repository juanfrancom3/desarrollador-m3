import { getData } from "./getData.mjs";

function order(products) {
  let orderedProducts = [];
  products.forEach((item) => {
    orderedProducts.push(item);
  });
  orderedProducts.sort(function (a, b) {
    if (parseInt(a.price) > parseInt(b.price)) {
      return 1;
    }
    if (parseInt(a.price) < parseInt(b.price)) {
      return -1;
    }
    return 0;
  });

  return orderedProducts;
}

//Funcion ordenar MAS RECIENTE
export async function mostRecent() {
  const products = await getData();
  let orderedProducts = [];

  products.forEach((item) => {
    orderedProducts.push(item);
  });

  orderedProducts.sort(function (a, b) {
    if (a.publication.date > b.publication.date) {
      return 1;
    }
    if (a.publication.date < b.publication.date) {
      return -1;
    }

    return 0;
  });

  orderedProducts.reverse();

  return orderedProducts;
}

//Funcion Ordenar MENOR PRECIO
export async function lowerPrice() {
  const products = await getData();

  return order(products);
}

//Funcion Ordenar MAYOR PRECIO
export async function higherPrice() {
  const products = await getData();

  return order(products).reverse();
}
