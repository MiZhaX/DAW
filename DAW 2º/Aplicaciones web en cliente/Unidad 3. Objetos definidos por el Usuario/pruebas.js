function recursiva(n){
    if(n>0) recursiva(n-1);

    console.log("Termina la función con  n = " + n);
}

recursiva(4);

// ARRAYS
let numero = [10, 4, 6, 110, 43, 23, 87];

// ORDENAR UN ARRAY DE MENOR A MAYOR
console.log(numero.sort((num1,num2) => num1-num2));

// FILTRAR UN ARRAY PARA DEJAR SOLO LOS NUMEROS MAYORES QUE 10
console.log(numero.filter(num1 => num1>10));

// FILTRAR UN ARRAY Y LUEGO ORDENARLO DE MENOR A MAYOR
console.log(numero.filter(num1 => num1>10).sort((num1,num2) => num1-num2));