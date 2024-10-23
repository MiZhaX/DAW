// Ejercicio 2
function lanzamiento1(){
    random = Math.random()*7;
    return Math.trunc(random);
}

console.log(lanzamiento1());

// Ejercicio 3
function lanzamiento2(){
    let veces1 = veces2 = veces3 = veces4 = veces5 = veces6 = 0;

    for(let i = 0; i < 6000; i++){
        random = Math.trunc(Math.random()*6+1);

        switch(random){
            case 1:
                veces1++;
                break;
            case 2:
                veces2++;
                break;
            case 3:
                veces3++;
                break;
            case 4:
                veces4++;
                break;
            case 5:
                veces5++;
                break;
            case 6:
                veces6++;
                break;
        }
    }

    console.log("El uno ha salido " + veces1 + " veces");
    console.log("El dos ha salido " + veces2 + " veces");
    console.log("El tres ha salido " + veces3 + " veces");
    console.log("El cuatro ha salido " + veces4 + " veces");
    console.log("El cinco ha salido " + veces5 + " veces");
    console.log("El seis ha salido " + veces6 + " veces");
}

console.log(lanzamiento2());

// Ejercicio 6
function potencia(base,exponente){
    if(exponente > 1){
        exponente--;
        return base*potencia(base,exponente);
    }
    else    
        return base;
}

console.log(potencia(11,3));