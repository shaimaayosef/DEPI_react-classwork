let products = [
    { id: 1, brand: "TrendWear", title: "Casual Shirt", description: "Floral print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/floral_shirt.jpg" },
    { id: 2, brand: "TrendWear", title: "Casual Shirt", description: "Lemon Print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/lemon_shirt.jpg" },
    { id: 3, brand: "TrendWear", title: "Casual Shirt", description: "Stripes Print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/stripes_shirt.jpg" },
    { id: 4, brand: "EliteFashion", title: "Formal Pants", description: "Elegant formal pants for office and events.", price: "450", image: "./images/formal_pants.jpg" },
    { id: 5, brand: "StyleHub", title: "Graphic Tee", description: "Trendy graphic tee with unique designs.", price: "150", image: "./images/tshirt.jpg" },
    { id: 6, brand: "UrbanEdge", title: "Denim Jacket", description: "Stylish denim jacket for a cool look.", price: "600", image: "./images/denim_jacket.jpg" },
    { id: 7, brand: "Fashionista", title: "Voyou Dress", description: "Crepe and satin dress.", price: "350", image: "./images/dress.jpg" },
    { id: 8, brand: "CozyWear", title: "Hoodie", description: "Soft and warm hoodie for chilly days.", price: "400", image: "./images/hoodie.jpg" },
    { id: 9, brand: "FitGear", title: "Running Shoes", description: "High-performance running shoes for all terrains.", price: "700", image: "./images/shoes.jpg" },
    { id: 10, brand: "ChicStyle", title: "Leather Belt", description: "Sleek leather belt to complement your outfits.", price: "200", image: "./images/belt.jpg" },
    { id: 11, brand: "WinterWarm", title: "Wool Scarf", description: "Cozy wool scarf to keep you warm in winter.", price: "300", image: "./images/scarf.jpg" },
    { id: 12, brand: "Glamour", title: "Evening Gown", description: "Elegant evening gown for special occasions.", price: "1500", image: "./images/gown.jpg" },
];

let users = [
    { email: "omnia@gmail.com", password: "12345678", admin: true },
    { email: "user@gmail.com", password: "11223344", admin: false }
];

let cart = [];

let currentUser;

let loggedIn = false;

function dummyAdminLogin() {
    currentUser = { email: "omnia@gmail.com", password: "12345678", admin: true },
    toggleLoginLogout();
    renderShop();
}

function dummyUserLogin() {
    currentUser = { email: "user@gmail.com", password: "11223344", admin: false };
    toggleLoginLogout();
    renderShop();
}

document.addEventListener('DOMContentLoaded', (event) => {
    // dummyAdminLogin();
    // dummyUserLogin();
    renderShop();
});

function renderCart() {
    console.log(cart);

    const root = document.getElementById("root");


    root.innerHTML = ""
    if (cart.length == 0) {
        showMessage(
            {
                heading: "Your Cart is Empty",
                paragraph: "It looks like you don’t have any items in your cart. Start adding items to begin shopping!"
            },
            "root"
        );
        return;
    }

    const proCard = document.createElement('div');
    proCard.id = 'pro-card';
    root.appendChild(proCard);

    for (let i = 0; i < cart.length; i++) {
        let item = products.find(item => item.id === cart[i]);
        proCard.innerHTML +=
            `<div class="card" id="">
                <img src="${item.image}" alt="">
                <span>${item.brand}</span>
                <h1>${item.title}</h1>
                <p>${item.description}</p>
                <div class="price">
                    <h4>${item.price} <span>EGP</span></h4>
                </div>
            </div>`
    }
}

function addToCart(id) {
    console.log("ID of Item added:", id);
    cart.push(id);
    alert("Added item to cart successfully")
}
function renderAddItem() {
    const root = document.getElementById("root")
    root.innerHTML =
        `
    <div class="login-signin">
        <form class="form" onsubmit = "addItem(event)">
            <p class="form-title">Add items to the shop</p>
            <div class="input-container">
                <input id="item-title" placeholder="Enter item title" required>
            </div>

            <div class="input-container">
                <input id="item-brand" placeholder="Enter item brand" required>
            </div>

            <div class="input-container">
                <input id="item-description" placeholder="Enter item description" required>
            </div>

            <div class="input-container">
                <input id="item-price" type="number" placeholder="Enter item price" required>
            </div>

            <input type="submit" class="submit" value="add item">
        </form>
    </div>
    `
}

function addItem(event) {
    event.preventDefault();
    const itemTitle = document.getElementById("item-title").value
    const itemBrand = document.getElementById("item-brand").value
    const itemDescription = document.getElementById("item-description").value
    const itemPrice = document.getElementById("item-price").value

    if (!(itemTitle && itemBrand && itemDescription && itemPrice)) {
        return;
    }

    item = { id: (products.length) + 1, brand: itemBrand, title: itemTitle, description: itemDescription, price: itemPrice, image: "./images/noimage.png" }
    products.push(item);
    alert("Item added successfully!")
}

function renderLogin() {
    const root = document.getElementById("root")
    root.innerHTML =
        `
        <div class="login-signin">
            <form class="form" onsubmit="login(event)">
            <p class="form-title">Sign in to your account</p>
                <div class="input-container">
                <input id = "user-email" type="email" placeholder="Enter email" required>
                <span></span>
            </div>
            <div class="input-container">
                <input id = "user-password" type="password" placeholder="Enter password" minlength="8" required>
                <span></span>
            </div>

                <input type="submit" class="submit" value="Sign in">

            <p class="signup-link">
                No account?
                <a href="#" onclick="renderSignup()">Sign up</a>
            </p>
            </form>
        </div>
        `
}

function renderSignup() {
    const root = document.getElementById("root")
    root.innerHTML =
        `
        <div class="login-signin">
            <form class="form" onsubmit = "addUser(event)">
                <p class="form-title">Create an account</p>
                <div class="input-container">
                    <input id = "user-email" type="email" placeholder="Enter email" required>
                    <span>
                    </span>
                </div>

                <div class="input-container">
                    <input id = "user-password" type="password" placeholder="Enter password" minlength="8" required>
                    <span></span>
                </div>

                <input type="submit" class="submit" value= "Sign up">
            </form>
        </div>
        `
}

function login(event) {
    event.preventDefault();
    userEmail = document.getElementById("user-email").value;
    userPassword = document.getElementById("user-password").value;
    if (!(userEmail && userPassword && userPassword > 7)) {
        return
    }

    const user = users.find(user => user.email === userEmail);

    if (user) {
        console.log("user email exists")
        if (user.password === userPassword) {
            console.log("correct password")
            currentUser = user;
            console.log("Current User:", currentUser);
            toggleLoginLogout();
            renderShop();
        } else {
            alert("wrong credentials")
            console.log("wrong password")
        }
    } else {
        alert("user doesn't exist")
        console.log("user doesn't exist")
    }
}

function addUser(event) {
    event.preventDefault();
    userEmail = document.getElementById("user-email").value;
    userPassword = document.getElementById("user-password").value;
    if (!(userEmail && userPassword && userPassword > 7)) {
        return
    }

    if (users.find(user => user.email === userEmail)) {
        alert("user already exists")
        console.log("user already exists")
    } else {
        const user = { email: userEmail, password: userPassword, admin: false }
        users.push(user);
        console.log("Created new user successfuly");
        alert("User created successfully")
        console.log(users);
        renderLogin()
    }
}

function logout() {
    toggleLoginLogout()
    renderShop();
}

function toggleLoginLogout() {
    const navbarLinks = document.getElementById("navbar-links");

    if (loggedIn) {
        loggedIn = false;
        currentUser = {};
        cart = []

        const navbarLogout = document.getElementById("navbar-logout");
        if (navbarLogout) {
            navbarLinks.removeChild(navbarLogout);
        }

        const navbarCart = document.getElementById("navbar-cart");
        if (navbarCart) {
            navbarLinks.removeChild(navbarCart);
        }

        const navbarAddItem = document.getElementById("navbar-addItem");
        if (navbarAddItem) {
            navbarLinks.removeChild(navbarAddItem);
        }

        navbarLinks.innerHTML +=
            `<a id="navbar-login" href="#" onclick="renderLogin()">Login</a>`;

    } else {
        loggedIn = true;
        const navbarLogin = document.getElementById("navbar-login");
        if (navbarLogin) {
            navbarLinks.removeChild(navbarLogin);
        }

        navbarLinks.innerHTML +=
        `<a id="navbar-cart" href="#" onclick="renderCart()">Cart</a>`;

        if (currentUser.admin) {
            console.log("is admin")
            navbarLinks.innerHTML +=
                `<a id="navbar-addItem" href="#" onclick="renderAddItem()">Add Item</a>`;
        }

        navbarLinks.innerHTML +=
            `<a id="navbar-logout" href="#" onclick="logout()">Logout</a>`;

    }
}



function renderShop() {
    const root = document.getElementById("root");

    root.innerHTML = ""
    if (!loggedIn) {
        showMessage(
            {
                heading: "You're not logged in",
                paragraph: "Please log in first to view the shop items."
            },
            "root"
        );
        return;
    }

    root.innerHTML = `
        <h1 id="shop-header">Shop</h1>
        <div class="search">
            <div>
                <label id="search-label">Search by item name/description:</label>
                <input id="search-input" placeholder="item name or description" type="text">
            </div>
            <div>
                <label id="price-search-label">Max price:</label>
                <input id="price-search-input" placeholder="price" type="number">
            </div>
            <div>
                <button id="search-button" onclick="searchItem()">Search</button>
            </div>
        </div>


        <div id="pro-card">
        </div>
    `
    renderAllItems()
}

function renderAllItems() {
    const proCard = document.getElementById("pro-card");

    for (let i = 0; i < products.length; i++) {
        proCard.innerHTML +=
            `<div class="card" id="">
                <img src="${products[i].image}" alt="">
                <span>${products[i].brand}</span>
                <h1>${products[i].title}</h1>
                <p>${products[i].description}</p>
                <div class="price">
                    <h4>${products[i].price} <span>EGP</span></h4>
                    <button onclick="addToCart(${products[i].id})">add to cart</button>
                </div>
            </div>`
    }
}

// 
// 

function searchItem() {
    const proCard = document.getElementById("pro-card")
    const query = document.getElementById('search-input').value;
    let max_price = Number(document.getElementById('price-search-input').value);
    if (!max_price) {
        max_price = 10000;
    };
    proCard.innerHTML = ''

    if (query)
        console.log(query);

    for (let i = 0; i < products.length; i++) {
        if ((products[i].title.includes(query) || products[i].description.includes(query)) && products[i].price <= max_price) {
            proCard.innerHTML +=
                `<div class="card">
                    <img src="${products[i].image}" alt="">
                    <span>${products[i].brand}</span>
                    <h1>${products[i].title}</h1>
                    <p>${products[i].description}</p>
                    <div class="price">
                        <h4>${products[i].price} <span>EGP</span></h4>
                        <button>add to cart</button>
                    </div>
                </div>`
        }
    }

    if (proCard.innerHTML == '') {
        showMessage(
            {
                heading: "No Results Found",
                paragraph: "Sorry, no items match your search criteria."
            },
            "pro-card"
        );
    }
}

// function searchByPrice() {
//     const max_price = Number(document.getElementById('price-search-input').value);
//     const proCard = document.getElementById("pro-card")

//     proCard.innerHTML = ''
//     // max_price = parseInt(max_price)
//     // console.log(max_price);
//     // console.log(typeof (max_price));

//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price <= max_price) {
//             proCard.innerHTML +=
//                 `<div class="card">
//                     <img src="${products[i].image}" alt="">
//                     <span>${products[i].brand}</span>
//                     <h1>${products[i].title}</h1>
//                     <p>${products[i].description}</p>
//                     <div class="price">
//                         <h4>${products[i].price} <span>EGP</span></h4>
//                         <button>add to cart</button>
//                     </div>
//                 </div>`
//         }
//     }

//     if (proCard.innerHTML == '') {
//         showMessage(
//             {
//                 heading: "No Items Found",
//                 paragraph: `Sorry, there are no items under ${max_price} EGP. Please try a higher price range or adjust your search criteria.`
//             },
//             "pro-card"
//         );
//     }
// }



function showMessage(message, parentContainerDiv) {
    const parentContainer = document.getElementById(parentContainerDiv);
    const messageContainer = document.createElement('div');
    const messageBox = document.createElement('div');
    const messageHeading = document.createElement('h1');
    const messageParagraph = document.createElement('p');

    messageHeading.textContent = message.heading;
    messageParagraph.textContent = message.paragraph;

    messageContainer.className = 'message-container';
    messageBox.className = 'message-box';

    messageBox.appendChild(messageHeading);
    messageBox.appendChild(messageParagraph);
    messageContainer.appendChild(messageBox);
    parentContainer.appendChild(messageContainer);
}

// <div class="input-container">
//     <input id="item-image" type="file" accept="image/*">
// </div>