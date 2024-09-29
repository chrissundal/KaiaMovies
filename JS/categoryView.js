updateCategoryView();
function updateCategoryView(){
    categoryPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
       <div style="color: white">category</div>
    </div>
    <div class="categorySortRating">
        <button class="sortButton" onclick="sortMovies('rating')">Rating</button>
    <div class="categorySortYear">
        <button class="sortButton" onclick="sortMovies('year')">Year</button>
    </div>
    <div class="categorySortComment">
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
    html += `
    <div class="movieBox" onclick="goMovie(${index})">
    <div class="movieRating">${model.data.movies[index].avgRating}</div>
    <br>
    <img src="${model.data.movies[index].movieImage}" height = 130px width = 90px/>
    <br>
    <div class="movieText">${model.data.movies[index].name}</div>
    </div>
    `;
}
return html;
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
