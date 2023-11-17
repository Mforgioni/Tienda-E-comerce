

const carritoProductos = JSON.parse(localStorage.getItem("miCarrito")) || [];
const contenedor = document.querySelector("div.contenedor#tienda-contenedor");
const carritoBoton = document.querySelector("nav a:last-child i.fa-cart-shopping")


function crearCardError() {
    return `<div class="card-error";">
                <img src="#" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Error de Carga</h5>
                    <p class="card-text">...</p>
                </div>
            </div>`;
}



function crearCardHtml({ nombre, imagen, precio, tipo, id }) {
    return `<div class="card" style="width: 18rem;">
                <img src="${imagen}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${precio}</p>
                    <button id="${id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>`;
}

function crearInfoCarrito() {
    return ``;
}

function cargarProductos() {
    contenedor.innerHTML = "";
    if (pantallas.length > 0) {
        pantallas.forEach((pantalla) => contenedor.innerHTML += crearCardHtml(pantalla));
        activarBotones();
    } else {
        contenedor.innerHTML = crearCardError();
    }
}

function activarBotones() {
    const botonesAgregar = document.querySelectorAll(".btn.btn-primary");
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const id = parseInt(e.target.id);
            const pantallaElegida = pantallas.find((pantalla) => pantalla.id === id);
            carritoProductos.push(pantallaElegida);
            localStorage.setItem("miCarrito", JSON.stringify(carritoProductos));
        });
    });
}

cargarProductos();


