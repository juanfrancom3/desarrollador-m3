// data => la informacion a filtrar,
// key => la propiedad mediante la cual se desea aplicar el filtro
// array => filtro que se desea
export default function useFiltroValor ({ data, key, array }) {
  const response = (element, array) => {
    const res = array.map((filtro) => element.includes(filtro))
    // console.log(res)
    return res.includes(true)
  }
  const dataFiltrada = data.filter(element => response(element[key], array))
  return dataFiltrada
}
