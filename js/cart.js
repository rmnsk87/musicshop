// Existing code
let clicks = parseInt(localStorage.getItem('cartCount') || '0');

function increaseCartNumber() {
    clicks += 1;
    localStorage.setItem('cartCount', clicks);
    document.getElementById("clicks").innerHTML = ' ' + clicks;
    document.getElementById("show-cart-qta").innerHTML = clicks;
    document.getElementById("show-cart-list").innerHTML = '<div>In Your cart: <b class="goldetex">' + clicks + '</b> guitar' + (clicks > 1 ? 's' : '') + '</div>';
    document.querySelector('.cart').style.display = 'block';
}

// New function to clear the cart
function clearCartFunction() {
    clicks = 0; // Reset the clicks counter
    localStorage.setItem('cartCount', clicks); // Update localStorage
    document.getElementById("clicks").innerHTML = ' ' + clicks; // Update header cart count
    document.getElementById("show-cart-qta").innerHTML = clicks; // Update cart quantity
    document.getElementById("show-cart-list").innerHTML = 'Your cart is empty'; // Reset cart display
    document.querySelector('.cart').style.display = 'none'; // Optionally hide the cart
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart display
    document.getElementById("clicks").innerHTML = ' ' + clicks;
    document.getElementById("show-cart-qta").innerHTML = clicks;
    document.getElementById("show-cart-list").innerHTML = clicks > 0 ?
        '<div>In Your cart: <b class="goldetex">' + clicks + '</b> guitar' + (clicks > 1 ? 's' : '') + '</div>' :
        'Your cart is empty';

    // Add event listeners to all "Add to Cart" buttons
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', increaseCartNumber);
    });

    // Close cart when clicking the close button
    // document.querySelector('.close-cart').addEventListener('click', () => {
    //     document.querySelector('.cart').style.display = 'none';
    // });

    // Add event listener for clear cart button
    const clearCart = document.querySelector('.clear-cart');
    if (clearCart) {
        clearCart.addEventListener('click', clearCartFunction);
    } else {
        console.warn('Clear cart button (.clear-cart) not found in the HTML');
    }
});
