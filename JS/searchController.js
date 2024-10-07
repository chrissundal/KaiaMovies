function goSearch() {
    model.app.currentPage = model.app.pages[1]
    model.app.isOpenMovie = false;
    changeView()
}
function searchPageResult() {
    const inputSearch = model.input.search.inputSearch;
    model.input.search.showSearch = searchMovies(inputSearch);
    if (model.input.search.showSearch.length == 0) {
        model.input.search.searchResults = `
    <tr><td>
    Ingen filmer funnet
    </td></tr>`;
    } else {
        model.input.search.searchResults = createSearchPage()
    }
    updateSearchView();
}
function searchMovies(inputSearch) {
    return model.data.movies.filter(movie => {
        return movie.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            movie.category.toLowerCase().includes(inputSearch.toLowerCase()) ||
            movie.actors.some(actor => actor.toLowerCase().includes(inputSearch.toLowerCase())) ||
            movie.director.toLowerCase().includes(inputSearch.toLowerCase()) ||
            movie.year.toString().includes(inputSearch);
    });
}
function createSearchPage() {
    let html = '';
    for (let index = 0; index < model.input.search.showSearch.length; index++) {
        const movie = model.input.search.showSearch[index];
        html += `
            <tr onclick="goMovie('${movie.name}')">
                <td><img src="${movie.movieImage}" height = 70px width = 50px/></td>
                <td><div class="searchPageText">${movie.name}</div></td>
                <td><div class="searchPageText">${movie.category}</div></td>
                <td><div class="searchPageRating">${movie.avgRating} /1000</div></td>
                <td><div class="searchPageYear">${movie.rating.length}</div></td>
                <td><div class="searchPageYear">${movie.year}</div></td>
            </tr>
            `;
    }
    return html;
}