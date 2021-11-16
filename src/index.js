import "./styles/style.scss";
import { getData } from "./modules/getData.mjs";
import { Template } from "./modules/Template.mjs";
import { renderTemplate } from "./modules/Template.mjs";
import { fadeIn } from "./modules/move_menu";
import { fadeOut } from "./modules/move_menu.mjs";
import { mostRecent } from "./modules/order.mjs";
import { lowerPrice } from "./modules/order.mjs";
import { higherPrice } from "./modules/order.mjs";
import { getValues } from "./modules/filter.mjs";

async function render(templates) {
  const productsSection = document.getElementById("products");
  const products = await templates;
  products.forEach((product) => {
    product.renderTemplate(productsSection);
  });
}

function hasChild(parent) {
  if (parent.hasChildNodes()) {
    const children = parent.childNodes;
    return children;
  } else {
    return false;
  }
}

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
    allTemplates.push(template);
  });
  console.log(allTemplates);
  return allTemplates;
}

async function getInfo() {
  const allProducts = await getData();
  const allTemplates = createProduct(allProducts);
  // console.log(products);
  return allTemplates;
}

function sendMenu(id, state) {
  const menu = document.getElementById(`${id}`);
  if (state) {
    fadeIn(menu);
  } else {
    fadeOut(menu);
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
    const ordered = await lowerPrice();

    // render();
  });

//BTN higher price
document
  .getElementById("btn_higher-price")
  .addEventListener("click", async () => {
    const ordered = await higherPrice();

    // render();
  });

document.getElementById("btn_apply-filter").addEventListener("click", () => {
  let filterOptions = document.querySelectorAll(
    "details input[type='checkbox']"
  );
  getValues(filterOptions);
});

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

render(getInfo());
