import './botonCargar.css'

export default function BotonCargar () {
  return (
    <div className='boton-cargar'>
      <button onClick={() => console.log('pedir mas datos a la API')}><h4>CARGAR MAS</h4></button>
    </div>
  )
}
