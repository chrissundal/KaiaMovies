updateCategoryView();
function updateCategoryView(){
    model.input.addMovies.name ='';
    model.input.addMovies.rating ='';
    model.input.addMovies.rating = '';
    model.input.addMovies.category = '';
    model.input.addMovies.movieImage = '';
    model.input.addMovies.actors = '';
    model.input.addMovies.director = '';
    model.input.addMovies.year = '';
    model.input.addMovies.description ='';
    model.input.login.showLogin = '';
        categoryPage = /*HTML*/`
        <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="homeIcon" onclick="goHomeButton()">
            <img src="IMG/back.png" height = 80px>
        </div>
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        </div>
        <div class="categorySort">
        <button class="sortButton" onclick="sortMovies('rating')">Rating</button>
        <button class="sortButton" onclick="sortMovies('year')">Year</button>
        <button class="sortButton" onclick="sortMovies('comments')">Comments</button>
        ${createCategoryAdmin()}
        </div>
        <div class="movieGrid">
        ${createMovieList()}
        </div> 
        `;
    
    appDiv.innerHTML = categoryPage;
    calculateRating();
}
function createCategoryAdmin(){
    if(model.data.users[model.input.profile.selectedUser].isAdmin) return `<button class="sortButton" onclick="addNewMovies()">Add new</button>`;
    return '';
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
function addNewMovies(){
    categoryPage = /*HTML*/`
    <div class="container">
        <div class="mainStartText">Legg til film</div>
        <div class="mainaddBox">
            <div class="loginBox">
                <input type="text" placeholder="Filmtittel" value="${model.input.addMovies.name ?? ''}" oninput="model.input.addMovies.name=this.value" required>
                <input type="text" placeholder="Kategori" value="${model.input.addMovies.category ?? ''}" oninput="model.input.addMovies.category=this.value" required>
                <input type="file" placeholder="Last opp bilde" value="${model.input.addMovies.movieImage ?? ''}" onchange="readFile(this)" required>
                <input type="text" placeholder="Skuespillere" value="${model.input.addMovies.actors ?? ''}" oninput="model.input.addMovies.actors=this.value" required>
                <input type="text" placeholder="Regissør" value="${model.input.addMovies.director ?? ''}" oninput="model.input.addMovies.director=this.value" required>
                <input type="number" placeholder="År laget" value="${model.input.addMovies.year ?? ''}" oninput="model.input.addMovies.year=this.valueAsNumber" required>
                <input type="number" placeholder="Rating" value="${model.input.addMovies.rating ?? ''}" oninput="model.input.addMovies.rating=this.valueAsNumber" required>
                <input type="text" placeholder="Om filmen" value="${model.input.addMovies.description ?? ''}" oninput="model.input.addMovies.description=this.value" required>
                ${model.input.login.showLogin}
                <button onclick="submitNewMovie()">Legg til</button>
                <button onclick="cancelNewMovie()">Avbryt</button>
            </div>
        </div>
    </div>
    `;
    appDiv.innerHTML = categoryPage;
}