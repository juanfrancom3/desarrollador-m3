export class ShoppingBag {
  constructor() {
    this.products_in_bag = [];
  }

  renderInBag(product) {
    const container = document.getElementById("shopping-bag--container");
    container.style.visibility = "visible";

    //Eliminar aviso de bolsa sin productos
    if (document.getElementById("shopping-bag-empty")) {
      const empty = document.getElementById("shopping-bag-empty");
      container.removeChild(empty);
    }

    const bag_box = document.getElementById("shopping-bag-box");

    const myProduct = document.createElement("div");
    myProduct.classList.add("shopping-bag--product");

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.setAttribute("src", product.route);

    const productInfo = document.createElement("div");
    productInfo.classList.add("shopping-bag--product--product-info");

    const productName = document.createElement("p");
    productName.classList.add("product-name");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = `R$ ${product.price}`;

    const cantidad = document.createElement("div");
    cantidad.classList.add("cantidad");
    cantidad.textContent = 1;

    const button_box = document.createElement("div");
    button_box.classList.add("shopping-bag--buttons");

    const button = document.createElement("button");
    button.classList.add("pay-button");
    button.textContent = "Pagar";

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(cantidad);

    figure.appendChild(image);

    myProduct.appendChild(figure);
    myProduct.appendChild(productInfo);

    bag_box.appendChild(myProduct);

    this.products_in_bag.push(product);
    // this.products_in_bag.forEach((product) => {
    //   console.log(product);
    // });

    const blue_burble = document.getElementById("items_in_bag");
    blue_burble.textContent = this.products_in_bag.length;
    blue_burble.style.visibility = "visible";
    // console.log(this.products_in_bag.length);
  }
}
