// Define DOM Elements
const form = document.getElementById('generate-form');
const qrOutput = document.getElementById('qrcode');


const onGenerateSubmit = (e) => {

    e.preventDefault() // Prevents page reload on form submit

    clearOutput(); // Clears previous output

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

            // Run in 50 ms
            setTimeout(() => {
                // Get QR Code Image URL
                const saveUrl = qrOutput.querySelector('img').src;
                // Create download button with link
                createSaveBtn(saveUrl); }, 50);
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


const clearOutput = () => {

    // Clear previous QR code
    qrOutput.innerHTML = '';

    // Clear previous download button
    const dlink = document.getElementById('dlink');
    if(dlink) dlink.remove();
}

const createSaveBtn = (saveUrl) => {
    // Create download link
    const dlink = document.createElement('a');
    dlink.id = 'dlink'; // Add an ID
    dlink.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'; /* Tailwind CSS classes - 
        bg-red-500      : Sets the background color to a specific shade of red.
        hover:bg-red-700: Changes the background color to a darker shade of 
                          red when the user hovers over the element.
        text-white      : Sets the text color to white.
        font-bold       : Makes the text bold.
        py-2            : Adds vertical padding of 0.5rem 
                          (based on Tailwind's spacing scale).
        rounded         : Adds rounded corners to the element.
        w-1/3           : Sets the width to one-third of the parent container.
        m-auto          : Centers the element horizontally by applying equal margins.
        my-5            : Adds vertical margins of 1.25rem to 
                          separate the element from adjacent content.  */

    dlink.href = saveUrl; // Add QR code image URL
    dlink.download = 'qrcode'; /* Specifying the target resource -
        'qrcode': Sets the default filename to qrcode. 
         When the user clicks the download link, the file will be saved as 'qrcode' (with the appropriate file extension, such as .png or .jpg, based on the resource being downloaded).
        */
    dlink.innerHTML = 'Download QR Code' // Display text
    document.getElementById('output').appendChild(dlink); // Append to container

};


// Hide spinner by default
hideSpinner();

// Listen for submit event in form element
form.addEventListener('submit', onGenerateSubmit);
