window.onload = () => {
    // VARIABLES OBTENIDAS DEL DOCUMENTO
    const pelota = document.getElementById("pelota");
    const jugador = document.getElementById("jugador");
    const marco = document.getElementById("pantalla");
    const cpu = document.getElementById("cpu");

    // VARIABLES DE LA PANTALLA
    const limiteX = parseInt(marco.getAttribute("width"));
    const limiteY = parseInt(marco.getAttribute("height"));

    // VARIABLES DE LA PELOTA
    const radio = parseInt(pelota.getAttribute("r"));
    var posicionX = parseInt(pelota.getAttribute("cx"));
    var posicionY = parseInt(pelota.getAttribute("cy"));
    var velocidadX = 8;
    var velocidadY = 6;

    // VARIABLES DEL JUGADOR
    const jugadorAltura = parseInt(jugador.getAttribute("height"));
    const jugadorAncho = parseInt(jugador.getAttribute("width"));
    var jugadorY = parseInt(jugador.getAttribute("y"));
    var jugadorX = parseInt(jugador.getAttribute("x"));

    // VARIABLES DE LA CPU
    const cpuAltura = parseInt(cpu.getAttribute("height"));
    const cpuAncho = parseInt(cpu.getAttribute("width"));
    var cpuY = parseInt(cpu.getAttribute("y"));
    var cpuX = parseInt(cpu.getAttribute("x"));

    // OTRAS VARIABLES
    var puntuacionJugador = 0;
    var puntuacionCPU = 0;

    // AÑADIR EVENTO PARA MOVER AL JUGADOR CON W Y S
    document.addEventListener("keydown", (event) => {
        if (event.code == "KeyW" && jugadorY > 0) {
            jugadorY -= 10;
            jugador.setAttribute("y", jugadorY);
        } else if (event.code == "KeyS" && (jugadorY + jugadorAltura) < limiteY) {
            jugadorY += 10;
            jugador.setAttribute("y", jugadorY);
        }
    });

    // INTERVALO PARA MOVER LA PELOTA Y COMPROBAR LAS COLISIONES
    setInterval(() => {
        posicionX += velocidadX;
        posicionY += velocidadY;

        pelota.setAttribute("cx", posicionX);
        pelota.setAttribute("cy", posicionY);

        // OBTENER LOS PUNTOS CARDINALES DE LA PELOTA Y AGREGARLOS A UN ARRAY
        var puntoA = posicionY - radio; // Coordenada Norte
        var puntoB = Math.sqrt(Math.pow(posicionX + radio, 2) + Math.pow(posicionY - radio, 2)); // Coordenada Noreste
        var puntoC = posicionX + radio; // Coordenada Este
        var puntoD = Math.sqrt(Math.pow(posicionX + radio, 2) + Math.pow(posicionY + radio, 2)); // Coordenada Sureste
        var puntoE = posicionY + radio; // Coordenada Sur
        var puntoF = Math.sqrt(Math.pow(posicionX - radio, 2) + Math.pow(posicionY + radio, 2)); // Coordenada Suroeste
        var puntoG = posicionX - radio; // Coordenada Oeste
        var puntoH = Math.sqrt(Math.pow(posicionX - radio, 2) + Math.pow(posicionY - radio, 2)); // Coordenada Noroeste
        var colisionPelota = [puntoA, puntoB, puntoC, puntoD, puntoE, puntoF, puntoG, puntoH];

        // COLISIÓN CON LAS PAREDES
        if ((posicionY + radio) > limiteY || (posicionY - radio) < 0) {
            velocidadY *= -1;
        }

        // COLISIÓN CON EL JUGADOR
        for (let i = 0; i < colisionPelota.length; i++) {
            let punto = colisionPelota[i];
            if (punto >= jugadorY && punto <= jugadorY + jugadorAltura && (posicionX - radio) <= jugadorX + jugadorAncho && (posicionX + radio) >= jugadorX) {
                velocidadX *= -1;
                velocidadX+=2;
                velocidadY+=2;
                break;
            }
        }

        // COLISIÓN CON LA CPU
        for (let i = 0; i < colisionPelota.length; i++) {
            let punto = colisionPelota[i];
            if (punto >= cpuY && punto <= cpuY + cpuAltura && (posicionX - radio) <= cpuX + cpuAncho && (posicionX + radio) >= cpuX) {
                velocidadX+=2;
                velocidadY+=2;
                velocidadX *= -1;
                break;
            }
        }

        // MOVER LA CPU AUTOMÁTICAMENTE
        if (posicionY > cpuY + cpuAltura / 2 && (cpuY + cpuAltura) < limiteY) {
            cpuY += 5; 
        } else if (posicionY < cpuY + cpuAltura / 2 && cpuY > 0) {
            cpuY -= 5; 
        }
        cpu.setAttribute("y", cpuY);

        // COMPROBAR SI ALGÚN JUGADOR OBTUVO UN PUNTO Y REINICIAR LA PELOTA EN CASO AFIRMATIVO
        const punto = compruebaPunto(posicionX, limiteX, radio);
        if (punto > 0) {
            reiniciaPelota();
            velocidadX *= -1;
            velocidadX = 8;
            velocidadY = 6;
        }
    }, 30);

    // FUNCION QUE COMPRUEBA LA COLISIÓN DE LA PELOTA CON LAS PORTERIAS
    function compruebaPunto(posicionX, limiteX, radio) {
        if ((posicionX + radio) >= limiteX) {
            console.log("Punto para el jugador");
            puntuacionJugador++;
            actualizarMarcador();
            return 1;
        } else if ((posicionX - radio) <= 10) {
            console.log("Punto para la CPU");
            puntuacionCPU++;
            actualizarMarcador();
            return 2;
        }
        return 0;
    }

    // FUNCIÓN QUE REINICIA LA POSICIÓN DE LA PELOTA
    function reiniciaPelota() {
        posicionX = limiteX / 2;
        posicionY = limiteY / 2;

        velocidadY = (Math.random() > 0.5 ? 1 : -1) * 6;
    }

    function actualizarMarcador() {
        document.getElementById("marcador").textContent = `${puntuacionJugador} - ${puntuacionCPU}`;
    }
}
