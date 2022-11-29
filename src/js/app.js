import Alpine from 'alpinejs'
window.Alphine = Alpine

Alpine.start()

let ups = {
    updateQuantity(line, quantity) {
        fetch('/cart/change.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity: quantity, line: line })
        }).then(response => response.json())
            .then(data => {
                // fire javascript event on window
                window.dispatchEvent(new Event('cart-updated'));

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

window.ups = ups