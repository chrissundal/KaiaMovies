function goCategory(){
    window.location.hash = "category";
    navigateToCategory()
}
function navigateToCategory() {
    model.app.currentPage = model.app.pages[2];
    model.app.isOpenMovie = false;
    changeView();
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

function readFile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            model.input.addMovies.movieImage = event.target.result;
        }
        reader.readAsDataURL(file);
    }
}
function submitNewMovie() {
    if (model.input.addMovies.name && model.input.addMovies.category && model.input.addMovies.movieImage && model.input.addMovies.actors && model.input.addMovies.director && model.input.addMovies.year && model.input.addMovies.rating && model.input.addMovies.description) {
        const existingMovie = model.data.movies.find(movie => movie.name === model.input.addMovies.name);
        if (existingMovie) {
            model.input.login.showLogin = `Film er allerede lagt til`;
            addNewMovies();
        } else {
            model.data.movies.push({
                name: model.input.addMovies.name,
                rating: [model.input.addMovies.rating],
                avgRating: model.input.addMovies.rating,
                category: model.input.addMovies.category,
                movieImage: model.input.addMovies.movieImage,
                actors: [model.input.addMovies.actors],
                director: model.input.addMovies.director,
                year: model.input.addMovies.year,
                comments: [],
                description: model.input.addMovies.description
            });
            updateCategoryView();
        }
    } else {
        model.input.login.showLogin = `Vennligst fyll inn alle felter`;
        addNewMovies();
    }
}
function cancelNewMovie() {
    updateCategoryView();
}