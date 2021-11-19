import Tarjeta from '../Tarjeta'
import './listaTarjetas.css'

export default function ListaTarjetas ({ data, agregar }) {
  const agregarCarro = (id) => {
    agregar(id)
  }
  return (
    <div className='tarjetas'>
      {data.map((ele, i) => {
        return <Tarjeta key={ele.id} src={ele.source} title='hola' price={ele.price} agregar={() => agregarCarro(ele.id)} {...ele} />
      })}
    </div>
  )
}
