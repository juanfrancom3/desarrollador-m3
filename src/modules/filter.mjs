export function getValues(items) {
  let values = [];

  items.forEach((item) => {
    values.push(item.value);
    console.log(item.value);
  });
  console.log(values);
}
