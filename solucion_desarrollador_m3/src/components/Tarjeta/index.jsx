import BotonComprar from '../BotonComprar'
import './tarjeta.css'
export default function Tarjeta ({ src, price, title, ...props }) {
  console.log(props)
  const label = props.cant >= 1 ? 'Comprar' : 'Agotado'
  return (
    <div className='tarjeta'>
      <img src={src} alt={title} />
      <p>{title}</p>
      <p><strong>{price}</strong></p>
      <BotonComprar>{label}</BotonComprar>
    </div>
  )
}
