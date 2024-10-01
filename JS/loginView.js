updateLoginView();
function updateLoginView(){
    loginPage = /*HTML*/`
    <div class="container">
        <div class="mainloginBox">
            <div class="loginBox">
                <input type="text" placeholder="Skriv brukernavn" oninput="model.input.login.userName=this.value" required>
                <input type="password" placeholder="Skriv Passord" oninput="model.input.login.password=this.value" required>
                ${model.input.login.showLogin}
                <button onclick="getUserNamePassword()">Logg inn</button>
                <button>Registrer</button>
            </div>
        </div>
    </div>
    `;
    appDiv.innerHTML = loginPage;
}

function getUserNamePassword(){
    const inputUserName = model.input.login.userName;
    const inputPassword = model.input.login.password;
    const user = searchUserLogin(inputUserName, inputPassword);
    model.input.login.userId = user.userId;
    if (user) {
        model.input.profile.selectedUser = user.userId;
        goHomeButton();
    } else {
        model.input.login.showLogin = `Feil brukernavn eller passord`;
        updateLoginView();
    }
}
function searchUserLogin(inputUserName, inputPassword) {
    return model.data.users.find(user => {
        return user.userName === inputUserName && user.password === inputPassword;
    });
}
