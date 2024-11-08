CREATE DATABASE shoe_shop;

USE shoe_shop;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image VARCHAR(255)
);

INSERT INTO products (name, price, description, image)
VALUES
    ('Sporty Sneakers', 59.99, 'Comfortable and stylish sneakers for everyday wear.', 'shoe1.jpg'),
    ('Classic Leather Shoes', 89.99, 'Elegant leather shoes for formal occasions.', 'shoe2.jpg'),
    ('Running Shoes', 49.99, 'Lightweight and durable running shoes.', 'shoe3.jpg'),
    ('Stylish Boots', 99.99, 'Trendy boots perfect for casual outings.', 'shoe4.jpg');








    DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=shoe_shop
DB_PORT=3306
PORT=3000



// db.js
require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

module.exports = pool.promise(); // Promisify for async/await







// app.js
require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON data

// Routes
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






// routes/products.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Route to fetch all products
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error });
    }
});

module.exports = router;






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop - Shoe Shop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Shoe Shop</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <main>
        <h2>Our Collection</h2>
        <div id="product-grid" class="product-grid"></div>
    </main>

    <script>
        // Fetch products from API
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => {
                const productGrid = document.getElementById('product-grid');
                data.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h2>${product.name}</h2>
                        <p>$${product.price}</p>
                        <p>${product.description}</p>
                        <button>Add to Cart</button>
                    `;
                    productGrid.appendChild(productCard);
                });
            })
            .catch(error => console.error('Error fetching products:', error));
    </script>

</body>
</html>

