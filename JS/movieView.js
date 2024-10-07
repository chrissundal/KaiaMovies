updateMovieView();
function updateMovieView() {
    moviePage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="homeIcon" onclick="goCategory()">
            <img src="IMG/back.png" height = 80px>
        </div>
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        ${createMovieInfo()}
        <div class="movieFullComment">
                ${createMovieComments()}
                
            </div>
            `;
            appDiv.innerHTML = moviePage;
            calculateRating();
        }
        function createMovieInfo() {
            let html = '';
            const selectedMovie = model.data.movies[model.input.moviePage.selectedNumber];
            let numberOfRatings = selectedMovie.rating.length;
            html = `
            <div class="mainFullMovie">
            <div class="movieFullHeader">${selectedMovie.name}</div>
            <br>
            <img src="${selectedMovie.movieImage}" height = 400px width = 300px/>
            <br>
            <div class="movieFullCommentInput">
            ${checkFavorites()}
            ${checkWatched()}
            </div>
            <div class="movieOptions">
            
            </div>
            <div class="movieFullDescription">${selectedMovie.description}</div>
            <br>
            <div class="movieFullFacts">
                <div>Gjennomsnitt rating: <strong style="color: yellow; font-size: 30px">${selectedMovie.avgRating}</strong> / 1000</div>
                <div>Antall ratings: ${numberOfRatings}</div>
                <div>Kategori: ${selectedMovie.category}</div>
                <div>Skuespillere: ${selectedMovie.actors.join(', ')}</div>
                <div>Regissør: ${selectedMovie.director}</div>
                <div>År laget: ${selectedMovie.year}</div>
            </div>
            
        </div>
        `;
    return html;
}

