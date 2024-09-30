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
        <div><img src="${model.data.users[model.input.profile.selectedUser].userImage}" height = 250px width = 400px></div>
        <div>${model.data.users[model.input.profile.selectedUser].aboutme}</div>
        <div class="friends-favoritesList">
            <div class="friendList">
            <h3>Friends</h3>
            <div>${model.data.users[model.input.profile.selectedUser].friends}</div>
            </div>
            <div class="favoritesList">
            <h3>Favorites</h3>
            <div>${model.data.users[model.input.profile.selectedUser].favorites}</div>
            </div>
        </div>
    </div>
    <div class="commentaryInput">
        <h3>Tidligere Kommentarer<h3>
        <div>${createComments()}</div>
    </div>

</div>
    `;
    appDiv.innerHTML = profilPage;

}
function createComments(){
    let html = '';
    for(let index = 0; index <model.data.users[model.input.profile.selectedUser].comments.length; index++) {
        html += /*HTML*/`
      <ul>
        <div>${model.data.users[model.input.profile.selectedUser].comments[index].movie}</div>   
        <div>${model.data.users[model.input.profile.selectedUser].comments[index].rating}</div>
        <div>${model.data.users[model.input.profile.selectedUser].comments[index].comment}</div>
        <div>${model.data.users[model.input.profile.selectedUser].comments[index].date}
        ${model.data.users[model.input.profile.selectedUser].comments[index].time}
        </div>
        </ul>
        `;
    }
    return html;
}

function createFriendList(){
let html= '';
for(let index = 0; index <model.data.users[model.input.profile.selectedUser].friends.length;index++){
    html += /*HTML*/ `
    <div>${model.data.users[model.input.profile.selectedUser].friends[index]}</div>`
}
return html;
}

function createFavoriteList(){
let html = '';
for(let index=0; index<model.data.users[model.input.profile.selectedUser].favorites.length; index++){
    html += /*HTML*/`
    <div>${model.data.users[model.input.profile.selectedUser].favorites[index]}`
}
return html;
}