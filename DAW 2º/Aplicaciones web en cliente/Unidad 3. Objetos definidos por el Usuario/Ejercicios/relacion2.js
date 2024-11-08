// Ejercicio 5
function paresImpares() {
    const numeros = [];
    for (let i = 0; i < 100; i++) {
      numeros.push(Math.floor(Math.random() * 1000) + 1);
    }
  
    console.log("Array inicial:", numeros);
  
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);
  
    const arrayFinal = [pares, impares];
  
    console.log("Array final:", arrayFinal);
}

// Ejercicio 7
function estableceACero(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = 0;
    }
}

function sumarUno(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] += 1;
    }
}

function arrayConEspacios(array) {
    console.log(array.join(' '));
}