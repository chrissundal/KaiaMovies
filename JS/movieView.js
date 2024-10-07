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

function checkFavorites() {
    const selectedMovieName = model.data.movies[model.input.moviePage.selectedNumber].name;
    const isFavorite = model.data.users[model.input.profile.selectedUser].favorites.find(movie => movie.name === selectedMovieName);
    
    if (!isFavorite) {
        return `<div class="movieFullIcons" onclick="addToFavorite('${selectedMovieName}')">
                    <img src="IMG/heart.png" height="50px"/>
                </div>`;
    } else {
        return `<div class="movieFullIcons" onclick="addToFavorite('${selectedMovieName}')">
                    <img src="IMG/heartfull.png" height="50px"/>
                </div>`;
    }
}

function checkWatched() {
    const selectedMovieName = model.data.movies[model.input.moviePage.selectedNumber].name;
    const isWatched = model.data.users[model.input.profile.selectedUser].watchlist.find(movie => movie.name === selectedMovieName);
    
    if (!isWatched) {
        return `<div class="movieFullIconwatch" onclick="addToWatched('${selectedMovieName}')">
                    <img src="IMG/eye.png" height="50px"/>
                </div>`;
    } else {
        return `<div class="movieFullIconwatch" onclick="addToWatched('${selectedMovieName}')">
                    <img src="IMG/check.png" height="50px"/>
                </div>
                <div class="movieFullRating">
                    <input type="range" value="${model.input.moviePage.inputRating}" placeholder="Rating" onchange="inputMovieRating(this.valueAsNumber)" max="1000"> ${model.input.moviePage.inputRating}
                    <input type="text" placeholder="skriv en anmeldelse" onchange="model.input.moviePage.inputComment=this.value">
                    <button onclick="sendMovieRating()">Send</button>
                </div>`;
    }
}
function inputMovieRating(text) {
    model.input.moviePage.inputRating = text;
    updateMovieView();
}
function createMovieComments() {
    let html = '';
    for (let comIndex = model.data.movies[model.input.moviePage.selectedNumber].comments.length -1; comIndex >= 0;  comIndex--) {
        html += `
        <div class="movieFullCommentFrame">
            <div style="text-align: center;">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].userName} skrev:</div>
            <div>${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].comment}</div>
            <div style="text-align: center; color: yellow">Rating: ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].rating} / 1000</div>
            <div style="text-align: center; font-size: 10px">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].date}  ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].time}</div>
        </div>
        `;
    }
    return html;
}