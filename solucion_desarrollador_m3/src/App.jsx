import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import BolsaCompra from './components/BolsaCompra'
import ListaTarjetas from './components/ListaTarjetas'
// import Tarjeta from './components/Tarjeta'
// const a = import('./data/data.json')
import * as response from './data/data.json'
function App () {
  const [compr, setcompr] = useState('')
  // console.log(response)
  // console.log(response.data)
  // console.log(response.default.data)
  // a.then(data => console.log(data.default))
  // console.log(data)

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='header'>
          <img src='./src/layout/imagens/logo-m3.png' alt='logo' />
          <BolsaCompra compras={compr} />
        </div>
        <button onClick={() => setcompr(e => +e + 1)}>press me</button>
      </header>
      <ListaTarjetas data={response.data} />
    </div>
  )
}

export default App
