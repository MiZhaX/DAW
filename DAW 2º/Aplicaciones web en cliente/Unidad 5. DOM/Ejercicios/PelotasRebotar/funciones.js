window.onload = () => {
    const padre = document.getElementById("pantalla");
    const limiteX = 1000;
    const limiteY = 500;

    const pelotas = [];

    class Pelota {
        constructor(posicionX, posicionY, radio, velocidadX, velocidadY, circulo) {
            this.posicionX = posicionX;
            this.posicionY = posicionY;
            this.radio = radio;
            this.velocidadX = velocidadX;
            this.velocidadY = velocidadY;
            this.circulo = circulo;
        }

        mover() {
            this.posicionX += this.velocidadX;
            this.posicionY += this.velocidadY;

            if ((this.posicionX + this.radio) > limiteX || (this.posicionX - this.radio) < 0) {
                this.velocidadX *= -1;
            }
            if ((this.posicionY + this.radio) > limiteY || (this.posicionY - this.radio) < 0) {
                this.velocidadY *= -1;
            }

            this.circulo.setAttribute("cx", this.posicionX);
            this.circulo.setAttribute("cy", this.posicionY);
        }
    }

    for (let i = 0; i < 100; i++) {
        const radio = Math.floor(Math.random() * 31) + 20;
        const posicionX = Math.random() * (limiteX - 2 * radio) + radio;
        const posicionY = Math.random() * (limiteY - 2 * radio) + radio;
        const velocidadX = (Math.random() * 8) + 1;
        const velocidadY = (Math.random() * 6) + 1;
        const color = Math.floor(Math.random() * 16777215).toString(16);

        const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        padre.appendChild(circulo);
        circulo.setAttribute("cx", posicionX);
        circulo.setAttribute("cy", posicionY);
        circulo.setAttribute("r", radio);
        circulo.setAttribute("fill", `#${color}`);

        const nuevaPelota = new Pelota(posicionX, posicionY, radio, velocidadX, velocidadY, circulo);
        pelotas.push(nuevaPelota);

        // Evento para eliminar la pelota al hacer clic
        circulo.addEventListener("click", () => {
            padre.removeChild(circulo);
        });
    }

    setInterval(() => {
        pelotas.forEach(pelota => pelota.mover());
    }, 1000/60);
}
