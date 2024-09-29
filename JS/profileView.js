updateProfilView();
function updateProfilView(){
    profilPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick=""><img src="IMG/profile.png" height = 60px></div>
       <div style="color: white">Profil</div>
    </div>
    `;
    appDiv.innerHTML = profilPage;
}
