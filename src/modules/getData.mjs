export async function getData() {
  //Obtener los datos del json
  try {
    const url = "./data.json";
    const response = await fetch(url);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(`ERROR ${error}`);
  }
}
