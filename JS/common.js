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