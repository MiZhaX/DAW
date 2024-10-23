// Ejercicio 1
var suma = (num1, num2) => num1+num2;

console.log(suma(2,3));

// Ejercicio 2
var longestCityNameInTheWorld = nombre => nombre.length;

console.log(longestCityNameInTheWorld("asjlasjkfjowjfalk<calsafkasjfeijfkao"));

// Ejercicio 3
var longitud = string => {
        longitud = string.length;
        console.log("La longitud es de " + longitud);
        return longitud;
    };

longitud("asjlasjkfjowjfalk<calsafkasjfeijfkao");

// Ejercicio 4
var alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

var showAlert = name => alerts[(Math.floor(Math.random()*alerts.length))] + ", " + name;

console.log(showAlert("Mishael"));

// Ejercicio 6
var saludo = (nombre, edad) => "Hello, I am " + nombre + ", and I am " + edad + " years old.";

console.log(saludo("Mishael", 19));

// Ejercicio 7
var numeros = [3,8,45,3,2];

var suma = numeros.reduce((sum,actual) => sum + actual, 0);

console.log(suma);

// Ejercicio 8
let eye = "eye";

const fire = () => "bulls";

// Ejercicio 9
const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


