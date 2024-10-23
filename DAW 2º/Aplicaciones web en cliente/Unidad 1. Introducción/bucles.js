// Bucle For
let nombre = prompt("Dime tu nombre");

for(let i=0; (i < nombre.length) && (nombre != "Jesus"); i++){
    document.write("<p>"+nombre[i]+"</p>");
}

// Bucle While
while (nombre == "Jose"){
    document.write("Hola Jose")
}

// Bucle Do While
do {
    document.write("Hola Jose");
} while (nombre == "Jose");

// Bucle For In
let persona = {};

personal.nombre = "Jesus";
personal.apellido = "Jimenez";

for(let miembro in persona){
    document.write(miembro);
}
