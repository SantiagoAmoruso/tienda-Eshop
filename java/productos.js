document.addEventListener("DOMContentLoaded", () => {
    const endpoint = '../data/datos.json'

    const getProductos = async () => {
        try {
            let res = await fetch(endpoint)
            let datos = await res.json()
            mostrarProductos(datos)
        } catch (error){
            console.log(error)
        }
    }
    
    getProductos()

    const mostrarProductos = (datos) => {
        const productos = document.querySelector('.productos')
        productos.innerHTML = ""

        datos.forEach(item => {
            const card = document.createElement('div')
            card.className = 'card'

            // Icono depende si está en favoritos
            const iconoClase = esFavorito(item.id) ? "fa-solid" : "fa-regular"

            card.innerHTML = `
                <img src="${item.img}" class="card-img-top" alt="${item.title}" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${item.price}</small></p>
                    <div class="actions">
                        <button class="btn-carrito">Agregar a carrito</button>
                        <button class="btn-fav">
                            <i class="${iconoClase} fa-star fa-xl" style="color: #161616;"></i>
                        </button>
                    </div>
                </div>
            `
            productos.appendChild(card)

            // --- botón carrito (ejemplo) ---
            card.querySelector('.btn-carrito').addEventListener('click', () => {
                agregarAlCarrito(item, 1) // función de carrito
            })

            // --- botón favoritos ---
            const btnFav = card.querySelector('.btn-fav')
            btnFav.addEventListener('click', () => {
                if (esFavorito(item.id)) {
                    eliminarDeFavoritos(item.id)
                } else {
                    agregarAFavoritos(item)
                }
                // refrescar icono
                const icon = btnFav.querySelector('i')
                icon.classList.toggle('fa-solid')
                icon.classList.toggle('fa-regular')
            })
        })
    }
})
