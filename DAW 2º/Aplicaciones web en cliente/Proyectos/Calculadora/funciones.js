window.onload = () => {

    const agregarNumero = (num) => {
        resultado.innerText += num;
        previa.innerText += num;
    }

    const borrado = () => {
        resultado.innerText = "";
        previa.innerHTML = "Vista Previa: ";
    }

    const resultado = document.getElementById("resultado");
    const previa = document.getElementById("previa");

    const numeros = document.getElementsByClassName("numero");
    const nums = Array.from(numeros);
    
    nums.forEach(boton => {boton.addEventListener("click", () => {
            let num = boton.innerText;
            agregarNumero(num);
        })
    });

    const borrar = document.getElementById("borrar").addEventListener("click", () => {borrado()});

    var ope, num1, num2;

    const sumar = document.getElementById("sumar").addEventListener("click", () => {
        ope = suma;
        num1 = parseFloat(resultado.innerText);
        resultado.innerText = "";
        previa.innerText += "+";
    }); 

    const restar = document.getElementById("restar").addEventListener("click", () => {
        ope = resta;
        num1 = parseFloat(resultado.innerText);
        resultado.innerText = "";
        previa.innerText += "-";
    });

    const multiplicar = document.getElementById("multiplicar").addEventListener("click", () => {
        ope = multiplica;
        num1 = parseFloat(resultado.innerText);
        resultado.innerText = "";
        previa.innerText += "*";
    });

    const dividir = document.getElementById("dividir").addEventListener("click", () => {
        ope = divide;
        num1 = parseFloat(resultado.innerText);
        resultado.innerText = "";
        previa.innerText += " /";
    });

    const igual = document.getElementById("igual").addEventListener("click", () => {
        num2 = parseFloat(resultado.innerText);
        var total = ope(num1, num2);
        resultado.innerText = total;
    });
}   

function suma(num1, num2){
    return num1+num2;
}

function resta(num1, num2){
    return num1-num2;
}

function multiplica(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}