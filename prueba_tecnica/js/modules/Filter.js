export default class Filter {
  sortHightToLow(products) {
    let result = products.sort((o1, o2) => {
      if (o1.price < o2.price) {
        return -1;
      } else if (o1.price > o2.price) {
        return 1;
      } else {
        return 0;
      }
    });

    return result;
  }
  sortlowToHight(products) {
    let result = products.sort((o1, o2) => {
      if (o1.price < o2.price) {
        return 1;
      } else if (o1.price > o2.price) {
        return -1;
      } else {
        return 0;
      }
    });
    return result;
  }
  byColor(products, valor) {
    let val = valor.toLowerCase();
    const newArray = products.filter((res) => {
      return res.color === val;
    });

    return newArray;
  }
  byZise(products, valor) {
    let val = valor.toLowerCase();
    const newArray = products.filter((res) => {
      return res.zise === val;
    });
    return newArray;
  }
  byPrice(products, valor) {
    const array = valor.split(",");
    let min = parseInt(array[0]);
    let max = parseInt(array[1]);
    const newArray = products.filter((res) => {
      return res.price > min && res.price < max;
    });
    return newArray;
  }
}
