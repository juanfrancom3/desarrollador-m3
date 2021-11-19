import { ShoppingBag } from "./ShoppigBag.mjs";

let bag = new ShoppingBag();
export class Template {
  constructor(route, name, price, toFinance, date, sizes) {
    if (
      route !== null &&
      route !== undefined &&
      route !== "" &&
      name !== null &&
      name !== undefined &&
      name !== "" &&
      price !== null &&
      price !== undefined &&
      price !== "" &&
      toFinance !== null &&
      toFinance !== undefined &&
      toFinance !== "" &&
      date !== null &&
      date !== undefined &&
      date !== "" &&
      sizes !== null &&
      sizes !== undefined &&
      sizes !== ""
    ) {
      this.route = route;
      this.name = name;
      this.price = price;
      this.toFinance = toFinance;
      this.date = date;
      this.sizes = sizes;
    } else {
      console.log(
        `ERROR: datos incompletos en el template ${route} ${name} ${price} ${toFinance}`
      );
    }
  }
  createTemplate() {
    const product = document.createElement("div");
    product.classList.add("product");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", this.route);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product_info");
    productImage.setAttribute("alt", "product image");

    const productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent = `R$ ${this.price}`;

    const productName = document.createElement("p");
    productName.classList.add("name");
    productName.textContent = this.name;

    const productFinance = document.createElement("p");
    productFinance.classList.add("toFinance");
    productFinance.textContent = this.toFinance;

    const productButton = document.createElement("button");
    productButton.setAttribute("type", "button");
    productButton.textContent = "Comprar";
    productButton.addEventListener("click", () => {
      // console.log(this);
      bag.renderInBag(this);
    });

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productFinance);

    product.appendChild(productImage);
    product.appendChild(productInfo);
    product.appendChild(productButton);

    // console.log(product);

    return product;
  }
  renderTemplate(parent, product) {
    parent.appendChild(product);
  }
}
