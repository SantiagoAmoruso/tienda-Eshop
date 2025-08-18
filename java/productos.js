document.addEventListener("DOMContentLoaded", () => {

    const endpoint = '../data/datos.json'

    const getProductos = async () => {
        try {
            res = await fetch(endpoint)
            datos = await res.json()
            mostrarProduto(datos)
        } catch (error){
            console.log(error)
        }
    }
    
    getProductos()

    const mostrarProduto = (datos) => {
        const productos = document.querySelector('.productos')
        datos.forEach(item => {
            const card = document.createElement('div')

            card.className = 'card'
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
                        <button class="btn-fav" onclick="this.classList.toggle('favorito')">
                            <i class="fa-regular fa-star fa-xl" style="color: #161616;"></i>
                        </button>
                    </div>
                </div>
            `
            productos.appendChild(card)

            const btnCarrito = card.querySelector('.btn-carrito')

            const btnFav = card.querySelector('.btn-fav')
            btnFav.addEventListener('click', () => {
                const icon = btnFav.querySelector('i')
                if (icon.classList.contains('fa-regular')) {
                    icon.classList.remove('fa-regular')
                    icon.classList.add('fa-solid')
                } else {
                    icon.classList.remove('fa-solid')
                    icon.classList.add('fa-regular')
                }
            })

        })
    }
})



