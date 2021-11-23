// import { useState } from 'react'
import './filtroValor.css'
export default function FiltroValor ({ elements, title, filtro }) {
  // console.log(filtroColor, filtroTalla)
  // const [colorF, setColorF] = useState('')

  // const handleFiltro = (event) => {
  //   // console.log('hola event')
  //   // console.log(event.target.value)
  //   setColorF(event.target.value)
  //   console.log(colorF)
  // }
  return (
    <div className='filtro-valor'>
      <h4>{title}</h4>
      {
      elements.map((element) => {
        return (
          <label key={element}>
            <input type='checkbox' onClick={filtro} value={element} />
            {element}
          </label>
        )
      })
    }
    </div>
  )
}
