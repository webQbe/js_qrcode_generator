// Define DOM Elements
const form = document.getElementById('generate-form');
const qrOutput = document.getElementById('qrcode');


const onGenerateSubmit = (e) => {

    e.preventDefault() // Prevents page reload on form submit

    // Get input URL
    const url = document.getElementById('url').value; 

    // Get selected QR code size
    const size = document.getElementById('size').value; 

    // Check for blank input
    if(url === ''){

        alert('Please enter a URL');

    } else {

        showSpinner(); // Show loading spinner

        // Run in 1 second
        setTimeout(() => {
            hideSpinner(); // Hide Spinner 
            generateQRCode(url, size); // Generate QR Code
        }, 1000);
    }  
}; 

// Generate QR Code with QRCode.js Library
const generateQRCode = (url, size) => {
    // Call QRCode constructor, with #qrcode element where the QR code will be rendered. 
    const qrcode = new QRCode( 'qrcode', {
                    text: url, // URL to encode in the QR code
                    width: size, // The dimensions of the QR code
                    height: size,
                });
};

const showSpinner = () => {

    // Select #spinner and display
    document.getElementById('spinner').style.display = 'block';

};

const hideSpinner = () => {

    // Select #spinner and hide
    document.getElementById('spinner').style.display = 'none';

};


const clearOuput = () => {
    qrOutput.innerHTML = '';
}

// Hide spinner by default
hideSpinner();

// Listen for submit event in form element
form.addEventListener('submit', onGenerateSubmit);
