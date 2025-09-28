const html5Qrcode = new Html5Qrcode('reader', true);
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    // succesfull scan handling
    document.querySelector('#result').innerHTML= `Decoded Text = ${decodedText}`;
    console.log(`Code matched = ${decodedText}`, decodedResult);
};

const config = {
    fps: 10,
    qrbox:{
        width: 250,
        height:250
    },

};

//prefer back camera
html5Qrcode.start({facingMode: 'environment'}, config, qrCodeSuccessCallback);