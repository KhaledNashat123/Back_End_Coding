
const products = [
    { id: 1, quantity: 3 },
    { id: 4, quantity: 4 },
    { id: 3, quantity: 5 }
];

async function fetchProductData(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    return product;
}
async function calculateTotalPrice() {
    let totalPrice = 0;
    for (const product of products) {
        const productData = await fetchProductData(product.id);
        const productTotal = productData.price * product.quantity;
        totalPrice += productTotal;
        console.log(`Product ID: ${product.id}, Price: $${productData.price}, Quantity: ${product.quantity}, Subtotal: $${productTotal.toFixed(2)}`);
    }
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);
}
calculateTotalPrice();