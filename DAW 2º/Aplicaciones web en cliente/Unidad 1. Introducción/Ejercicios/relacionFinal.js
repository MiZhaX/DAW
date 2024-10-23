// 1. Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
var n = parseInt(prompt("Ingresa un número"));

for(let i = 0; i <= n; i++){
    document.write(i + " ");
};

document.write("<br>")

// 2. Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
var n = parseInt(prompt("Ingresa un número"));

for(let i = 0; i <= n; i=i+2){
    document.write(i + " ");
};

document.write("<br>")

// 3. Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
var n = parseInt(prompt("Ingresa un número"));

for(let i = n; i > 0; i--){
    document.write(i + " ");
};

document.write("<br>")

// 4. Escribir utilizando console.log la tabla del 9 hasta 9x10.


// 5. Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.
var num = prompt("Introduce un número");
var suma = 0;
var bool = false;

for(let i = 0; i < num.length && !bool; i++){
    if(isNaN(parseInt(num[i]))){
        document.write(num[i] + "no es un número.");
        bool = true;
    } else {
        suma = suma + parseInt(num[i]);
    }
}

document.write("<br>")
    
// 6. Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
var num1 = prompt("Introduce primer número");
var num2 = prompt("Introduce segundo número");

for(let i = num1; i <= num2; i++){
    if(!(i % 2)){
        document.write(i + " ");
    }
}

document.write("<br>")

// 7. Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
var num = prompt("Introduce un número");
var suma = 0;

for(let i = 0; i <= n; i++){
    suma += i
}

document.write(suma + "<br>");

// 8. Realizar el factorial de los primeros N números.


// 9. Encontrar todos los divisores de un número.


// 10. Determinar si un número ingresado por el usuario en un prompt es primo o no, validar que el número ingresado sea mayor o igual a dos.


// 11. Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a la suma de sus divisores, ejemplos 6 = 1 + 2 + 3)


// 12. Generar los primeros N números primos, donde n es ingresado por el usuario.


// 13. Generar los primeros N números perfectos.


// 14. Dibujar los siguientes patrones usando document.write, para rellenar los espacios vacíos se debe imprimir un espacio vacío.