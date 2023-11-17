const carritoProductos = JSON.parse(localStorage.getItem("miCarrito")) || [];

function crearInfoCarrito() {
  const carritoElegido = document.getElementById("carritoElegido");
  const totalElement = document.querySelector(".total h2");

  if (carritoElegido && totalElement) {
    carritoElegido.innerHTML = "";

    let total = 0;

    carritoProductos.forEach((producto) => {
      const cardHtml = `
                <div class="card muestraElegida" style="width: 10rem;">
                    <img src="${producto.imagen}" alt="...">
                    <div class="card-body  zideMustra">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                    </div>
                </div>
            `;
      carritoElegido.innerHTML += cardHtml;

      total += producto.precio;
    });

    totalElement.textContent = `Total: $${total}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crearInfoCarrito();
});
