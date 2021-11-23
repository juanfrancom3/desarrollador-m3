import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import BolsaCompra from './components/BolsaCompra'
import FiltroRango from './components/FiltroRango'
import FiltroValor from './components/FiltroValor'
import ListaTarjetas from './components/ListaTarjetas'
import Titulo from './components/Titulo'
// import Tarjeta from './components/Tarjeta'
// const a = import('./data/data.json')
import * as response from './data/data.json'
function App () {
  const [compra, setCompra] = useState('')
  const [filtroColor, setFiltroColor] = useState([])
  const [filtroTalla, setFiltroTalla] = useState([])
  const [filtroPrecio, setFiltroPrecio] = useState([])
  // const [a, setA] = useState({})

  const agregar = (id) => {
    // console.log('todo', id)
    // console.log(a)
    setCompra(e => +e + 1)
  }
  const handleChangeFiltroColor = (event) => {
    const newValue = event.target.value
    console.error(newValue)
    if (filtroColor.includes(newValue)) {
      const set = new Set(filtroColor)
      set.delete(newValue)
      const valueNew = [...set]
      setFiltroColor([...valueNew])
    } else {
      setFiltroColor([...filtroColor, newValue])
    }
  }

  const handleChangeFiltroTalla = (event) => {
    const newValue = event.target.value
    console.error(newValue)
    if (filtroTalla.includes(newValue)) {
      const set = new Set(filtroTalla)
      set.delete(newValue)
      const valueNew = [...set]
      setFiltroTalla([...valueNew])
    } else {
      setFiltroTalla([...filtroTalla, newValue])
    }
    // console.log(filtroColor)
  }
  const handleChangeFiltroPrecio = (event) => {
    const newValue = event.target.value
    // console.log(newo)
    if (filtroPrecio.includes(newValue)) {
      const set = new Set(filtroPrecio)
      set.delete(newValue)
      const valueNew = [...set]
      setFiltroPrecio([...valueNew])
    } else {
      setFiltroPrecio([...filtroPrecio, newValue])
    }
  }
  return (
    <div className='App'>
      <header className='App-header container'>
        <div className='header'>
          <img src='./src/layout/imagens/logo-m3.png' alt='logo' />
          <BolsaCompra compras={compra} />
        </div>
      </header>
      <hr />
      <div className='container '>
        <div className='main'>
          <div className='titulo'>
            <Titulo>Blusas</Titulo>
          </div>
          <p className='ordenar'>ordenar</p>
          <div className='filtros'>
            <FiltroValor elements={['azul', 'verde', 'branco', 'amarelo', 'cinza']} title='CORES' filtro={handleChangeFiltroColor} />

            <FiltroValor elements={['P', 'M', 'G', 'GG', 'U', '36', '38', '40', '42', '44', '46']} title='CORES' filtro={handleChangeFiltroTalla} />
            <FiltroRango title='FAIXA DE PREÇO' elements={['0-50', '51-150', '151-300', '301-500', '01']} filtro={handleChangeFiltroPrecio} />

          </div>
          <div className='catalogo'>
            <ListaTarjetas data={response.data} filtroColor={filtroColor} filtroTalla={filtroTalla} filtroPrecio={filtroPrecio} agregar={agregar} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
