

let Respuesta=document.getElementById('Respuesta');

function callApiRequest(){

// Make a request for a user with a given ID
    axios.get('http://localhost/iot-car-control/back-end/apis/getRegistro.php')
    .then(function (response) {
        // handle success
        console.log(response);
        let respuestaServidor = 
        response.data=='w'?"ADELANTE":
        response.data=='a'?"IZQUIERDA":
        response.data=='d'?"DERECHA":
        "DETENER";  

        
     Respuesta.innerHTML="ultima orden: <strong>"+ respuestaServidor+"</strong>";
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

setInterval(callApiRequest, 2000);
