// CONDICIONALES
// Ejercicio 1
let esPar = 3;

if ((esPar % 2) == 0){
    document.write("Es par")
} else document.write("Es impar");

// Ejercicio 2
var edad = 14;

if(edad >= 18){
    document.write("Es mayor de edad")
} else document.write("Es menor");

// Ejercicio 3
var edad = 28;
var local = "Madrid";

if(edad >= 25 && local == "Madrid"){
    document.write("Enhorabuena");
}

// Ejercicio 4
var precio = parseInt(prompt("Escribe un número"))

if(precio > 100){
    precio = precio * 0.9;
};

document.write(precio);

// Ejercicio 5
var nombre = prompt("Escribe tu nombre");

if(nombre == "Pablo" || nombre == "Eduardo"){
    document.write("Bienvenido")
} else if (nombre == "Ana" || nombre == "Clara"){
    document.write("Bienvenida")
};

// Ejercicio 6
var ciudad = prompt("Escribe tu ciudad");
var edad = parseInt(prompt("Escribe tu edad"));

if(ciudad == "Madrid" && edad >= 18 && edad <= 30){
    document.write("Puedes acceder al carnet de empresarios emprendedores");
}

// IF/ELSE
//Ejercicio 1
var nombre = prompt("Escribe tu nombre");
var apellido = prompt("Escribe tu apellido");

if(nombre == "Ricardo"){
    console.log(apellido);
} else document.write(apellido);

// Ejercicio 2
var edad = parseInt(prompt("Escribe tu edad"));

if(edad >= 67){
    document.write("Puedes jubilarte")
} else document.write("No alcanzas la edad necesaria");

// Ejercicio 3
var edad = parseInt(prompt("Escribe tu edad"));

if(edad <= 5){
    document.write("Estás en el jardín de infancia")
} else if(edad >= 6 || edad <= 11){
    document.write("Estás en primaria")
} else if(edad >= 12 || edad <= 16){
    document.write("Estás en la ESO")
} else if(edad >= 17 || edad < 21){
    document.write("Estás en Bachillerato o Ciclos")
} else document.write("Estás en la universidad");

// Ejercicio 4
var hermanos = parseInt(prompt("Escribe cuantos hermanos tienes"));
var cantidad = parseInt(prompt("Escribe una cantidad"));

if(hermanos > 3){
    cantidad = cantidad * 0.85;
} else if(hermanos < 3 && hermanos > 0){
    cantidad = cantidad * 0.95;
} 

document.write(cantidad);

// Ejercicio 5
var examen1 = parseInt(prompt("Nota examen 1"));
var examen2 = parseInt(prompt("Nota examen 2"));

var trabajo1 = parseInt(prompt("Nota trabajo 1"));
var trabajo2 = parseInt(prompt("Nota trabajo 2"));

if(examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5){
    let mediaExamen = (examen1 + examen2)/2;
    let mediaTrabajo = (trabajo1 + trabajo2)/2;

    let media = mediaExamen*0.75 + mediaTrabajo*0.25;

    if(media >= 5){
        document.write("Estas aprobado");
    } else document.write("Estas suspenso");
} else document.write("No tienes la nota suficiente para hacer la media");

// SWITCH
// Ejercicio 1
var mes = prompt("Escribe un mes");

switch(mes){
    case "Enero", "Marzo", "Mayo", "Julio", "Agosto", "Octubre", "Diciembre":
        document.write("31");
        break;
    case "Febrero":
        document.write("28");
        break;
    case "Abril", "Junio", "Septiembre", "Noviembre":
        document.write("30");
        break;
    default:
        console.log("Mes no identificado");
};

// Ejercicio 3
var num1 = parseInt(prompt("Número 1"));
var num2 = parseInt(prompt("Número 2"));
var opcion = prompt("Símbolo de la operación");

switch (opcion) {
    case "+":
        document.write(num1 + num2);
        break;
    case "-":
        document.write(num1 - num2);
        break;
    case "*":
        document.write(num1 * num2);
        break;
    case "/":
        document.write(num1 / num2);
        break;
    default:
        console.log("Operación no identificada");
}

//BUCLES
// Ejercicio 1
for(let i = 1; i <= 10; i++){
    document.write("<hr>" + i);
};

// Ejercicio 2
var num = parseInt(prompt("Escribe un número"))

for(let i = num; i <= 100; i++){
    document.write(" " + i);
};

// Ejercicio 3
var num = parseInt(prompt("Escribe un número"));

while(num != 0){
    num = parseInt(prompt("Escribe un número"));
};

// Ejercicio 4
var palabra = prompt("Escribe una palabra");

while(palabra != "SALIR"){
    document.write(palabra)
    palabra = prompt("Escribe una palabra");
};