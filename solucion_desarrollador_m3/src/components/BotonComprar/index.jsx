import './botonComprar.css'
export default function BotonComprar ({ active, agregar, children }) {
  // console.log(children)
  return (
    active
      ? <button onClick={agregar} className='boton-comprar'><h4>{children}</h4></button>
      : <button onClick={agregar} className='boton-comprar btn-disabled' disabled><h4>{children}</h4></button>

  )
}
