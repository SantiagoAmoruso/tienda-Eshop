document.addEventListener("DOMContentLoaded", () => {

    const getProductos = async () => {
        try {
            res = await fetch('../data/datos.json')
            datos = await res.json()
            mostrarProduto(datos)
        } catch (error){
            console.log(error)
        }
    }

    getProductos()

    const mostrarProduto = (datos) => {
        
    }

})