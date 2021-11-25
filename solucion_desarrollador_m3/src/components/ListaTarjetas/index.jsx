import useFiltroRango from '../../hooks/useFiltroRango'
import useFiltroValor from '../../hooks/useFiltroValor'
import Tarjeta from '../Tarjeta'
import './listaTarjetas.css'

export default function ListaTarjetas ({ data, agregar, filtroColor, filtroTalla, filtroPrecio }) {
  const agregarCarro = (id) => {
    agregar(id)
  }
  let dataFil
  if (filtroColor.length === 0) {
    dataFil = data
  } else {
    dataFil = useFiltroValor({ data, key: 'colors', array: filtroColor })
  }
  if (filtroTalla.length !== 0) {
    dataFil = useFiltroValor({ data: dataFil, key: 'sizes', array: filtroTalla })
  }
  if (filtroPrecio.length !== 0) {
    dataFil = useFiltroRango({ data: dataFil, key: 'price', array: filtroPrecio })
  }

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
