const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCards = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () =>{
    fetchData();
})

cards.addEventListener('click', e =>{
    addCarrito(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('blusas.json')
        const data = await res.json()
       /*  console.log(data) */
        printCards(data)
    } catch (error) {
        console.log(error)
    }
}

const printCards = data =>{
    data.forEach(producto =>{
        /* console.log(producto) */
        templateCards.querySelector('img').setAttribute('src', producto.imagen)
        templateCards.querySelector('h3').textContent = producto.nombre
        templateCards.querySelector('h4').textContent = producto.precio
        templateCards.querySelector('p').textContent = producto.cuotas
        templateCards.querySelector('.btn-buy').dataset.id = producto.id
        const clone = templateCards.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e =>{
    /* console.log(e.target) */
    /* console.log(e.target.classList.contains('btn-buy')) */
    if(e.target.classList.contains('btn-buy')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    /* console.log(objeto) */
    const producto ={
        id: objeto.querySelector('.btn-buy').dataset.id,
        nombre: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('h4').textContent,
        cuotas: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad +1
    }

    carrito[producto.id] = {...producto}

    console.log(producto)
}

const printCarrito = () =>{
    console.log(carrito)
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent= producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent= producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}