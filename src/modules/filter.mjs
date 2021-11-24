import { getMyProducts } from "../index.js";

export function getFilterValues(selectedColors, selectedSizes, selectedPrices) {
  let colors = [];
  let sizes = [];
  let prices = [];

  //Recorrer input seleccionados correspondientes al color para capturar values
  selectedColors.forEach((color) => {
    colors.push(color); //LLenar arreglo con todos los valores de los checkbox
    color.checked = false; //Limpiar los checkbox
  });

  //Recorrer input seleccionados correspondientes a la talla para capturar values
  selectedSizes.forEach((size) => {
    sizes.push(size); //LLenar arreglo con todos los valores de los checkbox
    size.checked = false; //Limpiar los checkbox
  });

  //Recorrer input seleccionados correspondientes a los precios para capturar values
  selectedPrices.forEach((price) => {
    console.log(price);
    prices.push(price); //LLenar arreglo con todos los valores de los checkbox
    price.checked = false; //Limpiar los checkbox
  });

  console.log(colors.length);
  console.log(sizes.length);
  console.log(prices.length);

  getMyProducts(colors, prices, sizes);
}
