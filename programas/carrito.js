const carritoProductos = JSON.parse(localStorage.getItem("miCarrito")) || [];

function crearInfoCarrito() {
  const carritoElegido = document.getElementById("carritoElegido");
  const totalCompra = document.querySelector(".total h2");

  if (carritoElegido && totalCompra) {
    carritoElegido.innerHTML = "";

    let total = 0;

    carritoProductos.forEach((producto, index) => {
      const cardHtml = `
                <div class="card muestraElegida estiloTarjetaCarrito" style="width: 9.5rem;">
                    <img src="${producto.imagen}" alt="...">
                    <div class="card-body  zideMustra cuerpoTarjeta">
                        <h5 class="card-title nombreTarjeta">${producto.nombre}</h5>
                        <p class="card-text precioTarjeta">$${producto.precio}</p>
                        <button class="btn btn-primary bontonCarritoQuitar" onclick="eliminarProducto(${index})">Quitar</button>
                    </div>
                </div>
            `;
      carritoElegido.innerHTML += cardHtml;

      total += producto.precio;
    });

    totalCompra.textContent = `Total: $${total}`;
  }
}

function eliminarProducto(index) {
  const productoEliminado = carritoProductos[index];
  const nombreProducto = productoEliminado.nombre;

  carritoProductos.splice(index, 1);
  localStorage.setItem("miCarrito", JSON.stringify(carritoProductos)); 

  crearInfoCarrito(); 

  Swal.fire({
    position: "center",
    color: "black",
    icon: "warning",
    iconColor: "red",
    title: `${nombreProducto} Eliminado del carrito`,
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      popup: "infoCarritoEliminado", // Clase para el mensaje
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  crearInfoCarrito();
});