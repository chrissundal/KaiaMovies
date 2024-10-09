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
function createMovieComments() {
    let html = '';
    for (let comIndex = model.data.movies[model.input.moviePage.selectedNumber].comments.length -1; comIndex >= 0;  comIndex--) {
        if (model.data.users[model.input.profile.selectedUser].isAdmin) {
            html += `
            <div class="movieFullCommentFrame">
            <div style="text-align: center;">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].userName} skrev:</div>
            <div>${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].comment}</div>
            <div style="text-align: center; color: yellow">Rating: ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].rating} / 1000</div>
            <div style="text-align: center; font-size: 10px">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].date}  ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].time}</div>
            <button onclick="deleteMovieRating(${comIndex})">Slett</button>
            <input type="number" placeholder="Endre rating... "onchange="changeMovieRating(this.valueAsNumber, ${comIndex})">
            </div>
            `;
        }else{
            html += `
            <div class="movieFullCommentFrame">
            <div style="text-align: center;">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].userName} skrev:</div>
            <div>${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].comment}</div>
            <div style="text-align: center; color: yellow">Rating: ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].rating} / 1000</div>
            <div style="text-align: center; font-size: 10px">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].date}  ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].time}</div>
            </div>
            `;
        }
    }
    return html;
}
