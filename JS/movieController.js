function goMovie(movieName){
    model.app.currentPage = model.app.pages[4];
    const selectedMovie = model.data.movies.find(movie => movie.name === movieName);
    if (selectedMovie) {
        model.input.moviePage.selectedNumber = model.data.movies.indexOf(selectedMovie);
    }
    model.input.mainPage.uniqueMovies = [];
    model.app.isOpenMovie = false;
    updateMovieView();
}
function sendMovieRating(){
    let inputRating = model.input.moviePage.inputRating;
    let thisDate = new Date().toLocaleDateString()
    let thisTime = new Date().toLocaleTimeString()
    model.data.movies[model.input.moviePage.selectedNumber].rating.push(inputRating)
    let inputComment = model.input.moviePage.inputComment;
    model.data.movies[model.input.moviePage.selectedNumber].comments.push(
        {
        date: thisDate,
        time: thisTime,
        userName: model.data.users[model.input.profile.selectedUser].userName,
        comment: inputComment,
        rating: inputRating
        }
        )
    model.data.users[model.input.profile.selectedUser].comments.push(
        {
        date: thisDate,
        time: thisTime,
        movie: model.data.movies[model.input.moviePage.selectedNumber].name,
        comment: inputComment,
        rating: inputRating
        }
        )
        model.input.moviePage.inputComment = null;
        model.input.moviePage.inputRating = 0;
    calculateRating();
    updateMovieView();
}
function addToFavorite(selectedMovieName) {
    const favIndex = model.data.users[model.input.profile.selectedUser].favorites.findIndex(movie => movie.name === selectedMovieName);
    
    if (favIndex === -1) {
        model.data.users[model.input.profile.selectedUser].favorites.push({ name: selectedMovieName });
    } else {
        model.data.users[model.input.profile.selectedUser].favorites.splice(favIndex, 1);
    }
    updateMovieView();
}

function addToWatched(selectedMovieName) {
    const watchIndex = model.data.users[model.input.profile.selectedUser].watchlist.findIndex(movie => movie.name === selectedMovieName);
    
    if (watchIndex === -1) {
        model.data.users[model.input.profile.selectedUser].watchlist.push({ name: selectedMovieName });
    } else {
        model.data.users[model.input.profile.selectedUser].watchlist.splice(watchIndex, 1);
    }
    updateMovieView();
}
function inputMovieRating(text) {
    model.input.moviePage.inputRating = text;
    updateMovieView();
}

function changeMovieRating(newRating, index) {
    let userCommentIndex = model.data.users[model.input.profile.selectedUser].comments.findIndex(comment => comment.movie === model.data.movies[model.input.moviePage.selectedNumber].name && comment.comment === model.data.movies[model.input.moviePage.selectedNumber].comments[index].comment);
    model.data.movies[model.input.moviePage.selectedNumber].rating[index] = newRating;
    model.data.movies[model.input.moviePage.selectedNumber].comments[index].rating = newRating;
    if (userCommentIndex !== -1) {
        model.data.users[model.input.profile.selectedUser].comments[userCommentIndex].rating = newRating;
    }
    calculateRating();
    updateMovieView();
}
function deleteMovieRating(index) {
    let selectedMovie = model.data.movies[model.input.moviePage.selectedNumber];
    let selectedUser = model.data.users[model.input.profile.selectedUser];
    let commentToDelete = selectedMovie.comments[index];
    let userCommentIndex = selectedUser.comments.findIndex(comment => comment.movie === selectedMovie.name && comment.comment === commentToDelete.comment);
    selectedMovie.comments.splice(index, 1);
    selectedMovie.rating.splice(index, 1);
    if (userCommentIndex !== -1) {
        selectedUser.comments.splice(userCommentIndex, 1);
    }
    calculateRating();
    updateMovieView();
}
function checkFavorites() {
    let selectedMovieName = model.data.movies[model.input.moviePage.selectedNumber].name;
    let isFavorite = model.data.users[model.input.profile.selectedUser].favorites.find(movie => movie.name === selectedMovieName);
    
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