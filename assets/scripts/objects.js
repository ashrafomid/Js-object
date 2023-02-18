const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovie = ()=>{
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML ='';
    if(movies.length===0){
        movieList.classList.remove('visible');
    }
    else{
        movieList.classList.add('visible');
    }
    movies.forEach((element)=>{
        const movieEl = document.createElement('li');
        movieEl.textContent = element.info.title;
        movieList.append(movieEl);
    })
}

const addMovieHandler = ()=>{
    const title = document.getElementById('title').value;
    const Extraname = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    if(title.trim()===''|| Extraname.trim()===''||extraValue.trim()===''){
        return;
    }
    const newMovie = {
        info: {
            title,
            [Extraname]: extraValue
        },
        id: Math.random()
    }
    movies.push(newMovie);
    renderMovie();
}
addMovieBtn.addEventListener('click',addMovieHandler);