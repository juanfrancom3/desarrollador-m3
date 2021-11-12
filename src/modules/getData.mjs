const getData = async () => {
  const route = "./data.json";
  const response = await fetch(route);
  const data = response.json();
  return data;
};

export default getData;
