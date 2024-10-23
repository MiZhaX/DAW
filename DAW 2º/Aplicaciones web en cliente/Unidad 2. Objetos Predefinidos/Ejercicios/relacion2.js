// 1.- Un numero aleatorio entre 0 y 1.
document.write(Math.random());
document.write("<br>");

// 1.- Igual pero entre 100 y 200.
document.write(Math.random() * (200 - 100 + 1) + 100);

document.write("<br>");

// 1.- Pide dos valores al usuario y genera un n  aleatorio entre esos dos º valores.
var num1 = parseInt(prompt("Escribe primer número"));
var num2 = parseInt(prompt("Escribe segundo número"));

document.write(Math.random() * (num2 - num1) + num1);
document.write("<br>");

// 5.- Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por
// tanto los coeficientes y mostrar las soluciones posibles.
var a = parseInt(prompt("Escribe la A"));
var b = parseInt(prompt("Escribe la B"));
var c = parseInt(prompt("Escribe la C"));

var sol1 = (-b + Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2*a);
var sol2 = (-b - Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2*a);

document.write(sol1 + "<br>");
document.write(sol2 + "<br>");

// 7.- Crea una web que genere una tabla con dos columnas. En la primera un número ascendente y en la otra el valor de su seno
document.write("<table border=1>");

for(let i = 1; i <= 10; i++){
    document.write("<tr>");
        for(let j = 0; j < 2; j++){
            if(j == 0){
                document.write("<td> " + i + "</td>")
            } else{
                document.write("<td> " + Math.sin(i) + "</td>")
            }
        }
    document.write("</tr>");
}

document.write("</table>");


// 8. Crea una web en la que cada vez que se accede se muestre una imagen (de modo aleatorio) de entre 3 posibles.
var random = Math.trunc(Math.random()*3);
document.write("<img src='" + random + ".jpg></img>");
