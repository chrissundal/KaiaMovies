function updateChatView(friendIndex){
    
    model.input.profile.selectedFriend = friendIndex;
    let selectedFriend = model.data.users[friendIndex];
    let chatBox = '';
    chatBox += /*HTML*/ `
      <div class="container">
          ${createHeader()}
          ${createDropdownMovie()}
          <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
      </div>
    <div class="messageSection">
            <h3>Messages with ${selectedFriend.userName}</h3>
            <div>${showChatMessages()}</div>
            <input type="text" placeholder="Type your message here">
            <button onclick="sendMessage(this.previousElementSibling)">Send Message</button>
        </div>`;
        appDiv.innerHTML = chatBox;
}

function showChatMessages(){
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
    updateChatView(model.input.profile.selectedFriend);
}