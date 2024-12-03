// Variables globales
var peticionEnCurso = false;

// Onload
window.onload = () => {
    const barra = document.getElementById("busqueda");
    const encontrados = document.getElementById("encontrados");
    var pagina = 1;

    var tipoBusqueda = "movie";

    barra.addEventListener("input", () => {
        var buscar = barra.value;
        if (buscar.length >= 3) {
            pagina = 1;
            const url = `https://www.omdbapi.com/?apikey=2d3d2148&s=${buscar}&page=${pagina}&type=${tipoBusqueda}`;

            encontrados.style.display = "flex";

            peticionAjaxModerna(url, true);
        }
    });

    document.getElementById("btn").addEventListener("click", () => {
        var buscar = barra.value;
        pagina = 1;
        var url = `https://www.omdbapi.com/?apikey=2d3d2148&s=${buscar}&page=${pagina}&type=${tipoBusqueda}`;

        encontrados.style.display = "flex";
        
        peticionAjaxModerna(url, true);
    });

    document.getElementById("peliculas").addEventListener("click", () => {
        tipoBusqueda = "movie"; 
        console.log("mostrando películas");
    });

    document.getElementById("series").addEventListener("click", () => {
        tipoBusqueda = "series";
        console.log("mostrando series");
    });

    window.addEventListener("scroll", () => {
        const finalPagina = window.innerHeight + document.documentElement.scrollTop >= (document.body.offsetHeight * 0.7);

        if (finalPagina && !peticionEnCurso) {
             
            peticionEnCurso = true;
            pagina++;
            var buscar = barra.value;
            var url = `https://www.omdbapi.com/?apikey=2d3d2148&s=${buscar}&page=${pagina}&type=${tipoBusqueda}`;
           
            peticionAjaxModerna(url, false);
        }
    });
}

function peticionAjaxModerna(url, recarga) {
    const contenedor = document.getElementById("carga-contenedor");
    contenedor.style.visibility = "visible";

    fetch(url, { method: "GET" }).then((res) => res.json()).then((json) => {
        var lista = document.getElementById("lista"); 
        if (recarga) {
            lista.innerHTML = ""; 
        }
        
        var resultados = document.getElementById("encontrados");

        if (json.totalResults) {
            resultados.innerText = `Se han encontrado ${json.totalResults} resultados`;
        } else {
            resultados.innerText = `Se han encontrado 0 resultados`;
        }
        if(json.Search){
            json.Search.forEach(element => {
                var pelicula = document.createElement("div");
                pelicula.className = "pelicula";
        
                var nombre = document.createElement("p");
                nombre.innerHTML = element.Title;
                nombre.innerHTML += " - " + element.Year;

                var poster = document.createElement("img");

                if(element.Poster == "N/A") poster.setAttribute("src", "./img/generico.png"); 
                else poster.setAttribute("src", element.Poster); 

                poster.className = "poster";
                poster.idpeli = element.imdbID;
                poster.addEventListener("click", pedirPelicula);

                pelicula.appendChild(nombre);
                pelicula.appendChild(poster);

                lista.appendChild(pelicula);
            });
        }

        console.log(json);
        contenedor.style.visibility = "hidden";
        peticionEnCurso = false;
    }).catch((err) => {
        console.error("Error: ", err);
        contenedor.style.visibility = "hidden";
        peticionEnCurso = false;
    });
}

function pedirPelicula(e) {
    const carga = document.getElementById("carga-contenedor");
    carga.style.visibility = "visible";

    const url = `https://www.omdbapi.com/?apikey=2d3d2148&i=${e.target.idpeli}`;

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    const detalles = document.createElement("div");
    detalles.className = "detalles";

    const botonCerrar = document.createElement("button");
    botonCerrar.className = "cerrar";
    botonCerrar.innerHTML = "x";
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(contenedor);
        document.body.style.overflow = "auto"; 
    });

    fetch(url, { method: "GET" })
        .then((res) => res.json())
        .then((json) => {
            detalles.innerHTML = `
                <h2>${json.Title} (${json.Year}, ${json.imdbRating}, ${json.Runtime})</h2>
                <p><strong>Director:</strong> ${json.Director}</p>
                <p><strong>Actors:</strong> ${json.Actors}</p>
                <p><strong>Plot:</strong> ${json.Plot}</p>`;
            
            if (json.Ratings && json.Ratings.length > 0) {
                detalles.innerHTML += `<strong>Ratings: </strong>`;
                json.Ratings.forEach(element => {
                    detalles.innerHTML += `${element.Source}: ${element.Value}, `;
                });
                detalles.innerHTML += `<br>`; 
            }

            if (json.Poster === "N/A") {
                detalles.innerHTML += `<img src="./img/generico.png" alt="${json.Title}" style="max-width: 100%;">`;
            } else {
                detalles.innerHTML += `<img src="${json.Poster}" alt="${json.Title}" style="max-width: 100%;">`;
            }

            detalles.appendChild(botonCerrar);
            contenedor.appendChild(detalles);

            console.log(json);
            carga.style.visibility = "hidden";
        })
        .catch((err) => {
            console.error("Error: ", err);
            carga.style.visibility = "hidden";
        });

    document.body.appendChild(contenedor);
    document.body.style.overflow = "hidden"; 
}

