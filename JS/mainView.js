updateMainView();
function updateMainView(){
    startPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick=""><img src="IMG/profile.png" height = 60px></div>
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
function createMainMovieList(){
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