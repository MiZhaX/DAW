// Puzzle
class Puzzle{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;

        this.movimientos = 0;
    }
}


class TresEnRaya{
    constructor(jugador1, jugador2){
        this.tablero = [[null,null,null],
                       [null,null,null],
                       [null,null,null]];
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.turno = jugador1;
    }

    coloca(jugador, fila, columna){
        if(this.tablero[fila][columna] === null){
            if(this.turno == jugador) {
                this.tablero[fila][columna] = (jugador == this.jugador1) ? "X" : "O";

                this.turno = (this.turno == this.jugador1) ? this.jugador2 : this.jugador1;
            }
            else {
                console.log("No es el turno de " + jugador);
            }
        } 
        else{
            console.log("La casilla ya está ocupada");
        }
    }

    compruebaGanador() {
        // Revisar las filas
        for (let fila = 0; fila < 3; fila++) {
            if (this.tablero[fila][0] && this.tablero[fila][0] === this.tablero[fila][1] && this.tablero[fila][1] === this.tablero[fila][2]) {
                return this.tablero[fila][0]; // Retorna "X" o "O" como ganador
            }
        }
    
        // Revisar las columnas
        for (let col = 0; col < 3; col++) {
            if (this.tablero[0][col] && this.tablero[0][col] === this.tablero[1][col] && this.tablero[1][col] === this.tablero[2][col]) {
                return this.tablero[0][col]; // Retorna "X" o "O" como ganador
            }
        }
    
        // Revisar la diagonal principal
        if (this.tablero[0][0] && this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2]) {
            return this.tablero[0][0]; // Retorna "X" o "O" como ganador
        }
    
        // Revisar la diagonal inversa
        if (this.tablero[0][2] && this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0]) {
            return this.tablero[0][2]; // Retorna "X" o "O" como ganador
        }
    
        // No hay ganador aún
        return null;
    }    

    mostrarTablero() {
        console.log("Tablero actual:");
        for (let fila = 0; fila < 3; fila++) {
            let filaStr = this.tablero[fila].map(casilla => casilla === null ? "_" : casilla).join(" | ");
            console.log(filaStr);
        }
        console.log("\n"); // Añadir una línea en blanco para mayor legibilidad
    }
}

// Juego
console.log("Bienvenido al tres en raya");
var jugador1 = prompt("Introduce el nombre del primer jugador");
var jugador2 = prompt("Introduce el nombre del segundo jugador");

var juego = new TresEnRaya(jugador1, jugador2);
var ganador = null;

while(!ganador){
    juego.mostrarTablero();

    let fila = prompt("Inserta la fila donde quieres poner tu ficha");
    let colum = prompt("Inserta la columna donde quieres poner tu ficha")

    juego.coloca(juego.turno, fila, colum);

    ganador = juego.compruebaGanador();
    if (!ganador) {
        console.log("Es el turno de " + juego.turno);
    } else {
        ganador = (ganador === "X") ? juego.jugador1 : juego.jugador2;
        juego.mostrarTablero();
        console.log("¡Ha ganado " + ganador + "!");
    }
}
