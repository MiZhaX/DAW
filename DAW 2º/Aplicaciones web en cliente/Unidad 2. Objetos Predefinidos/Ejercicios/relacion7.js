
// Variables
var yInicial; // Al principio es la Y inicial, después pasa a ser la posición anterior a la actualizada
var xInicial; // Al principio es la X inicial, después pasa a ser la posición anterior a la actualizada
var yActual; // Y Actual
var xActual; // X Actual
var primeraIteracion = true; // Booleano para detectar si es la primera vez que se muestra la posición
var metrosRecorridos = 0; // Variable con los metros totales recorridos
var ruta = [];

// Ejercicio 1, 2 Y 3
function muestraPosicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);

    if(!map){
        var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    }

    var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);

    if(primeraIteracion){
        yInicial = pos.coords.latitude;
        xInicial = pos.coords.longitude;

        yActual = pos.coords.latitude;
        xActual = pos.coords.longitude;
        primeraIteracion = false;
    } else {
        yInicial = yActual;
        xInicial = xActual;

        yActual = pos.coords.latitude;
        xActual = pos.coords.longitude;

        metrosRecorridos += getDistanceBetweenPoints(yInicial, xInicial, yActual, xActual);

        document.write("Has recorrido " + metrosRecorridos + " metros en total<br>");
    }
}

function errores(error){
    console.log("Se ha producido un error");
    console.log("Código de error: " + error.code);
    console.log(error.message);
}

if(!navigator.geolocation){
    console.log("NO SE PUEDE ACCEDER A LA UBICACIÓN");
} else{
    navigator.geolocation.watchPosition(muestraPosicion, errores);
}

function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'meters') {
    let theta = longitude1 - longitude2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) + 
        Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    if (unit == 'miles') {
        return Math.round(distance, 2);
    } else if (unit == 'meters') {
        return Math.round(distance * 1.609344 * 1000, 2);
    }
}
