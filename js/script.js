// Define DOM Elements
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onGenerateSubmit = (e) => {

    e.preventDefault() // Prevents page reload on form submit

    // Get input URL
    const url = document.getElementById('url').value; 

    // Get selected QR code size
    const size = document.getElementById('size').value; 

    console.log(url, size);

}; 



// Listen for submit event in form element
form.addEventListener('submit', onGenerateSubmit);
