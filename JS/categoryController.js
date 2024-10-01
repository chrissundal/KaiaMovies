function goCategory(){
    model.app.currentPage = model.app.pages[2]
    model.app.isOpenMovie = false;
    changeView()
}
function sortMovies(criteria) {
    if (criteria === 'rating') {
        model.data.movies.sort((a, b) => b.avgRating - a.avgRating);
    } else if (criteria === 'year') {
        model.data.movies.sort((a, b) => b.year - a.year);
    } else if (criteria === 'comments') {
        model.data.movies.sort((a, b) => b.comments.length - a.comments.length);
    }
    updateCategoryView();
}