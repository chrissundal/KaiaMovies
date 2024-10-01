updateProfilView();
function updateProfilView() {
  profilPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
    </div>
    <div class="userProfile">
    <div class="innerProfile">
    <div class="imageContainer">
    <h2>${model.data.users[model.input.profile.selectedUser].userName}<h2>
        <div><img src="${
          model.data.users[model.input.profile.selectedUser].userImage
        }" height = 250px width = 400px></div>
        </div>
        <div>${model.data.users[model.input.profile.selectedUser].aboutme}</div>
        <div class="friends-favoritesList">
            <div class="friendSpace">
            <h3>Friends</h3>
            <div class="friendList">${createFriendList()}</div>
            <div class="addFriend">
            <input type="text" placeholder="Add a friend" oninput="updateFriendInput(this)" />
            <button onclick="addFriend(this.previousElementSibling)">Add Friend</button>
        </div>
            </div>
            <div class="favoritesList">
            <h3>Favorites</h3>
            <ul>
            <div style="font:bold">${
              model.data.users[model.input.profile.selectedUser].favorites
            }
            </ul>
              </div>
            </div>
        </div>
    </div>
    <div class="earlierComments">
        <h3>Tidligere Kommentarer<h3>
        <ul>
        <div style="font-size: 24pt">${createComments()}</div>
        </ul>
        </div>

</div>
    `;
  appDiv.innerHTML = profilPage;
}
function createComments() {
  let html = "";
  for (
    let index = 0;
    index < model.data.users[model.input.profile.selectedUser].comments.length;
    index++
  ) {
    html += /*HTML*/ `
      
        <div>${
          model.data.users[model.input.profile.selectedUser].comments[index]
            .movie
        }</div>   
        <div>${
          model.data.users[model.input.profile.selectedUser].comments[index]
            .rating
        }</div>
        <div>${
          model.data.users[model.input.profile.selectedUser].comments[index]
            .comment
        }</div>
        <div>${
          model.data.users[model.input.profile.selectedUser].comments[index]
            .date
        }
        ${
          model.data.users[model.input.profile.selectedUser].comments[index]
            .time
        }
        </div>
        
        `;
  }
  return html;
}

function createFriendList() {
  let html = "";
  for (
    let index = 0;
    index < model.data.users[model.input.profile.selectedUser].friends.length;
    index++
  ) {
    html += /*HTML*/ `
    
    <div>${
      model.data.users[model.input.profile.selectedUser].friends[index]
    }</div>
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
  for (
    let index = 0;
    index < model.data.users[model.input.profile.selectedUser].favorites.length;
    index++
  ) {
    html += /*HTML*/ `
    
    <div>${
      model.data.users[model.input.profile.selectedUser].favorites[index]
    }</div>
    `;
  }
  return html;
}