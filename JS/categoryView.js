updateCategoryView();
function updateCategoryView(){
    if(model.data.users[model.input.profile.selectedUser].isAdmin) {
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
        <button class="sortButton" onclick="addNewMovies()">Add new</button>
        </div>
        <div class="movieGrid">
        ${createMovieList()}
        </div> 
        `;
    }else{
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
    }

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

function addNewMovies(){
    categoryPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        <div class="mainStartText">Legg til film</div>
        <div class="mainaddBox">
            <div class="loginBox">
                <input type="text" placeholder="Filmtittel" oninput="model.input.addMovies.name=this.value" required>
                <input type="text" placeholder="Kategori" oninput="model.input.addMovies.category=this.value" required>
                <input type="file" placeholder="Last opp bilde" oninput="model.input.addMovies.movieImage=this.value">
                <input type="text" placeholder="Skuespillere" oninput="model.input.addMovies.actors=this.value" required>
                <input type="text" placeholder="Regissør" oninput="model.input.addMovies.director=this.value" required>
                <input type="number" placeholder="År laget" oninput="model.input.addMovies.year=this.valueAsNumber" required>
                <input type="number" placeholder="Rating" oninput="model.input.addMovies.rating=this.valueAsNumber" required>
                <input type="text" placeholder="Om filmen" oninput="model.input.addMovies.description=this.value" required>
                ${model.input.login.showLogin}
                <button onclick="submitNewMovie()">Legg inn</button>
            </div>
        </div>
    </div>
    `;
    appDiv.innerHTML = categoryPage;
}
function submitNewMovie(){
    const existingMovie = model.data.movies.find(movie => movie.name === model.input.addMovies.name);

    if (existingMovie) {
        model.input.login.showLogin = `Film er allerede lagt til`;
        addNewMovies();
    }else{
        model.data.movies.push(
            {
                name: model.input.addMovies.name,
                rating: [model.input.addMovies.rating],
                avgRating: model.input.addMovies.rating,
                category: model.input.addMovies.category,
                movieImage: model.input.addMovies.movieImage,
                actors: [
                    model.input.addMovies.actors
                ],
                director: model.input.addMovies.director,
                year: model.input.addMovies.year,
                comments: [],
                description: model.input.addMovies.description
            }
        );   
        model.input.login.showLogin = '';
        updateCategoryView();
    }
}