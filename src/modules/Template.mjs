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
      toFinance !== ""
    ) {
      this.route = route;
      this.name = name;
      this.price = price;
      this.toFinance = toFinance;
      this.button = "<button type='button'>Comprar</button>";
      this.sizes;
    } else {
      console.log(
        `ERROR: datos incompletos en el template ${route} ${name} ${price} ${toFinance}`
      );
    }
  }
  createTemplate() {
    return `<div class="product"><img src=${this.route} alt="product image" /><div class="product_info"><p class="name">${this.name}</p><p class="price">R$ ${this.price}</p><p class="toFinance">${this.toFinance}</p></div>${this.button}</div>`;
  }
  renderTemplate(parent) {
    parent.innerHTML += this.createTemplate();
  }
}
