window.onload = () => {
    const pelota = document.getElementById("pelota");
    var posicionX = 50;
    var posicionY = 50;
    var limiteX = 1000;
    var limiteY = 500;
    var radio = 30;
    var velocidadX = 8;
    var velocidadY = 6;

    setInterval(()=>{
        posicionX += velocidadX;
        posicionY += velocidadY;
        
        pelota.setAttribute("cx",posicionX);
        pelota.setAttribute("cy", posicionY);

        if((posicionX + radio)>limiteX){   
            velocidadX *= (-1);
        }else if((posicionX-radio)<10){
            velocidadX *= (-1);
        }

        if((posicionY + radio)>limiteY){   
            velocidadY *= (-1);
        }else if((posicionY-radio)<0){
            velocidadY *= (-1);
        }

        if(compruebaPunto(posicionX, posicionY, limiteX, radio)){
            posicionX = 500;
            posicionY = 250;
        };
    },30);

}

function compruebaPunto(posicionX, limiteX, radio) {
    if((posicionX+radio) == limiteX) {
        console.log("Punto para el jugador");
        return true;
    } else if((posicionX-radio) == 11){
        console.log("Punto para la CPU");
        return true;
    }

    return false;
}