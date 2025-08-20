document.addEventListener("DOMContentLoaded", () => {

    const contenedorItems = document.querySelector("section.productos")

    const mostrarFavoritos = () => {
        recuperarFavoritos()
        // let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        //descargar el contenedor/limpiar
        contenedorItems.innerHTML = ""

        favoritos.forEach(item => {
            title = item.title.toUpperCase()
            description = item.description.toLowerCase()
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img
                    src="${item.img}"
                    class="card-img-top"
                    alt="${item.title}"
                />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${item.price}</small></p>
                    <div class="actions">
                        <button class="btn-carrito">Agregar a carrito</button>
                        <button class="favorito" id="favorito" class="btn-fav" onclick="this.classList.toggle('favorito')">
                            <i class="fa-regular fa-star fa-xl" style="color: #161616;"></i>
                        </button>
                    </div>
                </div>
            `

            //Agrego el producto al contenedor
            contenedorItems.appendChild(card);
         
            card.querySelector("#favorito").onclick = () => {
                 eliminarDeFavoritos(item.id)
                 mostrarFavoritos()
            }

            //agregar al carrito
            card.querySelector("#addCarrito").onclick = () => {
                const cant = parseInt(card.querySelector('[name="cant"]').value)
                agregarAlCarrito(item, cant)              
            }
           

        });
    }
    mostrarFavoritos()
})