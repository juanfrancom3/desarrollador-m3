import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import BolsaCompra from './components/BolsaCompra'
import BotonCargar from './components/BotonCargar'
import DropFiltros from './components/DropFiltros'
import DropItemsFiltros from './components/DropItemsFiltros'
import FiltroRango from './components/FiltroRango'
import FiltroValor from './components/FiltroValor'
import ListaTarjetas from './components/ListaTarjetas'
import Titulo from './components/Titulo'
// import Tarjeta from './components/Tarjeta'
// const a = import('./data/data.json')
import * as response from './data/data.json'
const FILTROS_COLOR = ['azul', 'verde', 'branco', 'amarelo', 'cinza', 'laranja', 'vermelho', 'preto', 'Rosa', 'vinho']
const FILTROS_TALLA = ['P', 'M', 'G', 'GG', 'U', '36', '38', '40', '42', '44', '46']
const FILTROS_PRECIO = ['0-50', '51-150', '151-300', '301-500', '01']
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
          <div className='ordenar'>
            <DropFiltros title='ORDENAR'>
              <select name='' id=''>
                <option>ordenar por</option>
                <option>mundo</option>
              </select>
            </DropFiltros>
          </div>
          {/* <p className='ordenar'>ordenar</p> */}
          <div className='filtros'>
            {/* <h3 className='filtro-responsive'>filtros boton</h3> */}
            <div className='contener-fil'>
              <DropFiltros title='FILTRAR'>
                <DropItemsFiltros title='CORES'>
                  <FiltroValor elements={FILTROS_COLOR} classN='list' title='CORES' filtro={handleChangeFiltroColor} />
                </DropItemsFiltros>
                <DropItemsFiltros title='TAMANHOS'>
                  <FiltroValor elements={FILTROS_TALLA} classN='square' title='TAMANHOS' filtro={handleChangeFiltroTalla} />
                </DropItemsFiltros>

                <DropItemsFiltros title='FAIXA DE PREÇO'>
                  <FiltroRango title='FAIXA DE PREÇO' classN='list' elements={FILTROS_PRECIO} filtro={handleChangeFiltroPrecio} />
                </DropItemsFiltros>
              </DropFiltros>
            </div>

          </div>
          <div className='catalogo'>
            <ListaTarjetas data={response.data} filtroColor={filtroColor} filtroTalla={filtroTalla} filtroPrecio={filtroPrecio} agregar={agregar} />
            <BotonCargar />
          </div>

        </div>
      </div>
      <footer className='container footer'>Agencia M3 - Agencia de Performance Digital</footer>
    </div>
  )
}

export default App
