Html5Qrcode.getCameras().then(devices => {
    if (devices && devices.length){
        var cameraId = devices[0].id;
        const html5Qrcode = new Html5Qrcode ('reader', true/* verbose= */);
        html5Qrcode.start (
            cameraId,
            {
                fps: 10,
                qrbox:{
                    width: 400,
                    height: 250
                }
            },
            (decodedText, decodedResult) => {
                // succesfull scan handling
                document.querySelector('#result').innerHTML= `Decoded Text = ${decodedText}`;
                console.log(`Code matched = ${decodedText}`, decodedResult);
            },
            (errorMessage) => {
                // failed scan handling
                document.querySelector('#result').innerHTML = `error: ${error}`;
                console.warn(`Code scan error = ${error}`);
            }
        
        )
    }
}).catch(err => {
    document.querySelector('#result').innerHTML = `error: ${err}`;
    console.log(err);
});
