document.getElementById('buscar').addEventListener(('click'),buscarPelicula)

let api_key = '5f359a2990bab7777d2bb90d27e06a4a'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'


function buscarPelicula(){
    let peliculaBuscar = document.getElementById('pelicula').value
    fetch(`${urlBase}?api_key=${api_key}&query=${peliculaBuscar}`)
    .then(respuesta => respuesta.json())
    .then(respuesta => verContenido(respuesta.results))
}

function verContenido(movies) {
    let resultadoContenedor = document.getElementById('resultado')
    resultadoContenedor.innerHTML=''

    if (movies.length === 0) {
        resultadoContenedor.innerHTML = '<p> No se encontraron resultados para tu busqueda</p>'   
        return
    }

    movies.forEach(movie => {
        let peliculaDiv = document.createElement('div')
        peliculaDiv.classList.add('pelicula')

        let titulo = document.createElement('h2')
        titulo.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path

        let poster = document.createElement('img')
        poster.src = posterPath

        peliculaDiv.appendChild(poster)
        peliculaDiv.appendChild(titulo)
        peliculaDiv.appendChild(releaseDate)
        peliculaDiv.appendChild(overview)

        resultadoContenedor.appendChild(peliculaDiv)
    });
}