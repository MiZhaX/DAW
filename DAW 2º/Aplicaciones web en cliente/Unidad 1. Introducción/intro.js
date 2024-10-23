// VARIABLES
const variableConst = 0; //Variable constante, no cambia. Si tratamos de cambiarla en el código más adelante, nos da error
let variableLet = 1; // Variable local, se utiliza para las variables dentro de bloques de código, entre {} y para bucles
var variableVar = 2 // Variable global

document.write(variableConst); // document.write escribe en el código HTML para imprimir en la ventana


let tcl = prompt("dame un numero"); // Todo lo que se imprima con prompt, va a ser una cadena
tcl = tcl + 1; 
console.log(tcl); // Imprime en la consola

let valor = parseInt(prompt("dame otro numero")); // Con Parse, podemos convertir tipos de datos.
valor = valor + 1;


