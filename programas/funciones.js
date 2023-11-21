const carritoProductos = JSON.parse(localStorage.getItem("miCarrito")) || [];
const contenedor = document.querySelector("div.contenedor#tienda-contenedor");

function crearCardError() {
    return `<div class="card-error";">
                <img src="../imagenes/errorCarga.jpeg" alt="Imagen Error">
                <div class="card-body">
                    <h5 class="card-title">ERROR DE CARGA</h5>
                </div>
            </div>`;
}

function crearCardHtml({ nombre, imagen, precio, tipo, id, alto, diametro, detalle }) {
    return `<div class="card tarjetaTienda" style="width: 20rem;">
                <img src="${imagen}" alt="...">
                <div class="card-body cuerpoTarjetaTienda">
                    <h5 class="card-title nombreTarjetaTienda">${nombre}</h5>
                    <p class="card-text detalleTienda">${detalle}</p>
                    <p class="card-text medidasTienda">Altura: ${alto} cm. // Diametro: ${diametro} cm.</p>
                    <p class="card-text preciosTienda">$${precio}</p>
                    <button data-id="${id}" class="btn btn-primary botonTarjetaTienda">COMPRAR</button>
                </div>
            </div>`;
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
            const id = parseInt(e.target.dataset.id);
            const pantallaElegida = pantallas.find((pantalla) => pantalla.id === id);
            carritoProductos.push(pantallaElegida);
            localStorage.setItem("miCarrito", JSON.stringify(carritoProductos));
            actualizarCantidadCarrito(); 
        });
    });
}

function actualizarCantidadCarrito() {
    const cantidadCarrito = document.querySelector(".cuentaCarrito");
    cantidadCarrito.textContent = `=  ${carritoProductos.length} Productos`;
}

actualizarCantidadCarrito(); 
cargarProductos();
