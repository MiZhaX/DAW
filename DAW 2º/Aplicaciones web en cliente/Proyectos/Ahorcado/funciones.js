window.onload = () => {
    // Selectores de elementos del documento
    const buttons = document.querySelectorAll("button");
    const botones = Array.from(buttons);
    const intentos = document.querySelector(".intentos");
    const palabra = document.querySelector(".palabra");

    // Variables
    var palabraSecreta = "MADRID";
    var palabraOculta;
    var intentosRestantes = 10;
    var letraEncontrada = false;

    // Modificar los elementos del documento para mostrarlos por pantalla
    palabraOculta = Array(palabraSecreta.length).fill("_");
    palabra.textContent = palabraOculta.join(" ");
    intentos.textContent = `Intentos restantes: ${intentosRestantes}`;

    // Función al hacer click a una letra
    function adivinarLetra(letra) {

        letraEncontrada = false;
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraOculta[i] = letra;
                letraEncontrada = true;
            }
        }
        palabra.textContent = palabraOculta.join(" ");

        // Reducir los intentos y comprobar si el usuario ganó o perdió el juego
        if (!letraEncontrada) {
            intentosRestantes--;
            intentos.textContent = `Intentos restantes: ${intentosRestantes}`;
            if (intentosRestantes === 0) {
                console.log("¡Perdiste! La palabra era: " + palabraSecreta);
                botones.forEach(boton => {boton.disabled = true;});
            }
        } else {
            if (!palabraOculta.includes("_")) {
                console.log("¡Felicidades, ganaste!");
                botones.forEach(boton => {boton.disabled = true;});
            }
        }

        // Deshabilitar la letra que se acaba de utilizar
        document.querySelector(`button.${letra}`).disabled = true;
    } 

    botones.forEach(boton => {boton.addEventListener("click", () => adivinarLetra(boton.innerText))});  
}

