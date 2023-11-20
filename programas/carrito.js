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
  carritoProductos.splice(index, 1);
  localStorage.setItem("miCarrito", JSON.stringify(carritoProductos)); 
  crearInfoCarrito(); 
}

document.addEventListener("DOMContentLoaded", () => {
  crearInfoCarrito();
});
