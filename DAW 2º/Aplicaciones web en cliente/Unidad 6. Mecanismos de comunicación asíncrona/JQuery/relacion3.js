window.onload = () => {
    // Ejercicio 1
    tabla = $("<table>")

    for(let i = 0; i < 8; i++){
        let fila = $("<tr>").text(i);
        tabla.append(fila);
    }
    $("body").append(tabla);

    $("tr:gt(2)").css('background-color','red')
    $("tr:eq(3)").text('')
    $("tr:lt(2)").css('background-color','blue')

    // Ejercicio 2
    $("p:contains('eu')").css('background-color','blue');

    // Ejercicio 3
    
}