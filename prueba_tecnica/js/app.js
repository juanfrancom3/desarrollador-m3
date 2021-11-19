import Filter from "./modules/Filter.js";
import Products from "./modules/Product.js";
import Storage from "./modules/Storage.js";
import UI from "./modules/Ui.js";

const d = document,
  filterBar = d.querySelector(".sidebar"),
  selectFilter = d.querySelector(".header"),
  btnMenu = d.getElementById("btnMenu"),
  btnCloseMenu = d.getElementById("btnCloseMenu"),
  resnav = d.querySelector(".res-nav"),
  menu = d.getElementById("menu"),
  subColors = d.getElementById("subColors"),
  subZise = d.getElementById("subZise"),
  subPrice = d.getElementById("subPrice"),
  submenuColor = d.querySelector(".submenuColor"),
  submenuZise = d.querySelector(".submenuZise"),
  submenuPrice = d.querySelector(".submenuPrice");

d.addEventListener("DOMContentLoaded", (event) => {
  const ui = new UI();
  const products = new Products();
  const filter = new Filter();

  ui.setupAPP();

  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);

      selectFilter.addEventListener("click", (e) => {
        if (e.target.value === undefined) return;

        //
        if (e.target.matches("select")) {
          //
          if (e.target.value === "value1") {
            const result = filter.sortHightToLow(products);

            ui.displayProducts(result);
            ui.getBagButtons();
          } else if (e.target.value === "value2") {
            const result = filter.sortlowToHight(products);

            ui.displayProducts(result);
            ui.getBagButtons();
          }
        }
      });

      filterBar.addEventListener("click", (e) => {
        if (e.target.value === undefined) return;

        if (e.target.matches(".color-input input")) {
          const result = filter.byColor(products, e.target.value);

          ui.displayProducts(result);
          ui.getBagButtons();
        } else if (e.target.matches(".cloth-size input")) {
          const result = filter.byZise(products, e.target.value);

          ui.displayProducts(result);
          ui.getBagButtons();
        } else if (e.target.matches(".price input")) {
          const result = filter.byPrice(products, e.target.value);

          ui.displayProducts(result);
          ui.getBagButtons();
        }
      });

      btnMenu.addEventListener("click", (e) => {
        resnav.classList.add("transparentMenu");
        menu.classList.add("showMenu");
      });

      btnCloseMenu.addEventListener("click", (e) => {
        resnav.classList.remove("transparentMenu");
        menu.classList.remove("showMenu");
      });

      function showHideSubMenu(submenu) {
        if (submenu.classList.contains("deploy")) {
          submenu.classList.remove("deploy");
          submenu.removeAttribute("style");
        } else {
          submenu.classList.add("deploy");
          submenu.style.height = 200 + "px";
        }
      }

      function changeIcon(button) {
        if (button.classList.contains("fa-plus")) {
          button.classList.remove("fa-plus");
          button.classList.add("fa-minus");
        } else {
          button.classList.remove("fa-minus");
          button.classList.add("fa-plus");
        }
      }
      subColors.addEventListener("click", (e) => {
        showHideSubMenu(submenuColor);
        changeIcon(subColors);
      });
      subZise.addEventListener("click", (e) => {
        showHideSubMenu(submenuZise);
        changeIcon(subZise);
      });
      subPrice.addEventListener("click", (e) => {
        showHideSubMenu(submenuPrice);
        changeIcon(subPrice);
      });
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartlogic();
    });
});
