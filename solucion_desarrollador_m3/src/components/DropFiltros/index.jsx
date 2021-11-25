import { useState } from 'react'
import './dropFiltros.css'
export default function DropFiltros ({ title, children }) {
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
        <div style={showWhenVisible} className='dropdown'>
          <h3 onClick={toggleVisibility}>{title} ➖</h3>
          <hr />
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
