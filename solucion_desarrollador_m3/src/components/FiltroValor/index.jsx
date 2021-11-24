// import { useState } from 'react'
import './filtroValor.css'
export default function FiltroValor ({ elements, title, filtro, classN = 'list' }) {
  const classA = `filtro-valor ${classN}`
  return (
    <div className={classA}>
      <h4>{title}</h4>
      <div>
        {
          elements.map((element) => {
            return (
              <label key={element}>
                <input type='checkbox' onClick={filtro} value={element} />
                <span className='label-text'>
                  {element}
                </span>

              </label>
            )
          })
        }
      </div>

    </div>
  )
}
