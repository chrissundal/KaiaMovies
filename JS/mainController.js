function goHomeButton(){
    window.location.hash = "home";
    navigateToHome();
}
function navigateToHome() {
    model.app.currentPage = model.app.pages[0];
    model.app.isOpenMovie = false;
    changeView();
}