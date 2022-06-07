
let carrito = document.getElementById("carrito");
let template = document.getElementById("template");
let footer = document.getElementById("footer");
let templateFooter = document.getElementById("templateFooter")
let fragment = document.createDocumentFragment();


document.addEventListener("click", (a) => {
    // console.log(e.target.matches('.card .btn-dark'))

    if(a.target.matches('.card .btn-dark')) {
        // console.log('siiiiiiuuuu')

        agregarCarrito(a)
    }

    // console.log(a.target.matches(".list-group-item .btn-success"))

    if (a.target.matches('.list-group-item .btn-success')) {
        
        btnAumentar(e);
    }
})


let contenidoCarrito = [];

let agregarCarrito = (a) => {
    // console.log(a.target.dataset.pan)
    
    let productos = {
        titulo: a.target.dataset.pan,
        id: a.target.dataset.pan,
        cantidad: 1,
        precio: parseInt(a.target.dataset.precio)
    }
    // console.log(productos)

    let indice = contenidoCarrito.findIndex((s) => s.id === productos.id)

    if (indice === -1) {
        contenidoCarrito.push(productos);
        
    }else {
        contenidoCarrito[indice].cantidad++;
        // contenidoCarrito[indice].precio = contenidoCarrito[indice].cantidad * productos.precio;
    }

        // console.log(contenidoCarrito)
    contenidoCarrito[productos.titulo] = productos;
    // console.log(contenidoCarrito)
    pintar();
}



let pintar = () => {

    carrito.textContent = "";

    contenidoCarrito.forEach((b) => {
        let clone = template.content.cloneNode(true);
            clone.querySelector(".text-white .lead").textContent = b.titulo;
            clone.querySelector(".rounded-pill").textContent = b.cantidad;
            clone.querySelector('div .lead span').textContent = b.precio * b.cantidad;
            clone.querySelector('div .btn-danger').dataset.id = b.id;
            clone.querySelector('div .btn-success').dataset.id = b.id;

            fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);
}

