document.addEventListener("DOMContentLoaded", function() {
    const colors = document.getElementsByClassName("color");
    const reinicio = document.getElementById("reiniciar");
    const rgb = document.getElementById("rgb");

    function nuevosColores(){
        Array.from(colors).forEach(color => {
            let rojo = Math.floor(Math.random() * 256);
            let verde = Math.floor(Math.random() * 256);
            let azul = Math.floor(Math.random() * 256);
            let rgbColor = `rgb(${rojo}, ${verde}, ${azul})`;
            color.style.backgroundColor = rgbColor;
        });

        const aleatorio = Math.floor(Math.random() * colors.length);
        const colorAleatorio = colors[aleatorio];
        const colorCorrecto = colorAleatorio.style.backgroundColor;

        console.log("Color seleccionado aleatoriamente:", colorCorrecto);
        rgb.textContent = colorCorrecto;
    }

    nuevosColores();

    reinicio.addEventListener("click", nuevosColores);
});