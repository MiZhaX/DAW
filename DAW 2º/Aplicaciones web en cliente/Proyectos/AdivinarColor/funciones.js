document.addEventListener("DOMContentLoaded", function() {

    // ---------- VARIABLES ----------
    // VARIABLES GLOBALES TOMADOS POR ID
    const colors = document.getElementsByClassName("color");
    const reinicio = document.getElementById("reiniciar");
    const rgb = document.getElementById("rgb");
    const textModo = document.getElementById("modo");
    const puntuacion = document.getElementById("puntos");
    const facil = document.getElementById("facil");
    const dificil = document.getElementById("dificil");
    const textVidas = document.getElementById("vidas");

    // VARIABLES GLOBALES DEL JUEGO
    var puntos = 0;
    var modo = 0;
    var vidas = 0;

    // ---------- FUNCIONES ----------
    // FUNCIÓN PARA GENERAR NUEVOS COLORES
    function nuevosColores(){
        Array.from(colors).forEach(color => {
            // MOSTRAMOS NUEVAMENTE LOS COLORES OCULTADOS
            color.style.opacity = 1;

            // REINICIAMOS LA PUNTUACIÓN
            puntuacion.textContent = "Puntuación: " + puntos;

            let rojo = Math.floor(Math.random() * 256);
            let verde = Math.floor(Math.random() * 256);
            let azul = Math.floor(Math.random() * 256);

            let rgbColor = `rgb(${rojo}, ${verde}, ${azul})`;

            // ACTUALIZAMOS EL COLOR
            color.style.backgroundColor = rgbColor;
        });

        // OBTENEMOS UN COLOR ALEATORIO DE LOS GENERADOS Y ACTUALIZAMOS EL COLOR CORRECTO
        const aleatorio = Math.floor(Math.random() * colors.length);
        const colorAleatorio = colors[aleatorio];
        const colorCorrecto = colorAleatorio.style.backgroundColor;

        console.log("Color seleccionado aleatoriamente:" + colorCorrecto + ". En la posición: " + aleatorio);

        // ACTUALIZAMOS EL TEXTO MOSTRADO EN PANTALLA DEL COLOR CORRECTO
        rgb.textContent = colorCorrecto;

        return colorCorrecto;
    }

    // VARIABLE DONDE ALMACENAREMOS EL COLOR CORRECTO
    let correcto = nuevosColores();

    //  ---------- EVENTOS -----------
    // BOTON MODO FÁCIL
    facil.addEventListener("click", () => {
        modo = 0;
        puntos = 0;
        correcto = nuevosColores();

        // ACTUALIZAMOS EL TEXTO DEL MODO Y ELIMINAMOS EL TEXTO DE LAS VIDAS PARA QUE NO SE MUESTRE
        textModo.textContent = "Estas en modo fácil";
        textVidas.textContent = "";
    });

    // BOTON MODO DIFÍCIL
    dificil.addEventListener("click", () => {
        modo = 1;
        puntos = 0;
        vidas = 5;
        correcto = nuevosColores();

        // ACTUALIZAMOS LOS TEXTOS EN PANTALLA DE VIDAS Y EL MODO
        textModo.textContent = "Estas en modo difícil";
        textVidas.textContent = "Vidas: " + vidas;
    });

    // BOTON NUEVOS COLORES
    reinicio.addEventListener("click", () => {
        puntos = 0;
        vidas = 5;
        
        if(modo == 0) textVidas.textContent = "";
        else textVidas.textContent = "Vidas: " + vidas;

        correcto = nuevosColores();
    });

    // COLORES 
    Array.from(colors).forEach(color => {
        color.addEventListener("click", () => {
            // DETECTAMOS SI AL JUGADOR NO LE QUEDAN VIDAS EN EL MODO DIFÍCIL
            if(vidas == 0 && modo == 1){
                alert("¡No te quedan más vidas!\n Inicia un nuevo modo de juego para seguir jugando");
            } else {
                if(color.style.backgroundColor == correcto){
                    puntos++;
                    correcto = nuevosColores();
                } else {
                    // EN CASO DE ESTAR EN DIFÍCIL, DISMINUIMOS LAS VIDAS
                    if(modo == 1) {
                        vidas--;
                        textVidas.textContent = "Vidas: " + vidas;
                    }
                    // SI NO HEMOS ACERTADO, EL COLOR SE DESVANECERÁ
                    color.style.opacity = 0;
                }
            }
        })
    });
});