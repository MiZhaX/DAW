// Ejercicio 4.10
for(let i = 1; i < 7; i++){
    document.write("<h" + i + ">" + "Cabecera h" + i);
}

// Ejercicio 4.11
var colum = parseInt(prompt("Número de columnas"));
var alt = parseInt(prompt("Altura de columnas"));
var anch = parseInt(prompt("Anchura de columnas"));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");
document.write("<tr bgcolor = 'white' height = " + alt + ">");

for(let i = 0; i < colum; i++){
    document.write("<td width = " + anch + "> &nbsp;</td>");
}

document.write("</tr>");
document.write("</table>");

// Ejercicio 4.12
var colum = parseInt(prompt("Número de columnas"));
var alt = parseInt(prompt("Altura de columnas"));
var anch = parseInt(prompt("Anchura de columnas"));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");
document.write("<tr height = " + alt + ">");

for(let i = 0; i < colum; i++){
    if ((i % 2) == 0){
        document.write("<td width = " + anch + " bgcolor = 'black'> &nbsp;</td>");
    } else {
        document.write("<td width = " + anch + " bgcolor = 'white'> &nbsp;</td>");
    }
}

document.write("</tr>");
document.write("</table>");

// Ejercicio 4.13
var colum = parseInt(prompt("Número de columnas"));
var alt = parseInt(prompt("Altura de columnas"));
var anch = parseInt(prompt("Anchura de columnas"));
var vueltas = 0;

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");
document.write("<tr bgcolor = 'white' height = " + alt + ">");

while(vueltas < colum){
    document.write("<td width = " + anch + "> &nbsp;</td>");
    vueltas++;
}

document.write("</tr>");
document.write("</table>");

// Ejercicio 4.14
var colum = parseInt(prompt("Número de columnas"));
var alt = parseInt(prompt("Altura de columnas"));
var anch = parseInt(prompt("Anchura de columnas"));
var vueltas = 1;

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");
document.write("<tr height = " + alt + ">");

while(vueltas <= colum){
    if ((vueltas % 2) == 0){
        document.write("<td width = " + anch + " bgcolor = 'white'> &nbsp;</td>");
    } else {
        document.write("<td width = " + anch + " bgcolor = 'black'> &nbsp;</td>");
    }
    vueltas++;
}

document.write("</tr>");
document.write("</table>");

// Ejercicio 4.17
for(let i = 1; i < 11; i++){
    document.write("<br>Tabla del " + i);
    for(let j = 1; j <= 10; j++){
        document.write("<br>" + i + "x" + j + "=" + (i*j));
    }
}

// Ejercicio 4.18
var colum = parseInt(prompt("Número de columnas"));
var alt = parseInt(prompt("Altura de columnas"));
var anch = parseInt(prompt("Anchura de columnas"));
var filas = parseInt(prompt("Número de filas"));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");

for(let i = 0; i < filas; i++){
    document.write("<tr bgcolor = 'white' height = " + alt + ">");
    for(let j = 0; j < colum; j++){
        document.write("<td width = " + anch + "> &nbsp;</td>");
    }
}

document.write("</tr>");
document.write("</table>");

// Ejercicio 4.19
var valor = parseInt(prompt("Altura de columnas"));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = '200'>");

for(let i = 1; i <= 8; i++){
    document.write("<tr height = " + valor + ">");
    for(let j = 1; j <= 8; j++){
        if ((i % 2) == 0){
            if((j % 2) == 0){
                document.write("<td width = " + anch + " bgcolor = 'black'> &nbsp;</td>");
            } else {
                document.write("<td width = " + anch + " bgcolor = 'white'> &nbsp;</td>");
            }
        } else if (!((j%2)==0)) {
            document.write("<td width = " + anch + " bgcolor = 'black'> &nbsp;</td>");
        } else{
            document.write("<td width = " + anch + " bgcolor = 'white'> &nbsp;</td>");
        }
    }
}

document.write("</tr>");
document.write("</table>");