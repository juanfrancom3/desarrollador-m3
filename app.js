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
        var elemento = document.getElementById("cards");
        while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
        }
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
        templateCards.querySelector('p').textContent = producto.cuotas + Math.ceil(producto.precio/producto.ncuotas) 
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
        alert("Se agregó al carrito")
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

const openPop = document.getElementById('o-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup')
    closePop = document.getElementById('c-popup')

openPop.addEventListener('click', () =>{
    overlay.classList.add('active')
})

closePop.addEventListener('click', () =>{
    overlay.classList.remove('active')
})

const allColors = document.getElementById('col-all')
const filColorAm = document.getElementById('amarillo')
const filColorAz = document.getElementById('azul')
const filColorBl = document.getElementById('blanco')
const filColorGr = document.getElementById('gris')
const filColorNa = document.getElementById('naranja')

allColors.addEventListener('click', () =>{
    fetchData()
})


filColorAm.addEventListener('change', async () =>{
    if (filColorAm.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.color == "amarillo")
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filColorAz.addEventListener('change', async () =>{
    if (filColorAz.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.color == "azul")
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filColorBl.addEventListener('change', async () =>{
    if (filColorBl.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.color == "blanco")
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filColorGr.addEventListener('change', async () =>{
    if (filColorGr.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.color == "gris")
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filColorNa.addEventListener('change', async () =>{
    if (filColorNa.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.color == "naranja")
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

const filPre1 = document.getElementById('pre1')
const filPre2 = document.getElementById('pre2')
const filPre3 = document.getElementById('pre3')
const filPre4 = document.getElementById('pre4')
const filPre5 = document.getElementById('pre5')

filPre1.addEventListener('change', async () =>{
    if (filPre1.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.precio <= 36000 && e.precio > 0)
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filPre2.addEventListener('change', async () =>{
    if (filPre2.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.precio <= 108000 && e.precio > 36000)
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filPre3.addEventListener('change', async () =>{
    if (filPre3.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.precio <= 216000 && e.precio > 108000)
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});

filPre4.addEventListener('change', async () =>{
    if (filPre4.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.precio <= 360000 && e.precio > 216000)
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});


filPre5.addEventListener('change', async () =>{
    if (filPre5.checked) {
        try {
            const res = await fetch('blusas.json')
            const data = await res.json()
            const filtroCol = data.filter(e => e.precio > 1000)
            console.log(filtroCol)
            var elemento = document.getElementById("cards");
            while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
            }
           /*  console.log(data) */
            printCards(filtroCol)
        } catch (error) {
            console.log(error)
        }
      } else {
        fetchData()
      }
});
