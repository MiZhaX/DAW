// 1
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>alert("Has hecho click en el botón"));

// 2
const body = document.querySelector("body");

body.addEventListener("mousemove", evento =>console.log("X: " + evento.clientX + ", Y: " + evento.clientY));

// 4
document.write('<table>');

for (let i = 0; i < 100; i++) {
    document.write('<tr>');
    for (let j = 0; j < 100; j++) {
        document.write('<td style="border: 1px solid black; width: 10px; height: 10px;"></td>');
    }
    document.write('</tr>'); 
}
document.write('</table>');

const celdas = document.querySelectorAll('td');
celdas.forEach((celda) => {
  celda.addEventListener('mouseover', pintarcelda);
});

function pintarcelda(event) {
  if (event.ctrlKey) event.target.style.backgroundColor = "blue";
  else if(event.shiftKey) event.target.style.backgroundColor = "red";
  else if(event.altKey) event.target.style.backgroundColor = "white";
}
