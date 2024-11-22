window.onload = () => {
    // VARIABLES OBTENIDAS DEL DOCUMENTO
    const botonEmpezar = document.getElementById("empezar");
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

    // FUNCION QUE INICIA EL JUEGO AL HACER CLIC EN EL BOTÓN
    botonEmpezar.addEventListener("click", () => {
        botonEmpezar.style.display = "none"; 
        iniciarJuego(); 
    });

    // FUNCION PARA INICIAR EL JUEGO
    function iniciarJuego() {
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
                if (posicionX + radio > jugadorX && posicionX - radio < jugadorX + jugadorAncho && 
                    posicionY + radio > jugadorY && posicionY - radio < jugadorY + jugadorAltura) {
                    velocidadX *= -1;
                    const offset = (posicionY - (jugadorY + jugadorAltura / 2)); 
                    velocidadY = offset * 0.2;
                    velocidadX += 2;
                    velocidadY += 2;
                    break;
                }
            }

            // COLISIÓN CON LA CPU
            for (let i = 0; i < colisionPelota.length; i++) {
                let punto = colisionPelota[i];
                if (posicionX + radio > cpuX && posicionX - radio < cpuX + cpuAncho && 
                    posicionY + radio > cpuY && posicionY - radio < cpuY + cpuAltura) {
                    velocidadX += 2;
                    velocidadY += 2;
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
                actualizarMarcador();
                reiniciaPelota();
                velocidadX *= -1;
                velocidadX = 8;
                velocidadY = 6;

                if(punto == 1){
                    for(let i = 0; i < 10; i++){
                        cambioColor(jugador, i * 100);
                    }
                } else if(punto == 2){
                    for(let i = 0; i < 10; i++){
                        cambioColor(cpu, i * 100);
                    }
                }
            }
        }, 30);
    }

    // FUNCION QUE COMPRUEBA LA COLISIÓN DE LA PELOTA CON LAS PORTERIAS
    function compruebaPunto(posicionX, limiteX, radio) {
        if ((posicionX + radio) >= limiteX) {
            puntuacionJugador++;
            return 1;
        } else if ((posicionX - radio) <= 10) {
            puntuacionCPU++;
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
        document.getElementById("marcadorJug").textContent = `${puntuacionJugador}`;
        document.getElementById("marcadorCPU").textContent = `${puntuacionCPU}`;
    }

    function cambioColor(objeto, delay) {
        setTimeout(() => {
            let rojo = Math.floor(Math.random() * 256);
            let verde = Math.floor(Math.random() * 256);
            let azul = Math.floor(Math.random() * 256);
            let rgbColor = `rgb(${rojo}, ${verde}, ${azul})`;

            objeto.setAttribute("fill", rgbColor);
        }, delay); 
    }
}
