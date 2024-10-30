window.onload = () => {
    const resultado = document.getElementById("resultado");
    const cero = document.getElementById("cero").addEventListener("click", () => {resultado.innerText += "0"});
    const uno = document.getElementById("uno").addEventListener("click", () => {resultado.innerText += "1"});
    const dos = document.getElementById("dos").addEventListener("click", () => {resultado.innerText += "2"});
    const tres = document.getElementById("tres").addEventListener("click", () => {resultado.innerText += "3"});
    const cuatro = document.getElementById("cuatro").addEventListener("click", () => {resultado.innerText += "4"});
    const cinco = document.getElementById("cinco").addEventListener("click", () => {resultado.innerText += "5"});
    const seis = document.getElementById("seis").addEventListener("click", () => {resultado.innerText += "6"});
    const siete = document.getElementById("siete").addEventListener("click", () => {resultado.innerText += "7"});
    const ocho = document.getElementById("ocho").addEventListener("click", () => {resultado.innerText += "8"});
    const nueve = document.getElementById("nueve").addEventListener("click", () => {resultado.innerText += "9"});

    const borrar = document.getElementById("borrar").addEventListener("click", () => {resultado.innerText = ""});

    const sumar = document.getElementById("sumar").addEventListener("click", () => {
        var num1 = resultado.innerText;
        resultado.innerText += " + ";
    });
    const restar = document.getElementById("restar").addEventListener("click", () => {resultado.innerText += " - "});
    const multiplicar = document.getElementById("multiplicar").addEventListener("click", () => {resultado.innerText += " * '&nbsp;'"});
    const dividir = document.getElementById("dividir").addEventListener("click", () => {resultado.innerText += " / "});
    const igual = document.getElementById("igual").addEventListener("click", () => {
        resultado.innerText += " / ";
    });
}   