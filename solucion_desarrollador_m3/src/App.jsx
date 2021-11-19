import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import BolsaCompra from './components/BolsaCompra'
import ListaTarjetas from './components/ListaTarjetas'
import Titulo from './components/Titulo'
// import Tarjeta from './components/Tarjeta'
// const a = import('./data/data.json')
import * as response from './data/data.json'
function App () {
  const [compra, setCompra] = useState('')
  // const [a, setA] = useState({})

  const agregar = (id) => {
    console.log('todo', id)

    // console.log(a)
    setCompra(e => +e + 1)
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
      <div className='container main'>
        <Titulo>Blusas</Titulo>
        <p>ordenar</p>
      </div>
      <ListaTarjetas data={response.data} agregar={agregar} />
    </div>
  )
}

export default App
