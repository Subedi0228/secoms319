function getInputValue(){
    let movieName = document.forms["my_form"]["inputMovieName"];
    let inputMovieName = movieName.value;
    console.log(inputMovieName);

    fetch("./csubedi1_Activity09_movies.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

    function loadMovies(myMovies){
        var mainContainer = document.getElementById("goodmovies");
          
        for (var i=0; i<myMovies.movies.length; i++){
            if(myMovies.movies[i].title=== inputMovieName){
                let title = myMovies.movies[i].title;
                let year = myMovies.movies[i].year;
                let url = myMovies.movies[i].url;
                let div = document.createElement("div");
                div.innerHTML = `
                <h3>${title}</h3>
                ${year} <br>
                <img src = ${url} width = "200"> <br> <br>
                `;
                mainContainer.appendChild(div);
                //console.log(div);
                //basically in this code the user has to type in The Last Airbender
                //in the search box
            }
        }
    }
}