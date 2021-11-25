import BotonComprar from '../BotonComprar'
import './tarjeta.css'
export default function Tarjeta ({ src, price, title, agregar, ...props }) {
  // console.log(props)
  // console.log(agregar)
  const label = props.cant >= 1 ? 'COMPRAR' : 'AGOTADO'
  const active = label === 'COMPRAR'
  return (
    <div className='tarjeta'>
      <img src={src} alt={title} />
      <p>{title}</p>
      <p><strong>{price}</strong></p>
      <BotonComprar agregar={agregar} active={active}>{label}</BotonComprar>
    </div>
  )
}
