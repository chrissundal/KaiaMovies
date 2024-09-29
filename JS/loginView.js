updateLoginView();
function updateLoginView(){
    loginPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
       <div style="color: white">Login</div>
    </div>
    `;
    appDiv.innerHTML = loginPage;
}

