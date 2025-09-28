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
    stopscan(html5Qrcode);
    
};

const config = {
    fps: 10,
    qrbox:{
        width: 250,
        height:250
    },

};

//html5Qrcode is passed to the function because it was declared  with const which has block scope
const stopscan = (boom) => {
    boom.stop().then((ignore) =>{
        console.log('stopped');
    }).catch((err) => {
        console.log('unable to stop', err);
    });
}

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

    stopscan(html5Qrcode);
});