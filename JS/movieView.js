updateMovieView();
function updateMovieView(){
    moviePage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="homeIcon" onclick="goCategory()">
            <img src="IMG/back.png" height = 80px>
        </div>
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        ${createMovieInfo()}
        `;
        appDiv.innerHTML = moviePage;
        calculateRating();
    }
    
    function createMovieInfo(){
        let html = '';
        let numberOfRatings = model.data.movies[model.input.moviePage.selectedNumber].rating.length; 
            html = `
            <div class="mainFullMovie">
            <div class="movieFullHeader">${model.data.movies[model.input.moviePage.selectedNumber].name}</div>
            <br>
            <img src="${model.data.movies[model.input.moviePage.selectedNumber].movieImage}" height = 400px width = 300px/>
            <br>
            <div class="movieFullIcons">
            <img src="IMG/heart.png" height = 50px/>
            </div>
            <div class="movieFullDescription">${model.data.movies[model.input.moviePage.selectedNumber].description}</div>
            <br>
            <div class="movieFullFacts">
            <div>Gjennomsnitt rating: <strong style="color: yellow; font-size: 30px">${model.data.movies[model.input.moviePage.selectedNumber].avgRating}</strong> / 1000</div>
            <div>Antall ratings: ${numberOfRatings}</div>
            <div>Kategori: ${model.data.movies[model.input.moviePage.selectedNumber].category}</div>
            <div>Skuespillere: ${model.data.movies[model.input.moviePage.selectedNumber].actors}</div>
            <div>Regissør: ${model.data.movies[model.input.moviePage.selectedNumber].director}</div>
            <div>År laget: ${model.data.movies[model.input.moviePage.selectedNumber].year}</div>
            </div>
            <div class="movieFullCommentInput">
            <div>
            <input type="range" value="${model.input.moviePage.inputRating}" placeholder ="Rating" onchange="inputMovieRating(this.valueAsNumber)" max="1000"> ${model.input.moviePage.inputRating}
            </div>
            <br>
                <input type="text" placeholder ="skriv en anmeldelse" onchange="model.input.moviePage.inputComment=this.value">
                <button onclick="sendMovieRating()">Send</button>
            </div>
            <div class="movieFullComment">
                ${createMovieComments()}
            </div>
            </div>
            `;
            return html;
            }
            function inputMovieRating(text){
            model.input.moviePage.inputRating = text;
            updateMovieView();
            }
            function createMovieComments(){
                let html = '';
                for(let comIndex = 0; comIndex < model.data.movies[model.input.moviePage.selectedNumber].comments.length; comIndex++) {
                    html +=`
                    <div class="movieFullCommentFrame">
                        <div style="text-align: center;">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].userName} skrev:</div>
                        <div>${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].comment}</div>
                        <div style="text-align: center;">Rating: ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].rating} / 1000</div>
                        <div style="text-align: center; font-size: 10px">${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].date}  ${model.data.movies[model.input.moviePage.selectedNumber].comments[comIndex].time}</div>
                    </div>
                    `;
                }
                return html;
            }