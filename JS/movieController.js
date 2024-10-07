function goMovie(movieName){
    model.app.currentPage = model.app.pages[4];
    const selectedMovie = model.data.movies.find(movie => movie.name === movieName);
    if (selectedMovie) {
        model.input.moviePage.selectedNumber = model.data.movies.indexOf(selectedMovie);
    }
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
    const user = model.data.users[model.input.profile.selectedUser];
    const favIndex = user.favorites.findIndex(movie => movie.name === selectedMovieName);
    
    if (favIndex === -1) {
        user.favorites.push({ name: selectedMovieName });
    } else {
        user.favorites.splice(favIndex, 1);
    }
    updateMovieView();
}

function addToWatched(selectedMovieName) {
    const user = model.data.users[model.input.profile.selectedUser];
    const watchIndex = user.watchlist.findIndex(movie => movie.name === selectedMovieName);
    
    if (watchIndex === -1) {
        user.watchlist.push({ name: selectedMovieName });
    } else {
        user.watchlist.splice(watchIndex, 1);
    }
    updateMovieView();
}