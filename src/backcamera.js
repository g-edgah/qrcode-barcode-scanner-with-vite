const html5Qrcode = new Html5Qrcode('reader', /*true*/);
/*document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#stopScan').style.display = 'none';
    document.querySelector('#reader').style.display = 'none';
}); */

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    // succesfull scan handling
    document.querySelector('#result').innerHTML= `Decoded Text = ${decodedText}`;
    console.log(`Code matched = ${decodedText}`, decodedResult);
    /*document.querySelector('#reader').style.display = 'none';
    document.querySelector('#startScan').style.display = 'block';
    document.querySelector('#stopScan').style.display = 'none';*/
};

const config = {
    fps: 10,
    qrbox:{
        width: 250,
        height:250
    },

};


document.querySelector('#startScan').addEventListener('click', () => {
    //prefer back camera
    document.querySelector('#reader').style.display = 'block';
    document.querySelector('#stopScan').style.display = 'block';
    document.querySelector('#startScan').style.display = 'none';

    html5Qrcode.start({facingMode: 'environment'}, config, qrCodeSuccessCallback);
});


document.querySelector('#stopScan').addEventListener('click', () => {
    document.querySelector('#reader').style.display = 'none';
    document.querySelector('#startScan').style.display = 'block';
    document.querySelector('#stopScan').style.display = 'none';
//prefer back camera
html5Qrcode.stop({facingMode: 'environment'}, config, qrCodeSuccessCallback);
});