updateProfilView();
function updateProfilView() {
  let currentUser = model.data.users[model.input.profile.selectedUser];
  profilPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
    </div>
        <div class="userProfile">
              <div class="imageContainer">
                <h2>${currentUser.userName}</h2>
                <div><img src="${currentUser.userImage}" height = 250px width = 400px></div>
              </div>
              <div class="aboutFriend">
              <h3>Om meg:</h3>
              ${currentUser.aboutme}
              </div>
              ${createChat()}
            <div class="friendSpace">
          <h3>Venner:</h3>
          ${createFriendList()}
        </div>
        </div>
              ${createSocial()}
    `;
  appDiv.innerHTML = profilPage;
}
function createChat() {
  let chatHtml = '';
  if (model.input.profile.showMessage == false) return '';
  chatHtml = `
  <div class="messageSection">
                <h3>Messages with ${model.data.users[model.input.profile.selectedFriend].userName}</h3>
                ${showChatMessages()}
                <input type="text" placeholder="Skriv melding her...">
                <button onclick="sendMessage(this.previousElementSibling)">Send Melding</button>
                <button onclick="closeMessage()">Lukk</button>
            </div>
  `;
  return chatHtml;
}

function createSocial() {
  let socialHtml = '';
  socialHtml = `
  <div class="friendsCommentsList">
          <div class="addFriend">
              <input type="text" placeholder="Legg til venn"/>
              <button onclick="addFriend(this.previousElementSibling)">Legg til</button>
          </div>
      </div>
      <div class="favandwatch">
        <div class="favoritesList">
          <h3>Favoritter:</h3>
          <div style="font:bold">
          ${createFavoriteList()}
          </div>
        </div>
        <div class="profileWatchList">
          <h3>Filmer sett:</h3>
          ${createWatchlist()}
        </div>
        <div class="earlierComments">
          <h3>Tidligere Kommentarer:<h3>
          <div>${createComments()}</div>
        </div>
        
      </div>
  </div>
  `;
  return socialHtml;
}
function createComments() {
  let html = "";
  let currentUser = model.data.users[model.input.profile.selectedUser];
  for (let index = currentUser.comments.length - 1; index >= 0; index--) {
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
    <div class="friendContainer">
      <div class="friendClick" onclick="goToFriend(${friendIndex})">
        ${currentUser.friends[index]}
        </div>
        <button onclick="selectChatFriend(${friendIndex})">Chat</button>
        </div>
    `;

  }
  return html;
}
function showChatMessages() {
  let currentUser = model.data.users[model.input.profile.selectedUser];
  let selectedFriend = model.data.users[model.input.profile.selectedFriend];
  let messageHtml = '';
  let messages = model.data.chatConversations.filter(message =>
    (message.sender === currentUser.userName && message.recipient === selectedFriend.userName) ||
    (message.sender === selectedFriend.userName && message.recipient === currentUser.userName)
  );
  messages.forEach(message => {
    messageHtml += /*HTML*/ `
              <div class="message">
                  <strong>${message.sender}:</strong> ${message.message} <br>
                  ${message.timestamp}
      </div>
      `;
  });
  return messageHtml;
}
function createFavoriteList() {
  let html = "";
  let currentUser = model.data.users[model.input.profile.selectedUser];
  for (let favindex = 0; favindex < currentUser.favorites.length; favindex++) {
    const movie = currentUser.favorites[favindex];
    html += /*HTML*/ `
    
    <div class="favoriteProfileClick" onclick="goMovie('${movie.name}')">
        ${currentUser.favorites[favindex].name}
    </div>
    `;
  }
  return html;
}
function createWatchlist() {
  let html = '';
  let currentUser = model.data.users[model.input.profile.selectedUser];
  for (let i = currentUser.watchlist.length - 1; i >= 0; i--) {
    const movie = currentUser.watchlist[i];
    html += `
      <div class="watchListProfileClick" onclick="goMovie('${movie.name}')">
      ${currentUser.watchlist[i].name}
      </div>
    
    `;
  }
  return html;
}