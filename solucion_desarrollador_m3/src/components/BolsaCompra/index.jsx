import './bolsaCompra.css'
export default function BolsaCompra ({ compras }) {
  return (
    <figure className='bolsa'>
      <img src='./src/layout/imagens/bag.png' width='32px' alt='shop bag' />
      {
        compras
          ? <small className='carrito'>{compras}</small>
          : null
      }
    </figure>
  )
}
