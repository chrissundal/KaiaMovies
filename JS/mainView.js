updateMainView();
function updateMainView() {
    startPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
    </div>
    <div class="mainStartText"><h1>Hei ${model.input.login.userName}</h1> <br>
    <div class="mainStartTextInfo"><h1>Her er noen utvalgte filmer:</h1></div>
    </div>
    <div class="mainGridrec">
        ${createMainMovieList()}
    </div>
    `;
    appDiv.innerHTML = startPage;
}

function createHeader() {
    let html = '';
    let adminMark = model.data.users[model.input.profile.selectedUser].isAdmin ? '<div class="adminMark">ADMIN</div>' : '';
        html = `
        <div class="header">
            <img src="IMG/kaiamovies.png" height = 80px onclick="goHomeButton()">
            ${adminMark}
        </div>
        <div class="movieDropBtn" onclick="openDropdownMovie()"><img src="IMG/menu.png" height = 70px></div>
        `;   
    return html;
}

function createDropdownMovie() {
    if (model.app.isOpenMovie == false) return '';
    return `
    <div class="dropDownMovie">
    <div class="main">
        <div class="userNameHeader">${model.data.users[model.input.profile.selectedUser].userName}</div>
        <div class="innerDrop" onclick="goProfile()">Min profil</div>
        <div class="innerDrop" onclick="goHomeButton()">Forside</div>
        <div class="innerDrop" onclick="goSearch()">Filmsøk</div>
        <div class="innerDrop" onclick="goCategory()">Alle filmer</div>
        <div class="innerDrop" onclick="goLogin()">Logg ut</div>
        <div class="innerDropClose" onclick="closeDropdownMovie()">Lukk</div>
    </div>
    </div>
    `;
}
function createMainMovieList() {
    let html = '';
    let allMovies = model.data.movies;
    let filteredMovies = allMovies.filter(movie => !model.data.users[model.input.profile.selectedUser].watchlist.find(m => m.name === movie.name) && movie.avgRating >= 800);

    for (let i = 0; i < 5 && filteredMovies.length > 0; i++) {
        let randomIndex = Math.floor(Math.random() * filteredMovies.length);
        model.input.mainPage.uniqueMovies.push(filteredMovies[randomIndex]);
        filteredMovies.splice(randomIndex, 1);

        html += `
        <div class="movieBox" onclick="goMovie('${model.input.mainPage.uniqueMovies[i].name}')">
            <div class="movieRating">${model.input.mainPage.uniqueMovies[i].avgRating}</div>
            <img src="${model.input.mainPage.uniqueMovies[i].movieImage}" height="130px" width="90px"/>
            <br>
            <div class="movieText">${model.input.mainPage.uniqueMovies[i].name}</div>
        </div>
        `;
    }
    return html;
}