updateMainView();
function updateMainView(){
    startPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        </div>
        <div class="mainGridrec">
        ${createMainMovieList()}
        </div>
    `;
    appDiv.innerHTML = startPage;
}
function createHeader(){
    let html = '';
    html = `
    <div class="header" onclick="goHomeButton()">
            <img src="IMG/kaiamovies.png" height = 80px>
        </div>
        <div class="homeIcon" onclick="history.back()">
            <img src="IMG/back.png" height = 80px>
        </div>
    `;
    return html;
}
function createDropdownMovie(){
    if (model.app.isOpenMovie == false) return `<div class="movieDropBtn" onmouseover="openDropdownMovie()"><img src="IMG/search.png" height = 80px></div>`;
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
    let randomNumberMain = 0;
    let count = 0;
    let addedMovies = new Set();
    
    while (count < 4) {
        randomNumberMain = Math.floor(Math.random() * model.data.movies.length);
        if (model.data.movies[randomNumberMain].avgRating > 860 && !addedMovies.has(randomNumberMain)) {
            console.log(randomNumberMain);
            html += `
            <div class="movieBox" onclick="goMovie(${randomNumberMain})">
                <div class="movieRating">${model.data.movies[randomNumberMain].avgRating}</div>
                <br>
                <img src="${model.data.movies[randomNumberMain].movieImage}" height="130px" width="90px"/>
                <br>
                <div class="movieText">${model.data.movies[randomNumberMain].name}</div>
            </div>
            `;
            addedMovies.add(randomNumberMain);
            count++;
        }
    }
    return html;
}