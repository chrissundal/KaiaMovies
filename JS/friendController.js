function goToFriend(friendIndex) {
    window.location.hash = `#friend-${friendIndex}`;
    navigateToFriend(friendIndex);
}
function navigateToFriend(friendIndex){
    if (friendIndex === model.input.profile.selectedUser){
        goProfile();
      }
      else{
      model.input.profile.selectedFriend = friendIndex;
      model.app.currentPage = model.app.pages[6]
      updateFriendView();
    }
    model.app.isOpenMovie = false;
}