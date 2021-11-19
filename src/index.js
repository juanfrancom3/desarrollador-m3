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

//   =========================================   //
//     Programacion del formulario de filtro     //
//   =========================================
//
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
    console.log(
      "ARREGLO DE inputs sizes ",
      selectedSizes,
      selectedSizes.length
    );
    console.log(
      "ARREGLO DE inputs prices ",
      selectedPrices,
      selectedPrices.length
    );
    console.log(
      "ARREGLO DE inputs colors ",
      selectedColors,
      selectedColors.length
    );

    const filtered = await getFilterValues(
      selectedColors,
      selectedSizes,
      selectedPrices
    );
    // const productSection = document.getElementById("products");
    const menu = document.getElementById("filter-menu");
    window.scrollTo(0, 0); //subir la vista de la pagina a la parte superior
    fadeOut(menu); //Cerrar menu de filtro

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

      // console.log(parallax);

      //Elimar alerta
      const alertCloser = document.getElementById("close_alert");

      alertCloser.addEventListener("click", () => {
        document.body.removeChild(parallax);
      });
    } else {
      render(createProduct(filtered));
    }
  });

function showButtons() {
  const buttonsContainer = document.getElementById("filter-buttons");
  const detailsList = document.querySelectorAll("details");

  detailsList.forEach((details) => {
    details.addEventListener("click", () => {
      buttonsContainer.style.display = "grid";
    });
  });
}
showButtons();

render(getInfo());
