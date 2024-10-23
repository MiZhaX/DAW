// Ejericicio 1
document.write("<table border = 1>");
for(atributo in navigator){
    document.write("<tr>");
    document.write("<td>" + atributo + "</td>");
    document.write("<td>" + navigator[atributo] + "</td>");
    document.write("</tr>");
}
document.write("</table>");

// Ejercicio 2
document.write("<table border = 1>");
for(atributo in screen){
    document.write("<tr>");
    document.write("<td>" + atributo + "</td>");
    document.write("<td>" + screen[atributo] + "</td>");
    document.write("</tr>");
}
document.write("</table>");
