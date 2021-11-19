export default class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json"),
        data = await result.json(),
        products = data.items;

      products = products.map((item) => {
        const { title, price, color, zise } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        const { amount, priceProm } = item.fields.promotion[0];
        return {
          title,
          price,
          id,
          image,
          amount,
          priceProm,
          color,
          zise,
        };
      });

      return products;
    } catch (error) {
      console.error(error);
    }
  }
}
