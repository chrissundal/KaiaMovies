function goLogin(){
    window.location.hash = "login";
    navigateToLogin();
}
function navigateToLogin() {
    model.app.currentPage = model.app.pages[5];
    changeView();
}