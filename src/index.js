document.addEventListener('DOMContentLoaded', function () {
    
function onScanSuccess(decodedText, decodedResult) {
    // succesfull scan handling
   document.querySelector('#result').innerHTML= `Decoded Text = ${decodedText}`;
    console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure (error) {
    // failed scan handling
    document.querySelector('#result').innerHTML = `error: ${error}`;
    console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {fps: 10, qrbox: {width:250, height: 250}},
    false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);});