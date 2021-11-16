class Shopping_bag {
  constructor(products = []) {
    this.products = products;
  }
  add(newProduct) {
    this.products.push(newProduct);
  }
  remove() {}
}
