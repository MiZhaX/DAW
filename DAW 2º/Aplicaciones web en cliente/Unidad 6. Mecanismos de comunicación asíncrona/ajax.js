window.onload = () => {
    document.getElementById("btn").addEventListener("click", peticionAjaxModerna);
}

function peticionAjax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            respuesta = JSON.parse(this.responseText);
            document.getElementById("titulo").innerHTML = "He recibido " + respuesta.usuarios.length + " usuarios";

            var lista = document.createElement("div");
            for (usuario of respuesta.usuarios) {
                var nombre = document.createElement("li");
                nombre.innerHTML = usuario.nombre;

                lista.appendChild(nombre);
            }

            document.body.appendChild(lista);
        }
    }
    xhttp.open("GET", "alumnos.json", true);
    xhttp.send();
}

function peticionAjaxModerna() {
    fetch("alumnos.json", { method: "GET" }).then((res) => res.json()).then((json) => {
        document.getElementById("titulo").innerHTML = "He recibido " + json.usuarios.length + " usuarios";

        var lista = document.createElement("div");
        for (usuario of json.usuarios) {
            var nombre = document.createElement("li");
            nombre.innerHTML = usuario.nombre;

            lista.appendChild(nombre);
        }

        document.body.appendChild(lista);
    }).catch((err) => console.error("Error: ", err));
}