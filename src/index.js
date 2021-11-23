import "./styles/style.scss";
import { getData } from "./modules/getData.mjs";
import { Template } from "./modules/Template.mjs";
import { fadeIn } from "./modules/move_menu";
import { fadeOut } from "./modules/move_menu.mjs";
import { getValues } from "./modules/filter.mjs";
import { getFilterValues } from "./modules/filter.mjs";

//====================================//
//  Funcion para pintar los productos //
//====================================//
async function render(templates) {
  const productsSection = document.getElementById("products");
  productsSection.innerHTML = "";
  const products = await templates;

  products.forEach((product) => {
    const myProduct = product.createTemplate();
    product.renderTemplate(productsSection, myProduct);
  });
}

//CREAR LOS OBJETOS BASADO EN EL PROTOTYPE TEMPLATE
function createProduct(allProducts) {
  let allTemplates = [];

  allProducts.forEach((product) => {
    //Crear el objeto
    const template = new Template(
      product.image.source,
      product.name,
      product.price,
      product.toFinance,
      product.publication.date,
      product.sizes
    );
    allTemplates.push(template); //enviar cada producto o template al arreglo que contiene todos los templates
  });
  return allTemplates;
}

//OBTENER INFORMACION DEL JSON
async function getInfo() {
  const allProducts = await getData();
  const allTemplates = createProduct(allProducts);
  // console.log(products);
  return allTemplates;
}

//Funcion para realizar la animacion de ingreso y salida de pantalla.
function sendMenu(id, state) {
  const menu = document.getElementById(`${id}`);
  if (state) {
    fadeIn(menu);
    window.scrollTo(0, 0);
  } else {
    fadeOut(menu);
    window.scrollTo(0, 0);
  }
}

// ================================================== //
// =                    BOTONES                     = //
// ================================================== //
//BTN_Cargar mas productos
document.getElementById("btn_more").addEventListener("click", () => {
  productsSection.innerHTML = "";
  getInfo();
});

//btn filtrar
document.getElementById("btn_filter-menu").addEventListener("click", () => {
  const id = "filter-menu";
  sendMenu(id, true);
});

//btn_Ordenar
document.getElementById("btn_sort-menu").addEventListener("click", () => {
  const id = "sort-menu";
  sendMenu(id, true);
});

//Close filter Menu
document.getElementById("close_filter-menu").addEventListener("click", () => {
  const id = "filter-menu";
  sendMenu(id, false);
});

//Close sort Menu
document.getElementById("close_sort-menu").addEventListener("click", () => {
  const id = "sort-menu";
  sendMenu(id, false);
});

//BTN Mas reciente
document
  .getElementById("btn_most-recent")
  .addEventListener("click", async () => {});

//BTN lower-price
document
  .getElementById("btn_lower-price")
  .addEventListener("click", async () => {
    // render();
  });

//BTN higher price
document
  .getElementById("btn_higher-price")
  .addEventListener("click", async () => {
    // render();
  });

//BTN para icono de la bolsa de compra
const shopping_bag_icon = document.getElementById("shopping-bag-icon");

shopping_bag_icon.addEventListener("click", () => {
  const bag = document.getElementById("shopping-bag--container");
  // console.log(bag);
  if (bag.classList.contains("hidde")) {
    bag.style.visibility = "visible";
    bag.classList.remove("hidde");
  } else {
    bag.style.visibility = "hidden";
    bag.classList.add("hidde");
  }
});

// BTN Ver mas colores ------ DESKTOP
document.getElementById("moreColors").addEventListener("click", function () {
  const colorsBox = document.getElementById("colors-section--filter-desktop");

  const btn = document.querySelector("#moreColors p");
  const btnImage = document.querySelector("#moreColors img");

  console.log(btnImage);

  if (colorsBox.classList.contains("big")) {
    colorsBox.style.transition = "all .5s ease-in-out";
    colorsBox.style.height = "160px";
    colorsBox.classList.remove("big");
  } else {
    colorsBox.style.height = "auto";
    colorsBox.classList.add("big");
    btn.textContent = "Menos Cores";
    btnImage.style.transform = "rotate(180deg)";
  }
});

//   ===============================================   //
//     Programacion del formulario de filtro MOBILE    //
//   ===============================================   //
document
  .getElementById("btn_apply-filter")
  .addEventListener("click", async () => {
    const selectedColors = document.querySelectorAll(
      "#filter_colors input[type='checkbox']:checked"
    );
    const selectedPrices = document.querySelectorAll(
      "#filter_price input[type='checkbox']:checked"
    );
    const selectedSizes = document.querySelectorAll(
      "#filter_sizes input[type='checkbox']:checked"
    );

    const filtered = await getFilterValues(
      selectedColors,
      selectedSizes,
      selectedPrices
    );

    const menu = document.getElementById("filter-menu");
    window.scrollTo(0, 0); // Subir la vista de la pagina a la parte superior
    fadeOut(menu); // OCULTAR Menu de filtro

    isEmpty(filtered);

    // ================ Elimar alerta
    const alertCloser = document.getElementById("close_alert");
    alertCloser.addEventListener("click", () => {
      document.body.removeChild(parallax);
    });
  });
//   =====================================================   //
//     FIN DE Programacion del formulario de filtro MOBILE   //
//   =====================================================   //

//   ===============================================   //
//    Programacion del formulario de filtro Desktop    //
//   ===============================================   //

//Funcion para capturar los checkbox y separarlos de acuerdo la tipo de dato (color, size, price)
function filterInDesktop() {
  const checkboxCollection = document.querySelectorAll(
    ".filter-menu_desktop .filter-menu_desktop--section input[type='checkbox']"
  );
  // console.log("Coleccion de checkbox: ", checkboxCollection);

  let selectedColors_desktop = [];
  let selectedPrices_desktop = [];
  let selectedSizes_desktop = [];

  checkboxCollection.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.classList.contains("hidde")) {
        checkbox.classList.remove("hidde");
        checkbox.classList.add("visible");
        // console.log("Checkbox: ", checkbox);

        if (checkbox.classList.contains("color")) {
          selectedColors_desktop.push(checkbox);
        } else if (checkbox.classList.contains("size")) {
          selectedSizes_desktop.push(checkbox);
        } else if (checkbox.classList.contains("price")) {
          selectedPrices_desktop.push(checkbox);
        }

        getMyProducts(
          selectedColors_desktop,
          selectedPrices_desktop,
          selectedSizes_desktop
        );
      } else {
        checkbox.classList.add("hidde");
        checkbox.classList.remove("visible");

        if (checkbox.classList.contains("color")) {
          selectedColors_desktop = eliminar(selectedColors_desktop, checkbox);
        } else if (checkbox.classList.contains("price")) {
          selectedPrices_desktop = eliminar(selectedPrices_desktop, checkbox);
        } else if (checkbox.classList.contains("size")) {
          selectedSizes_desktop = eliminar(selectedSizes_desktop, checkbox);
        }

        getMyProducts(
          selectedColors_desktop,
          selectedPrices_desktop,
          selectedSizes_desktop
        );
      }
    });
  });
}

//Funcion para eliminar un elemento especifico  dentro de un array
function eliminar(arreglo, elemento) {
  let nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    const element = arreglo[i];
    if (element !== elemento) {
      nuevoArreglo.push(element);
    }
  }
  return nuevoArreglo;
}

async function getMyProducts(colors, prices, sizes) {
  let allProducts = await getData();
  let filtered = [];
  //Condicionales para conocer el tipo de busqueda que se debe realizar de acuerdo a las opciones
  //posibles de seleccion del menu
  if (colors.length == 0 && prices.length == 0 && sizes.length == 0) {
    filtered = allProducts;
  } else if (colors.length != 0 && prices.length == 0 && sizes.length == 0) {
    allProducts.forEach((product) => {
      filtered = filterByColor(product, colors, filtered);
    });
  } else if (colors.length == 0 && prices.length != 0 && sizes.length == 0) {
    allProducts.forEach((product) => {
      filtered = filterByPrice(product, prices, filtered);
    });
  } else if (colors.length == 0 && prices.length == 0 && sizes.length != 0) {
    allProducts.forEach((product) => {
      filtered = filterBySize(product, sizes, filtered);
    });
  } else if (colors.length != 0 && prices.length == 0 && sizes.length != 0) {
    let f_color = [];
    let f_size = [];
    allProducts.forEach((product) => {
      f_color = filterByColor(product, colors, f_color);
      f_size = filterBySize(product, sizes, f_size);
    });
    filtered = findAmatch(f_color, f_size);
  } else if (colors.length != 0 && prices.length != 0 && sizes.length == 0) {
    let f_color = [];
    let f_price = [];
    allProducts.forEach((product) => {
      f_color = filterByColor(product, colors, f_color);
      f_price = filterByPrice(product, prices, f_price);
    });
    filtered = findAmatch(f_color, f_price);
  } else if (colors.length == 0 && prices.length != 0 && sizes.length != 0) {
    let f_prices = [];
    let f_sizes = [];
    allProducts.forEach((product) => {
      f_prices = filterByPrice(product, prices, f_prices);
      f_sizes = filterBySize(product, sizes, f_sizes);
    });
    filtered = findAmatch(f_prices, f_sizes);
  } else if (colors.length != 0 && prices.length != 0 && sizes.length != 0) {
    let f_colors = [];
    let f_prices = [];
    let f_sizes = [];
    allProducts.forEach((product) => {
      f_colors = filterByColor(product, colors, f_colors);
      f_prices = filterByPrice(product, prices, f_prices);
      f_sizes = filterBySize(product, sizes, f_sizes);
    });

    filtered = findAmatch2(f_colors, f_prices, f_sizes);
  }

  filtered = [...new Set(filtered)];

  isEmpty(filtered);

  //Cerrar alerta en escritorio
  if (document.getElementById("close_alert")) {
    const alertCloser = document.getElementById("close_alert");
    const parallax = document.querySelector(".parallax");
    alertCloser.addEventListener("click", () => {
      document.body.removeChild(parallax);
    });
  }
}

function findAmatch(array1, array2) {
  let results = [];
  for (let i = 0; i < array1.length; i++) {
    let elemento1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      let elemento2 = array2[j];
      if (elemento2 == elemento1) {
        results.push(elemento2);
      }
    }
  }
  return results;
}

function findAmatch2(array1, array2, array3) {
  let results = [];
  for (let i = 0; i < array1.length; i++) {
    let elemento1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      let elemento2 = array2[j];
      for (let l = 0; l < array3.length; l++) {
        const elemento3 = array3[l];
        if (elemento1 == elemento2 && elemento2 == elemento3) {
          results.push(elemento3);
        }
      }
    }
  }
  return results;
}

function filterByColor(product, selectedColors, filtered) {
  selectedColors.forEach((color) => {
    if (color.value == product.color) {
      filtered.push(product);
    }
  });
  return filtered;
}

function filterByPrice(product, selectedPrices, filtered) {
  selectedPrices.forEach((price) => {
    price = parseInt(price.value);
    if (price == 50) {
      if (parseInt(product.price) > 0 && parseInt(product.price) <= price) {
        filtered.push(product);
      }
    } else if (price == 150) {
      if (parseInt(product.price) > 50 && parseInt(product.price) <= price) {
        filtered.push(product);
      }
    } else if (price == 300) {
      if (parseInt(product.price) > 150 && parseInt(product.price) <= price) {
        filtered.push(product);
      }
    } else if (price == 500) {
      if (parseInt(product.price) > 300 && parseInt(product.price) <= price) {
        filtered.push(product);
      }
    } else {
      if (parseInt(product.price) >= price) {
        filtered.push(product);
      }
    }
  });
  return filtered;
}

function filterBySize(product, selectedSizes, filtered) {
  selectedSizes.forEach((size) => {
    if (product.sizes.includes(size.value)) {
      filtered.push(product);
    }
  });
  return filtered;
}
//   ======================================================   //
//    FIM DE Programacion del formulario de filtro Desktop    //
//   ======================================================   //

// ==========  Funcion para mostrar los botones del menu de filtro em Mobile al momento de que se haga click en
// algun elemento details.
function showButtons() {
  const buttonsContainer = document.getElementById("filter-buttons");
  const detailsList = document.querySelectorAll("details");

  detailsList.forEach((details) => {
    details.addEventListener("click", () => {
      buttonsContainer.style.display = "grid";
    });
  });
}

// ============= Funcion para imprimir en pantalla la alerta de que no existen productos disponibles bajo
// low parametros indicados en el menu de filtro.
function isEmpty(filtered) {
  if (filtered.length == 0) {
    //CREAR ELEMENTO HTML DE LA ALERTA
    const alertContainer = document.createElement("div"); //CONTENEDOR
    alertContainer.classList.add("alert_container"); //AGREGAR CLASE AL ELEMENTO HTML

    const parallax = document.createElement("div");
    parallax.classList.add("parallax"); //AGREGAR CLASE AL ELEMENTO HTML

    alertContainer.innerHTML += `
      <div class="alert">
        <img src="./assets/icons/close.png" id="close_alert" class="alert-closer"/>
        <img src="./assets/images/signo-de-exclamacion.png" class="alert-image"/>
        <div class="alert_text">
          <p>Não há produtos que correspondam à pesquisa</p>
        </div>
      </div>
    `;
    parallax.appendChild(alertContainer);
    document.body.appendChild(parallax);
  } else {
    render(createProduct(filtered));
  }
}

showButtons();
render(getInfo());
filterInDesktop();
