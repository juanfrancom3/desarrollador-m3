
// data => informacion a filtrar [{...},{...},{...}]
// key => la propiedad mediante la cual se desea aplicar el filtro
// array ==> filro que se desea, ['10,20','2'] => rangos o valores unicos

export default function useFiltroRango ({ data, key, array }) {
  const arraySplit = array.map(e => e.split(','))
  console.log(arraySplit)
  const response = (element, array) => {
    const res = array.map(e => {
      console.log(e.length)
      if (e.length > 1) {
        console.log(element, e[0], e[1])
        if (+element >= +e[0] && +element <= +e[1]) {
          return true
        }
        return false
      } else {
        if (+element >= +e[0]) {
          return true
        }
        return false
      }
    })
    return res.includes(true)
  }
  const dataFiltrada = data.filter(element => response(element[key], arraySplit))
  return dataFiltrada
}
