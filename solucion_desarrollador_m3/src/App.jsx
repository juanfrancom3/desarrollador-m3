// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import ListaTarjetas from './components/ListaTarjetas'
// import Tarjeta from './components/Tarjeta'
// const a = import('./data/data.json')
import * as response from './data/data.json'
function App () {
  console.log(response)
  console.log(response.data)
  console.log(response.default.data)
  // a.then(data => console.log(data.default))
  // console.log(data)

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='header'>
          <img src='./src/layout/imagens/logo-m3.png' alt='logo' />
          <figure>
            <img src='./src/layout/imagens/bag.png' width='32px' alt='shop bag' />
          </figure>
        </div>
      </header>
      <ListaTarjetas data={response.data} />
    </div>
  )
}

export default App
