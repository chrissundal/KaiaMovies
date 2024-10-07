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
    const allMovies = model.data.movies;
    const filteredMovies = allMovies.filter(movie => !model.data.users[model.input.profile.selectedUser].watchlist.find(m => m.name === movie.name) && movie.avgRating >= 800);

    while (model.input.mainPage.uniqueMovies.length < 4 && filteredMovies.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMovies.length);
        model.input.mainPage.uniqueMovies.push(filteredMovies[randomIndex]);
        filteredMovies.splice(randomIndex, 1);
    }

    for (let index = 0; index < model.input.mainPage.uniqueMovies.length; index++) {
        html += `
        <div class="movieBox" onclick="goMovie('${model.input.mainPage.uniqueMovies[index].name}')">
            <div class="movieRating">${model.input.mainPage.uniqueMovies[index].avgRating}</div>
            <br>
            <img src="${model.input.mainPage.uniqueMovies[index].movieImage}" height="130px" width="90px"/>
            <br>
            <div class="movieText">${model.input.mainPage.uniqueMovies[index].name}</div>
        </div>
        `;
    }

    return html;
}
