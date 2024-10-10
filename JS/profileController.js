function goProfile(){
    window.location.hash = "profil"
    navigateToProfile()
}
function navigateToProfile(){
    model.app.currentPage = model.app.pages[3]
    model.app.isOpenMovie = false;
    changeView()

}