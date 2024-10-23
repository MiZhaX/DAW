// Ejercicio 3
let radio = parseInt(prompt("Introduce el radio del círculo"));

let circunferencia = 2 * 3.14 * radio;
document.write("<br>The circumference is " + circunferencia);
let area = 3.14*Math.pow(radio,2);
document.write("<br>The area is " + area);

// Ejercicio 4
let celsius = 14;
let fahrenheit = (celsius * 9/5) + 32;

document.write("<br>" + celsius + "°C is " + fahrenheit + "°F");

let fahrenheit2 = 40;
let celsius2 = (fahrenheit2 - 32) * 5/9;

document.write("<br>" + fahrenheit2 + "°F is " + celsius2 + "°C");