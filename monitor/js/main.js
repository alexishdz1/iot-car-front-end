
let adelante = document.getElementById("adelante");
let derecha = document.getElementById("derecha");
let detener = document.getElementById("detener");
let atras = document.getElementById("atras");
let izquierda = document.getElementById("izquierda");

let mensaje=document.getElementById("mensaje");

function callApi(estatus){

// Make a request for a user with a given ID
    axios.get('http://34.232.69.248/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
    .then(function (response) {
        // handle success
        mensaje.innerHTML = "Respuesta: <strong>" + response.data + "<strong>";
        console.log(response);
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}
adelante.addEventListener("click", function (){
    callApi('w')
});
derecha.addEventListener("click", function () {
    callApi('d')
});
detener.addEventListener("click", function () {
    callApi('q')
});
atras.addEventListener("click", function () {
    callApi('s')
});
izquierda.addEventListener("click", function () {
    callApi('a')
});
