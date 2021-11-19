import './botonComprar.css'
export default function BotonComprar ({ active, agregar, children }) {
  console.log(children)
  return (
    active
      ? <button onClick={agregar} className='boton-comprar'>{children}</button>
      : <button onClick={agregar} className='boton-comprar btn-disabled' disabled>{children}</button>

  )
}
