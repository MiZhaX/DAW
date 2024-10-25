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

let control = false;
let shift = false;
let alt = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'Control') control = true;
  if (event.key === 'Shift') shift = true;
  if (event.key === 'Alt') alt = true;
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Control') control = false;
  if (event.key === 'Shift') shift = false;
  if (event.key === 'Alt') alt = false;
});

const celdas = document.querySelectorAll('td');
celdas.forEach((celda) => {
  celda.addEventListener('mouseover', pintarcelda);
});

function pintarcelda(event) {
  if (control) event.target.style.backgroundColor = "blue";
  else if(shift) event.target.style.backgroundColor = "red";
  else if(alt) event.target.style.backgroundColor = "white";
}
