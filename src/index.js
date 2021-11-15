import "./styles/style.scss";
import { getData } from "./modules/getData.mjs";
import { Template } from "./modules/Template.mjs";
import { renderTemplate } from "./modules/Template.mjs";
import { fadeIn } from "./modules/move_menu";
import { fadeOut } from "./modules/move_menu.mjs";
import { mostRecent } from "./modules/order.mjs";

const productsSection = document.getElementById("products");

async function getInfo(firstView) {
  const allProducts = await getData();
  let counter = 0;

  allProducts.forEach((product) => {
    const template = Template(
      product.image.source,
      product.name,
      product.price,
      product.toFinance
    );
    if (screen.width < 1024 && firstView == true) {
      if (counter < 6) {
        //cantidad inicial de productos que se muestran en pantallas mobile
        renderTemplate(productsSection, template);
      }
    } else {
      renderTemplate(productsSection, template);
    }
    counter++;
  });
}

function sendMenu(id, state) {
  const menu = document.getElementById(`${id}`);
  if (state) {
    fadeIn(menu);
  } else {
    fadeOut(menu);
  }
}

//BTN_Cargar mas productos
document.getElementById("btn_more").addEventListener("click", () => {
  productsSection.innerHTML = "";
  getInfo(false);
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
  .addEventListener("click", async () => {
    const ordered = await mostRecent();

    console.log(ordered);

    productsSection.innerHTML = "";

    ordered.forEach((item) => {
      const template = Template(
        item.image.source,
        item.name,
        item.price,
        item.toFinance
      );

      renderTemplate(productsSection, template);
    });

    sendMenu("sort-menu", false);
  });

getInfo(true);
