import useFiltroValor from '../../hooks/useFiltroValor'
import Tarjeta from '../Tarjeta'
import './listaTarjetas.css'

export default function ListaTarjetas ({ data, agregar, filtroColor, filtroTalla }) {
  console.log('filtro', filtroColor)
  console.log('filtro talla', filtroTalla)
  const agregarCarro = (id) => {
    agregar(id)
  }
  let dataFil
  if (filtroColor.length === 0) {
    dataFil = data
  } else {
    dataFil = useFiltroValor({ data, key: 'colors', array: filtroColor })
  }
  // const dataF = data.filter((ele) => ele.colors.includes(filtro))
  // console.log('dataF', dataF)
  // const dd = new Set(data)
  // dd.add(...dataF)
  // const dataT = [...data, ...dataF]
  // console.log(dataT)
  // console.log(dataF)
  // console.log(dataFil)
  return (
    <div className='tarjetas'>
      {dataFil.map((ele, i) => (
        <Tarjeta
          key={ele.id}
          src={ele.source}
          title='hola'
          price={ele.price}
          agregar={() => agregarCarro(ele.id)} {...ele}
        />)
      )}
    </div>
  )
}
