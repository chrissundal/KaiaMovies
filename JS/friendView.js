function updateFriendView() {
 const selectedFriend = model.data.users[model.input.profile.selectedFriend];

 let friendPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        <div>FriendPage</div>
        </div>
        <div class="userProfile">
         <div class="imageContainer">
           <h2>${selectedFriend.userName}<h2>
           <div><img src="${selectedFriend.userImage}" height="250px" width="400px"></div>
         </div>
         <div>${selectedFriend.aboutme}</div>
         </div>
            <div class="favoriteLists">
            <h3>Favorites</h3>
            <div>${createFavoriteListForFriend()}</div>
            </div>
        <div class="friendWatchList">
            <h3>Filmer sett:</h3>
            <div>${createWatchlistForFriend()}</div>
        </div>
        <div>${createCommentsFriend()}</div>
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
      <div class="innerProfileComments">
          <div>${selectedFriend.comments[index].movie}</div>   
          <div>${selectedFriend.comments[index].rating}</div>
          <div>${selectedFriend.comments[index].comment}</div>
          <div>${selectedFriend.comments[index].date} ${selectedFriend.comments[index].time}</div>
      </div>
        `;
  }
  return html;
}

