const carritoProductos = JSON.parse(localStorage.getItem("miCarrito")) || [];
const botonComprar = document.getElementById("comprarB");

function crearInfoCarrito() {
  const carritoElegido = document.getElementById("carritoElegido");
  const totalCompra = document.querySelector(".total h2");
  const totalCredito = document.getElementById("totalCred");

  if (carritoElegido && totalCompra) {
    carritoElegido.innerHTML = "";

    let total = 0;
    let credito = 0.10;


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

    const totalConCredito = total * (1 + credito);
    const totalConCreditoRedondeado = totalConCredito.toFixed(2);

    totalCredito.textContent = `Total en 3 a 6 ctas: $${totalConCreditoRedondeado}`;
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
      popup: "infoCarritoEliminado", 
    },
  });
}

function graciasCompra() {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  crearInfoCarrito();
});

botonComprar.addEventListener("click", () => {
  localStorage.removeItem("miCarrito");
  carritoProductos.length = 0;
  crearInfoCarrito();

  Swal.fire({
    title: "GRACIAS POR SU COMPRA",
    imageUrl: "../imagenes/logo-decopantalle.jpg",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonColor: "green",
    customClass: {
      popup: "infoGracias", 
    },
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../paginas/tienda.html";
    }
  });
});

