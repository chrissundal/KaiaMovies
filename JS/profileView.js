updateProfilView();
function updateProfilView() {
  appDiv.innerHTML = '';
  profilPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
    </div>
        <div class="userProfile">
              <div class="imageContainer">
                <h2>${model.data.users[model.input.profile.selectedUser].userName}</h2>
                <div><img src="${model.data.users[model.input.profile.selectedUser].userImage}" height = 250px width = 400px></div>
              </div>
              <div class="aboutFriend">${model.data.users[model.input.profile.selectedUser].aboutme}</div>
              </div>
              ${createSocial()}
    `;
  appDiv.innerHTML = profilPage;
}
function createSocial(){
  let socialHtml = '';
  socialHtml = `
  <div class="friendsCommentsList">
<<<<<<< Updated upstream
      <div class="addFriend">
          <input type="text" placeholder="Add a friend" oninput="updateFriendInput(this)" />
          <button onclick="addFriend(this.previousElementSibling)">Add Friend</button>
=======
      <div class="friendSpace">
          <h3>Friends</h3>
          ${createFriendList()}
          <div class="addFriend">
              <input type="text" placeholder="Add a friend"/>
              <button onclick="addFriend(this.previousElementSibling)">Add Friend</button>
          </div>
>>>>>>> Stashed changes
      </div>
      <div class="favandwatch">
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
      <div class="earlierComments">
      <h3>Tidligere Kommentarer<h3>
      <div>${createComments()}</div>
      </div>
      <div class="friendSpace">
        <h3>Friends</h3>
        ${createFriendList()}
      </div>
      </div>
  </div>
  `;
  return socialHtml;
}
function createComments() {
  let html = "";
  let currentUser = model.data.users[model.input.profile.selectedUser];
  for (let index = 0; index < model.data.users[model.input.profile.selectedUser].comments.length; index++) {
    html += /*HTML*/ `
      <div class="innerProfileComments">
          <div>${currentUser.comments[index].movie}</div>   
          <div>${currentUser.comments[index].rating}</div>
          <div>${currentUser.comments[index].comment}</div>
          <div>${currentUser.comments[index].date} ${currentUser.comments[index].time}</div>
      </div>
        `;
  }
  return html;
}

function createFriendList() {
  let html = "";
  let currentUser = model.data.users[model.input.profile.selectedUser];
  for (let index = 0; index < currentUser.friends.length; index++) {
    let friendIndex = model.data.users.findIndex(user => user.userName === currentUser.friends[index]);
    html += /*HTML*/ `
    <div class="friendClick" onclick="goToFriend(${friendIndex})">
        ${currentUser.friends[index]}
    </div>
    <button onclick="updateChatView(${friendIndex})">Chat</button>
    `;
 
  }
  return html;
}

let friendFound = false;

function addFriend(inputFriend) {
  let currentUser = model.data.users[model.input.profile.selectedUser];
  if (inputFriend.value == "") return;

  if (
    currentUser.friends.includes(
      inputFriend.value
    )
  ) {
    inputFriend.value = "";
    inputFriend.placeholder = "This friend is already in your friend list.";
    return;
  }

  for (let index = 0; index < model.data.users.length; index++) {
    if (inputFriend.value == model.data.users[index].userName) {
      friendFound = true;

      currentUser.friends.push(inputFriend.value);
      model.data.users[index].friends.push(currentUser.userName);
      
      updateProfilView();
      inputFriend.value = "";
      inputFriend.placeholder = "Add friend";

      break;
    }
  }
  if (!friendFound) {
    inputFriend.value = "";
    inputFriend.placeholder = "User not found";
  }
  friendFound = false;
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

