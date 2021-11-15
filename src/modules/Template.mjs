export const Template = (route, name, price, toFinance) => {
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
    return `
      <div class="product">
        <img src=${route} alt="product image" />
        <div class="product_info">
          <p class="name">${name}</p>
          <p class="price">R$ ${price}</p>
          <p class="toFinance">${toFinance}</p>
        </div>
        <button type="button">Comprar</button>
      </div>
      `;
  } else {
    console.log(
      `ERROR: datos incompletos en el template ${route} ${name} ${price} ${toFinance}`
    );
  }
};

function render(params) {}

export function renderTemplate(container, template) {
  // container.innerHTML = "";
  container.innerHTML += template;
}
