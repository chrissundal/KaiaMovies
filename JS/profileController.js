function goProfile(){
    window.location.hash = "profil"
    navigateToProfile()
}
function navigateToProfile(){
    model.app.currentPage = model.app.pages[3]
    model.app.isOpenMovie = false;
    model.input.profile.showMessage = false;
    changeView()
}

function addFriend(inputFriend) {
    let friendFound = false;
    let currentUser = model.data.users[model.input.profile.selectedUser];
    if (inputFriend.value == "") return;

  if (
    currentUser.friends.includes(
      inputFriend.value
    )
  ) {
    inputFriend.value = "";
    inputFriend.placeholder = "Vennen er allerede lagt til.";
    return;
  }

  for (let index = 0; index < model.data.users.length; index++) {
    if (inputFriend.value == model.data.users[index].userName) {
      friendFound = true;
      currentUser.friends.push(inputFriend.value);
      model.data.users[index].friends.push(currentUser.userName);
      updateProfilView();
      inputFriend.value = "";
      inputFriend.placeholder = "Legg til venn";
      break;
    }
  }
  if (!friendFound) {
    inputFriend.value = "";
    inputFriend.placeholder = "Ingen bruker funnet";
  }
  friendFound = false;
}

function selectChatFriend(friendIndex){
  model.input.profile.showMessage = true;
  model.input.profile.selectedFriend = friendIndex;
  updateProfilView();
}
function sendMessage(messageInput){
  let currentUser = model.data.users[model.input.profile.selectedUser];
  let selectedFriend = model.data.users[model.input.profile.selectedFriend];
  let messageText = messageInput.value;
  if (messageText == '') return;
  let timestamp = new Date().toLocaleString()
  let message = {
      sender: currentUser.userName,
      recipient: selectedFriend.userName,
      message: messageText,
      timestamp: timestamp,
  }
  model.data.chatConversations.push(message);
  messageInput.value = '';
 updateProfilView()
}
function closeMessage(){
    model.input.profile.showMessage = false
    updateProfilView();
  }