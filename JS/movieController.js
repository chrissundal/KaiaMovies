function goMovie(movieName){
    window.location.hash = `#movie-${movieName}`;
    navigateToMovie(movieName);
}
function navigateToMovie(movieName) {
    model.app.currentPage = model.app.pages[4];
    let selectedMovie = model.data.movies.find(movie => movie.name === movieName);
    if (selectedMovie) {
        model.input.moviePage.selectedNumber = model.data.movies.indexOf(selectedMovie);
    }
    model.input.mainPage.uniqueMovies = [];
    model.app.isOpenMovie = false;
    changeView();
}
function sendMovieRating(){
    let inputRating = model.input.moviePage.inputRating;
    let thisDate = new Date().toLocaleDateString()
    let thisTime = new Date().toLocaleTimeString()
    let selectedUser = model.data.users[model.input.profile.selectedUser];
    let selectedMovie = model.data.movies[model.input.moviePage.selectedNumber]
    selectedMovie.rating.push(inputRating)
    let inputComment = model.input.moviePage.inputComment;
    selectedMovie.comments.push(
        {
        date: thisDate,
        time: thisTime,
        userName: selectedUser.userName,
        comment: inputComment,
        rating: inputRating
        }
        )
        selectedUser.comments.push(
        {
        date: thisDate,
        time: thisTime,
        movie: selectedMovie.name,
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
    let favIndex = model.data.users[model.input.profile.selectedUser].favorites.findIndex(movie => movie.name === selectedMovieName);
    let selectedUser = model.data.users[model.input.profile.selectedUser];
    if (favIndex === -1) {
        selectedUser.favorites.push({ name: selectedMovieName });
    } else {
        selectedUser.favorites.splice(favIndex, 1);
    }
    updateMovieView();
}

function addToWatched(selectedMovieName) {
    let watchIndex = model.data.users[model.input.profile.selectedUser].watchlist.findIndex(movie => movie.name === selectedMovieName);
    let selectedUser = model.data.users[model.input.profile.selectedUser];
    if (watchIndex === -1) {
        selectedUser.watchlist.push({ name: selectedMovieName });
    } else {
        selectedUser.watchlist.splice(watchIndex, 1);
    }
    updateMovieView();
}
function inputMovieRating(text) {
    model.input.moviePage.inputRating = text;
    updateMovieView();
}

function changeMovieRating(newRating, index) {
    let selectedUser = model.data.users[model.input.profile.selectedUser]
    let selectedMovie = model.data.movies[model.input.moviePage.selectedNumber]
    let userCommentIndex = selectedUser.comments.findIndex(comment => comment.movie === selectedMovie.name && comment.comment === selectedMovie.comments[index].comment);
    selectedMovie.rating[index] = newRating;
    selectedMovie.comments[index].rating = newRating;
    if (userCommentIndex !== -1) {
        selectedUser.comments[userCommentIndex].rating = newRating;
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
    let selectedMovieName = model.data.movies[model.input.moviePage.selectedNumber].name;
    let isWatched = model.data.users[model.input.profile.selectedUser].watchlist.find(movie => movie.name === selectedMovieName);
    
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