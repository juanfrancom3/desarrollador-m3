// import { useState } from 'react'

export default function FiltroColor ({ colors, title, filtro }) {
  // const [colorF, setColorF] = useState('')

  // const handleFiltro = (event) => {
  //   // console.log('hola event')
  //   // console.log(event.target.value)
  //   setColorF(event.target.value)
  //   console.log(colorF)
  // }
  return (
    <>
      <h4>{title}</h4>
      {
      colors.map((color) => {
        return (
          <label key={color}>
            <input type='checkbox' onClick={filtro} value={color} />
            {color}
          </label>
        )
      })
    }
    </>
  )
}
