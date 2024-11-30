// Define DOM Elements
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


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

        // Hide spinner in 1 second
        setTimeout(() => {
            hideSpinner();
        }, 1000);
        
    }  

}; 

const showSpinner = () => {

    // Select #spinner and display
    document.getElementById('spinner').style.display = 'block';

};

const hideSpinner = () => {

    // Select #spinner and hide
    document.getElementById('spinner').style.display = 'none';

};

// Hide spinner by default
hideSpinner();

// Listen for submit event in form element
form.addEventListener('submit', onGenerateSubmit);
