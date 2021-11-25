import { useState } from 'react'
import './dropItemFiltros.css'
export default function DropItemsFiltros ({ title, children }) {
  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }
  const toggleVisibility = () => setVisible(!visible)
  console.log(visible)
  return (
    <>
      <div className='mostrar-grande'>
        {children}
      </div>
      <div className='mostrar-peque'>
        <div style={hideWhenVisible}>
          <h3 onClick={toggleVisibility}>{title} ➕</h3>
        </div>
        <div style={showWhenVisible} className='dropdown-item'>
          <h3 onClick={toggleVisibility}>{title} ➖</h3>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
