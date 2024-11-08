document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".product-card button");
    const cartCountElement = document.getElementById("cart-count");

    // Load the cart from localStorage or initialize it
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the cart count display
    updateCartCount();

    // Event listener for each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productCard = button.parentElement;
            const productName = productCard.querySelector("h2").textContent;
            const productPrice = productCard.querySelector("p").textContent;
            
            addToCart(productName, productPrice);
            updateCartCount();
        });
    });

    // Function to add a product to the cart
    function addToCart(name, price) {
        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity if item already in cart
        } else {
            // Add new item to cart
            cart.push({ name: name, price: price, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} has been added to your cart!`);
    }

    // Function to update the cart count in the UI
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
});
