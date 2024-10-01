updateCategoryView();
function updateCategoryView(){
    categoryPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
    </div>
    <div class="categorySort">
        <button class="sortButton" onclick="sortMovies('rating')">Rating</button>
        <button class="sortButton" onclick="sortMovies('year')">Year</button>
        <button class="sortButton" onclick="sortMovies('comments')">Comments</button>
    </div>
    <div class="movieGrid">
    ${createMovieList()}
    </div> 

    `;
    appDiv.innerHTML = categoryPage;
    calculateRating();
}
function createMovieList(){
    let html = '';
    for(let index = 0; index < model.data.movies.length; index++) {
        const movie = model.data.movies[index];
        html += `
        <div class="movieBox" onclick="goMovie('${movie.name}')">
            <div class="movieRating">${movie.avgRating}</div>
            <br>
            <img src="${movie.movieImage}" height = 130px width = 90px/>
            <br>
            <div class="movieText">${movie.name}</div>
        </div>
        `;
    }
    return html;
}