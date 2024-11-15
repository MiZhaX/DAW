window.onload = () => {
    const reloj = document.getElementById("reloj");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");

    let segundos = 0;
    let minutos = 0;
    let intervalo = null;

    function añadirSegundos() {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        pintarReloj();
    }

    function pintarReloj() {
        reloj.innerText = (minutos < 10 ? "0" : "") + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
    }
    

    start.addEventListener("click", () => {
        if (!intervalo) {
            intervalo = setInterval(añadirSegundos, 1000);
        }
    });

    stop.addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
    });

    reset.addEventListener("click", () => {
        clearInterval(intervalo);
        intervalo = null;
        segundos = 0;
        minutos = 0;
        pintarReloj();
    });

    pintarReloj();
}