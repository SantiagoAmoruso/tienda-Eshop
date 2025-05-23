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
            <li><a href="#">Login</a></li>
            <li><a href="#">Carrito</a></li>
            </ul>
        </nav>

        <div class="opciones">
            <a href="#"><i class="fa-solid fa-arrow-right-to-bracket fa-xl"></i></i> Login</a>
            <a href="#"><i class="fa-solid fa-cart-shopping fa-xl"></i> Carrito</a>
        </div>
`;

footer.innerHTML = `
        <p>Copyright © 2025 Eshop. All rights reserved.</p>
        `