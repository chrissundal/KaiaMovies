updateMainView();
function updateMainView() {
    startPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        </div>
        <div class="mainStartText">Hei ${model.input.login.userName}</div>
        <div class="mainGridrec">
        ${createMainMovieList()}
        </div>
    `;
    appDiv.innerHTML = startPage;
}

function createHeader() {
    let html = '';
    html = `
    <div class="header" onclick="goHomeButton()">
            <img src="IMG/kaiamovies.png" height = 80px>
        </div>
    `;
    return html;
}
function createDropdownMovie() {
    if (model.app.isOpenMovie == false) return `<div class="movieDropBtn" onclick="openDropdownMovie()"><img src="IMG/search.png" height = 80px></div>`;
    return `
    <div class="dropDownMovie">
    <div class="main">
        <div class="innerDrop" onclick="goSearch()">Filmsøk</div>
        <div class="innerDrop" onclick="goCategory()">Kategorier</div>
        <div class="innerDropClose" onclick="closeDropdownMovie()">Lukk</div>
    </div>
    </div>
    `;
}
function createMainMovieList() {
    let html = '';
    let count = 0;
    const addedMovies = new Set();

    while (count < 4) {
        const movie = model.data.movies[Math.floor(Math.random() * model.data.movies.length)];
        if (movie.avgRating > 860 && !addedMovies.has(movie.name) && !model.data.users[model.input.profile.selectedUser].watchlist.find(m => m.name === movie.name)) {
            html += `
                <div class="movieBox" onclick="goMovie('${movie.name}')">
                    <div class="movieRating">${movie.avgRating}</div>
                    <br>
                    <img src="${movie.movieImage}" height="130px" width="90px"/>
                    <br>
                    <div class="movieText">${movie.name}</div>
                </div>
            `;
            addedMovies.add(movie.name);
            count++;
        }
    }
    return html;
}