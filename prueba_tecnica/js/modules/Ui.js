import Storage from "./Storage.js";

const d = document,
  cartBtn = d.querySelector(".cart-btn"),
  closeCartBtn = d.querySelector(".close-cart"),
  clearCartBtn = d.querySelector(".clear-cart"),
  cartDOM = d.querySelector(".cart"),
  cartOverlay = d.querySelector(".cart-overlay"),
  cartItems = d.querySelector(".cart-items"),
  cartTotal = d.querySelector(".cart-total"),
  cartContent = d.querySelector(".cart-content"),
  productsDOM = d.querySelector(".products");

let cart = [];
let buttonsDOM = [];

export default class UI {
  displayProducts(products) {
    let result = "";

    products.forEach((product) => {
      result += `
            <article class="product">
  
              <div class="img-container">
                <img
                  src=${product.image}
                  alt=${product.title}
                  class="product-img"
                />
              </div>
  
              <h3>${product.title}</h3>
              <h4>R$ ${product.price}</h4>
              <h4>ate ${product.amount}x R$${product.priceProm}</h4>
              <button class="btn-bag" data-id=${product.id}>COMPRAR</button>
  
          </article>
        `;
    });

    productsDOM.innerHTML = result;
  }

  getBagButtons() {
    const buttons = [...d.querySelectorAll(".btn-bag")];
    buttonsDOM = buttons;

    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "EN EL CARRITO";
        button.disabled = true;
      }

      button.addEventListener("click", (event) => {
        button.innerText = "EN EL CARRITO";
        button.disabled = true;

        let cartItem = { ...Storage.getProduct(id), cartAmount: 1 };
        cart = [...cart, cartItem];
        Storage.saveCart(cart);

        this.setCartValues(cart);
        this.addCartItem(cartItem);
        this.showCart();
      });
    });
  }

  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;

    cart.map((item) => {
      tempTotal += item.price * item.cartAmount;
      itemsTotal += item.cartAmount;
    });

    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }

  addCartItem(item) {
    const div = d.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
          <img src=${item.image} />
          <div>
            <h4>${item.title}</h4>
            <h5>R$ ${item.price}</h5>
            <span class="remove-item" data-id=${item.id}>quitar</span>
          </div>
          <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.cartAmount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
          </div>
      `;

    cartContent.appendChild(div);
  }

  showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
  }

  hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
  }

  populate(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }

  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populate(cart);
    cartBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }

  getSingleButton(id) {
    return buttonsDOM.find((button) => button.dataset.id === id);
  }

  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerText = "COMPRAR";
  }

  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }

  cartlogic() {
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });

    cartContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-item")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);

        this.removeItem(id);
      } else if (event.target.classList.contains("fa-chevron-up")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;

        let tempItem = cart.find((item) => item.id === id);
        tempItem.cartAmount = tempItem.cartAmount + 1;

        Storage.saveCart(cart);
        this.setCartValues(cart);

        addAmount.nextElementSibling.innerText = tempItem.cartAmount;
      } else {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;

        let tempItem = cart.find((item) => item.id === id);
        tempItem.cartAmount = tempItem.cartAmount - 1;

        if (tempItem.cartAmount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);

          lowerAmount.previousElementSibling.innerText = tempItem.cartAmount;
        } else {
          cartContent.removeChild(lowerAmount.parentElement.parentElement);
          this.removeItem(id);
        }
      }
    });
  }
}
