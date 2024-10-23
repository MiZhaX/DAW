// Ejercicio 1
function invierteCadenas(cad_arg){
    let invertida = "";

    for (let i = cad_arg.length-1; i >= 0; i--){
        invertida = invertida + cad_arg[i];
    }

    return invertida;
}

document.write(invierteCadenas("Hola"));
document.write("<br>")

function inviertePalabras(cad_arg){
    let palabras = cad_arg.split(" ");
    let string = "";

    for(let i = 0; i < palabras.length; i++){
        string = string + invierteCadenas(palabras[i]) + " ";
    }

    return string;
}

document.write(inviertePalabras("Hola mundo calvos"));
document.write("<br>");

function encuentraPalabraMasLarga(cad_arg){
    let palabras = cad_arg.split(" ");
    let larga = palabras[0];

    for(let i = 0; i < palabras.length; i++){
        if (palabras[i].length > larga.length) {
            larga = palabras[i];
        }
    }

    return larga;
}

document.write(encuentraPalabraMasLarga("Hola mundo calvos"));
document.write("<br>");

function filtraPalabrasMasLargas(cad_arg, i){
    let palabras = cad_arg.split(" ");
    let largas = [];

    for(let j = 0; j < palabras.length; j++){
        if (palabras[j].length > i) {
            largas.push(palabras[j]);
        }
    }

    return largas.length;
}

document.write(filtraPalabrasMasLargas("Hoa mundo patatas", 3));
document.write("<br>");

function cadenaBienFormada(cad_arg){
    let palabras = cad_arg.split(" ");
    let string = "";

    for(let i = 0; i < palabras.length; i++){
        if (i == 0) {
            let primera = palabras[i].charAt(0);
            let resto = palabras[i].slice(1);
            palabras[i] = primera.toUpperCase() + resto.toLowerCase();
            string = string + palabras[i] + " ";
        } else string = string + palabras[i].toLowerCase() + " ";        
    }

    return string;
}

document.write(cadenaBienFormada("hOla MUndo BONITO"));
document.write("<br>");

// Ejercicio 2
function infoCadena(cad_arg){
    let mayus = false;
    let minus = false;

    for(let i = 0; i < cad_arg.length; i++){
        if(cad_arg.charAt(i) == cad_arg.charAt(i).toUpperCase()){
            mayus = true;
        } else if(cad_arg.charAt(i) == cad_arg.charAt(i).toLowerCase()) {
            minus = true;
        }
    }

    if(mayus && !minus){
        document.write("La cadena solo tiene mayúsculas.")
    } else if(minus && !mayus){
        document.write("La cadena solo tiene minúsculas.")
    } else document.write("La cadena es una mezcla.")
}

infoCadena("hola");
document.write("<br>");

// Ejercicio 7
function esPalindromo(cad_arg){
    let cadenaInversa = invierteCadenas(cad_arg);
    let esPalindromo;

    if (cad_arg == cadenaInversa){
        esPalindromo = "Es un palíndromo."
        return esPalindromo;
    } else {
        esPalindromo = "No es palíndromo"
        return esPalindromo;
    }
}

document.write(esPalindromo("anilina"));

// Ejercicio 9
function crearTabla(palabra){
    document.write("<table>");
    let palabraInversa = invierteCadenas(palabra);

    for(let i = 0; i < palabra.length; i++){
        document.write("<tr>");
        document.write("<td> " + palabra.charAt(i) + "</td>");
            for(let j = 0; j < palabra.length; j++){
                if(i == palabra.length-1) {
                    document.write("<td> " + palabraInversa.charAt(j) + "</td>")
                } else document.write("<td></td>")
            }
        document.write("</tr>");
    }

    document.write("</table>");
}

crearTabla("Hola");