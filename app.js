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
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        printCarrito()
    }
})

cards.addEventListener('click', e =>{
    addCarrito(e)
})

items.addEventListener('click', e =>{
    btnAccion(e)
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
    const producto = {
        id: objeto.querySelector('.btn-buy').dataset.id,
        nombre: objeto.querySelector('h3').textContent,
        precio: objeto.querySelector('h4').textContent,
        cuotas: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    printCarrito()

    /* console.log(producto) */
}

const printCarrito = () =>{
    /* console.log(carrito) */
    items.innerHTML = ''
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

    pintarFooter();

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () =>{
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">
            Carrito vacío - comience a comprar!
        </th>`
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0 )
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)
    console.log(nCantidad)
    console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)


    const btnVaciar = document.getElementById('vaciar-carrito')
        btnVaciar.addEventListener('click', () =>{
            carrito = {}
            printCarrito()
        })
}

const btnAccion = e => {
    /* console.log(e.target) */
    /* Aumento en el carrito */
    if(e.target.classList.contains('btn-info')){
        
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        printCarrito()
    }

    if(e.target.classList.contains('btn-danger')){
        
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        }else{
            carrito[e.target.dataset.id] = {...producto}
        }
         
        printCarrito()
    }
    e.stopPropagation()
}
