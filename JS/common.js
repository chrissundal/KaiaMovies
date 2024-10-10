function calculateRating(){
    let sum = model.data.movies[`${model.input.moviePage.selectedNumber}`].rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let ratingLength = model.data.movies[`${model.input.moviePage.selectedNumber}`].rating.length
    let averageRating = sum / ratingLength;
    model.data.movies[`${model.input.moviePage.selectedNumber}`].avgRating = averageRating.toFixed(0);
}
function openDropdownMovie() {
    model.app.isOpenMovie = true;
    changeView();
}
function closeDropdownMovie() {
    model.app.isOpenMovie = false;
    changeView();
}
window.onpopstate = function () {
    const page = location.hash.substr(1);
    if (page.startsWith("movie-")) {
        const movieName = page.replace("movie-", "");
        navigateToMovie(movieName);
    } else if (page === "login") {
        navigateToLogin();
    } else if (page === "home") {
        navigateToHome();
    } else if (page === "category") {
        navigateToCategory();
    } else if (page === "search") {
        navigateToSearch();
    } else if (page === "profil") {
        navigateToProfile();
    } else if (page === "friend") {
        navigateToFriend();
    } else {
        navigateToHome();
    }
}