updateSearchView();
function updateSearchView(){
    searchPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick=""><img src="IMG/profile.png" height = 60px></div>
       <div style="color: white">Search</div>
    </div>
    `;
    appDiv.innerHTML = searchPage;
}
