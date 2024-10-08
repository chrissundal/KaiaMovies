updateMainView();
function updateMainView() {
    startPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        <div class="logOutBtn" onclick="goLogin()"><img src="IMG/lock.png" height = 70px></div>
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
    if (model.data.users[model.input.profile.selectedUser].isAdmin) {
        html = `
        <div class="header" onclick="goHomeButton()">
            <img src="IMG/kaiamovies.png" height = 80px>
            <div class="adminMark">ADMIN</div>
        </div>
        `;   
    }else{
        html = `
        <div class="header" onclick="goHomeButton()">
        <img src="IMG/kaiamovies.png" height = 80px>
        </div>
        `;
        }
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

    for (let i = 0; i < 4 && filteredMovies.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * filteredMovies.length);
        model.input.mainPage.uniqueMovies.push(filteredMovies[randomIndex]);
        filteredMovies.splice(randomIndex, 1);

        html += `
        <div class="movieBox" onclick="goMovie('${model.input.mainPage.uniqueMovies[i].name}')">
            <div class="movieRating">${model.input.mainPage.uniqueMovies[i].avgRating}</div>
            <br>
            <img src="${model.input.mainPage.uniqueMovies[i].movieImage}" height="130px" width="90px"/>
            <br>
            <div class="movieText">${model.input.mainPage.uniqueMovies[i].name}</div>
        </div>
        `;
    }
    return html;
}
