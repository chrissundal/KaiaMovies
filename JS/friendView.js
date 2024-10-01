updateFriendView();
function updateFriendView() {
  friendPage = /*HTML*/ `
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
        <div>FriendPage</div>
        </div>

        `;
        appDiv.innerHTML = friendPage;
}