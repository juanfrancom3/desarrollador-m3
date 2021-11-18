import Tarjeta from '../Tarjeta'

export default function ListaTarjetas ({ data }) {
  return (
    <div className='tarjetas'>
      {data.map((ele, i) => {
        return <Tarjeta key={ele.id} src={ele.source} title='hola' price={ele.price} {...ele} />
      })}
    </div>
  )
}
