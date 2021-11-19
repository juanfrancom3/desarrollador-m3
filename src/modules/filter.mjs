import { getData } from "./getData.mjs";

export async function getFilterValues(
  selectedColors,
  selectedSizes,
  selectedPrices
) {
  const allProducts = await getData();
  let colors = [];
  let sizes = [];
  let prices = [];
  let filteredProducts = [];

  //Recorrer input seleccionados correspondientes al color para capturar values
  selectedColors.forEach((color) => {
    colors.push(color.value); //LLenar arreglo con todos los valores de los checkbox

    color.checked = false; //Limpiar los checkbox
  });

  //Recorrer input seleccionados correspondientes a la talla para capturar values
  selectedSizes.forEach((size) => {
    sizes.push(size.value); //LLenar arreglo con todos los valores de los checkbox

    size.checked = false; //Limpiar los checkbox
  });

  //Recorrer input seleccionados correspondientes a los precios para capturar values
  selectedPrices.forEach((price) => {
    prices.push(price.value); //LLenar arreglo con todos los valores de los checkbox

    price.checked = false; //Limpiar los checkbox
  });

  console.log(colors.length);
  console.log(sizes.length);
  console.log(prices.length);

  ///////////////////////////////////////
  //   RECORRER ARREGLO DE PRODUCTOS   //
  ///////////////////////////////////////
  allProducts.forEach((product) => {
    // ===== CONDICIONAL PARA FILTRAR BAJO LOS 3 PARAMETROS ======
    if (colors.length !== 0 && sizes.length !== 0 && prices.length !== 0) {
      if (
        filterByColor(product) &&
        filterByPrice(product) &&
        filterBySize(product)
      ) {
        filteredProducts.push(product);
      }
    } else if (colors.length == 0 || sizes.length == 0 || prices.length == 0) {
      if (colors.length !== 0) {
        if (filterByColor(product)) {
          filteredProducts.push(product);
        }
      } else if (prices.length !== 0) {
        if (filterByPrice(product)) {
          filteredProducts.push(product);
        }
      } else if (sizes.length !== 0) {
        if (filterBySize(product)) {
          filteredProducts.push(product);
        }
      }
    }
    filteredProducts = [...new Set(filteredProducts)]; // eliminar elementos repetidos  del array
  });

  console.log("ELEMENTOS FILTRADOS: ", filteredProducts);
  return filteredProducts;

  function filterByColor(product) {
    if (colors.includes(product.color)) {
      return true;
    } else {
      return false;
    }
  }

  function filterBySize(product) {
    if (product.sizes.filter((size) => sizes.includes(size))) {
      return true;
    } else {
      return false;
    }
  }

  function filterByPrice(product) {
    if (
      prices.some(
        (price) =>
          parseInt(product.price) >= parseInt(price) &&
          parseInt(product.price) <= parseInt(price) + 50
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
