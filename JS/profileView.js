updateProfilView();
function updateProfilView() {
  profilPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
    </div>
        <div class="userProfile">
              <div class="imageContainer">
                <h2>${model.data.users[model.input.profile.selectedUser].userName}<h2>
                <div><img src="${model.data.users[model.input.profile.selectedUser].userImage}" height = 250px width = 400px></div>
              </div>
              <div>${model.data.users[model.input.profile.selectedUser].aboutme}</div>
              </div>
              ${createSocial()}
    `;
  appDiv.innerHTML = profilPage;
}
function createSocial(){
  let socialHtml = '';
  socialHtml = `
  <div class="friendsCommentsList">
      <div class="friendSpace">
          <h3>Friends</h3>
          ${createFriendList()}
          <div class="addFriend">
              <input type="text" placeholder="Add a friend" oninput="updateFriendInput(this)" />
              <button onclick="addFriend(this.previousElementSibling)">Add Friend</button>
          </div>
      </div>
      <div class="earlierComments">
          <h3>Tidligere Kommentarer<h3>
          <div>${createComments()}</div>
      </div>
  </div>
      <div class="favoritesList">
          <h3>Favorites</h3>
          <div style="font:bold">
              ${createFavoriteList()}
          </div>
      </div>
      <div class="profileWatchList">
        <h3>Filmer sett:</h3>
        ${createWatchlist()}
      </div>
  `;
  return socialHtml;
}
function createComments() {
  let html = "";
  for (let index = 0; index < model.data.users[model.input.profile.selectedUser].comments.length; index++) {
    html += /*HTML*/ `
      <div class="innerProfileComments">
          <div>${model.data.users[model.input.profile.selectedUser].comments[index].movie}</div>   
          <div>${model.data.users[model.input.profile.selectedUser].comments[index].rating}</div>
          <div>${model.data.users[model.input.profile.selectedUser].comments[index].comment}</div>
          <div>${model.data.users[model.input.profile.selectedUser].comments[index].date} ${model.data.users[model.input.profile.selectedUser].comments[index].time}</div>
      </div>
        `;
  }
  return html;
}

function createFriendList() {
  let html = "";
  for (let index = 0; index < model.data.users[model.input.profile.selectedUser].friends.length; index++) {
    html += /*HTML*/ `
    <div>
        ${model.data.users[model.input.profile.selectedUser].friends[index]}
    </div>
    `;
  }
  return html;
}

let friendInputValue = "";
let friendFound = false;

function updateFriendInput(input) {
  friendInputValue = input.value;
}

function addFriend(inputFriend) {
  if (friendInputValue == "") return;

  if (
    model.data.users[model.input.profile.selectedUser].friends.includes(
      friendInputValue
    )
  ) {
    inputFriend.value = "";
    inputFriend.placeholder = "This friend is already in your friend list.";
    friendInputValue = "";
    return;
  }

  for (let index = 0; index < model.data.users.length; index++) {
    if (friendInputValue == model.data.users[index].userName) {
      friendFound = true;

      model.data.users[model.input.profile.selectedUser].friends.push(
        friendInputValue
      );
      updateProfilView();
      inputFriend.value = "";
      inputFriend.placeholder = "Add friend";
      friendInputValue = "";

      break;
    }
  }
  if (!friendFound) {
    inputFriend.value = "";
    inputFriend.placeholder = "User not found";
    friendInputValue = "";
  }
}

function createFavoriteList() {
  let html = "";
  for (let favindex = 0; favindex < model.data.users[model.input.profile.selectedUser].favorites.length; favindex++) {
    const movie = model.data.users[model.input.profile.selectedUser].favorites[favindex];
    html += /*HTML*/ `
    
    <div class="favoriteProfileClick" onclick="goMovie('${movie.name}')">
        ${model.data.users[model.input.profile.selectedUser].favorites[favindex].name}
    </div>
    `;
  }
  return html;
}
function createWatchlist() {
  let html = '';
  for (let i = model.data.users[model.input.profile.selectedUser].watchlist.length - 1; i >= 0; i--) {
    const movie = model.data.users[model.input.profile.selectedUser].watchlist[i];
    html += `
      <div class="watchListProfileClick" onclick="goMovie('${movie.name}')">
      ${model.data.users[model.input.profile.selectedUser].watchlist[i].name}
      </div>
    
    `;
  }
  return html;
}