function updateFriendView() {
 const selectedFriend = model.data.users[model.input.profile.selectedFriend];

  appDiv.innerHTML = '';
 let friendPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        </div>
        <div class="userProfile">
         <div class="imageContainer">
           <h2>${selectedFriend.userName}</h2>
           <div><img src="${selectedFriend.userImage}" height="250px" width="400px"></div>
         </div>
         <div>${selectedFriend.aboutme}</div>
         </div>
         <div class="friendGrid">
            <div class="favoriteLists">
            <h3>Favorites</h3>
            <div>${createFavoriteListForFriend()}</div>
            </div>
        <div class="friendWatchList">
            <h3>Filmer sett</h3>
            <div>${createWatchlistForFriend()}</div>
        </div>
        <div class="earlierComments">
          <h3>Tidligere Kommentarer<h3>
          ${createCommentsFriend()}
        </div>
        <div class="friendSpace">
        <h3>Venner</h3>
        ${createFriendListForFriend()}
        </div>
        </div>
        `;
        appDiv.innerHTML = friendPage;
}
function createFavoriteListForFriend(){
  let favoriteListFriend = '';
  
  let selectedFriend = model.data.users[model.input.profile.selectedFriend];

  for(let index = 0; index < selectedFriend.favorites.length; index++){
    const movie = selectedFriend.favorites[index];
    favoriteListFriend += /*HTML*/`
    <div class="favoriteFriendList" onclick="goMovie('${movie.name}')">
    ${movie.name}
    </div>`;
  }
  return favoriteListFriend;
}

function createWatchlistForFriend(){
  let watchlistFriend = '';
  let selectedFriend = model.data.users[model.input.profile.selectedFriend];
  for(let index = selectedFriend.watchlist.length -1; index >= 0;index--){
    const movie = selectedFriend.watchlist[index];
    watchlistFriend += /*HTML*/ `
    <div class="watchListProfileClick" onclick="goMovie('${movie.name}')">
                ${movie.name}
            </div>`;
  }
  return watchlistFriend;
}

function createCommentsFriend(){
  let html = "";
  let selectedFriend = model.data.users[model.input.profile.selectedFriend];
  for (let index = 0; index < model.data.users[model.input.profile.selectedFriend].comments.length; index++) {
    html += /*HTML*/ `
      <div class="innerFriendComments">
          ${selectedFriend.comments[index].movie}<br>
          ${selectedFriend.comments[index].rating}<br>
          ${selectedFriend.comments[index].comment}<br>
          ${selectedFriend.comments[index].date} ${selectedFriend.comments[index].time}
      </div>
        `;
  }
  return html;
}

function createFriendListForFriend() {
  let html = "";
  let selectedUser = model.data.users[model.input.profile.selectedFriend];
  for (let index = 0; index < selectedUser.friends.length; index++) {
    let friendIndex2 = model.data.users.findIndex(user => user.userName === selectedUser.friends[index]);
    
    html += /*HTML*/ `
    <div class="friendClick" onclick="goToFriend(${friendIndex2})">
    ${selectedUser.friends[index]}</div>`;
  }
  return html;
}