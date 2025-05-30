const header = document.querySelector("header")
const footer = document.querySelector("footer")

header.innerHTML = `
        <div>
            <div class="logo">
                <img src="img/logo.png" alt="Logo" />
            </div>
            <h1>Eshop</h1>
        </div>
        
        <input type="checkbox" id="menu" />
        <label for="menu" class="menu-icon">
            <span><img src="img/menu.png"></span>
        </label>
        <nav class="menu">
            <ul>
            <li><a href="login.html">Login</a></li>
            <li><button onclick="toggleCart()">Carrito</button></li>
            </ul>
        </nav>

        <div class="opciones">
            <a href="login.html"class="opcioncitas"><i class="fa-solid fa-arrow-right-to-bracket fa-xl"></i></i> Login</a>
            <button class="opcioncitas" onclick="toggleCart()"><i class="fa-solid fa-cart-shopping fa-xl"></i> Carrito</button>
        </div>

        <div id="cart" class="cart-sidebar">
            <div class="cart-header">
            <h2>Tu Carrito</h2>
            <button class="close-btn" onclick="toggleCart()">×</button>
            </div>
            <div class="cart-items">
            <div class="cart-item">
                <p>Producto 1</p>
                <p>$10.00</p>
            </div>
            <div class="cart-item">
                <p>Producto 2</p>
                <p>$15.00</p>
            </div>
            </div>
        </div>
            `;  

footer.innerHTML = `
        <p>Copyright © 2025 Eshop. All rights reserved.</p>
        `
