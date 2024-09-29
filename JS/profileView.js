updateProfilView();
function updateProfilView(){
    profilPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
       <div style="color: white">Profil</div>
    </div>
    <div class="userProfile">
    <div class="innerProfile">
        <div><img src="${model.data.users[2].userImage}" height = 250px width = 400px></div>
        <div>${model.data.users[2].aboutme}></div>
        <div class="friends-favoritesList">
            <div class="friendList">
            <h3>Friends</h3>
            <div>${model.data.users[2].friends}</div>
            </div>
            <div class="favoritesList">
            <h3>Favorites</h3>
            <div>${model.data.users[2].favorites}</div>
            </div>
        </div>
    </div>
    <div class="commentaryInput">
        <div>${createComments()}</div>
    </div>

</div>
    `;
    appDiv.innerHTML = profilPage;
}
function createComments(){
    let html = '';
    for(let index = 0; index <model.data.users[0].comments.length; index++) {
        html += /*HTML*/`
      <ul>
        <div>${model.data.users[0].comments[index].movie}</div>   
        <div>${model.data.users[0].comments[index].rating}</div>
        <div>${model.data.users[0].comments[index].comment}</div>
        <div>${model.data.users[0].comments[index].date}
        ${model.data.users[0].comments[index].time}
        </div>
        </ul>
        `;
    }
    return html;
}