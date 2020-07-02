const form = document.querySelector('form');
const API_URL = "http://localhost:5000/input";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const productName = formData.get('product_name');
    const productExplaination = formData.get('product_explanation');
    const productPrice = formData.get('product_price');
    const productTotal = formData.get('product_total');

    const insert = {
        productName,
        productExplaination,
        productPrice,
        productTotal
    };
    console.log(insert);

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(insert),
        headers: {
            'content-type': 'application/json'
        }
    });
});