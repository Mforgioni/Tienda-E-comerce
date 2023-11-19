const carritoProductos = JSON.parse(localStorage.getItem("miCarrito")) || [];

function crearInfoCarrito() {
  const carritoElegido = document.getElementById("carritoElegido");
  const totalElement = document.querySelector(".total h2");

  if (carritoElegido && totalElement) {
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

    totalElement.textContent = `Total: $${total}`;
  }
}

function eliminarProducto(index) {
  carritoProductos.splice(index, 1); // Elimina el producto en la posición 'index'
  localStorage.setItem("miCarrito", JSON.stringify(carritoProductos)); // Actualiza el localStorage
  crearInfoCarrito(); // Vuelve a crear la información del carrito en la interfaz
}

document.addEventListener("DOMContentLoaded", () => {
  crearInfoCarrito();
});
