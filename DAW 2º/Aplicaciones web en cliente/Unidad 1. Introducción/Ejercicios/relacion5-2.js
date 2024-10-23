// Ejercicio 5 ----
var suma = 0;

for(let i = 0; i < 10; i++){
    let num = parseInt(prompt("Escribe un número"));
    suma = suma + num;
}

document.write(suma);

// Ejercicio 6
var num = parseInt(prompt("Escribe un número"));

for(let i = 1; i <= 10; i++){
    document.write("<br>" + num + " * " + i + " = " + (num*i));
};

// Ejercicio 7
var num = parseInt(prompt("Escribe un número"));
var adivina;

do{
    adivina = parseInt(prompt("Escribe este número"));

    if(adivina < num) {
        console.log("El número es mayor");
    } else if (adivina > num) {
        console.log("El número es menor");
    } else console.log("Has acertado");
} while (adivina != num);

