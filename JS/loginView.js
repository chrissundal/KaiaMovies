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
                <button onclick="registerNewUser()">Registrer</button>
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
function registerNewUser(){
    const loginPage = `
    <div class="container">
        <div class="mainloginBox">
            <div class="loginBox">
                <input type="text" placeholder="Nytt brukernavn" oninput="model.input.register.userName=this.value" required>
                <input type="password" placeholder="Nytt Passord" oninput="model.input.register.password=this.value" required>
                <input type="file" placeholder="Last opp bilde" oninput="model.input.register.userImage=this.value">
                <input type="text" placeholder="Om meg" oninput="model.input.register.aboutme=this.value" required>
                ${model.input.login.showLogin}
                <button onclick="submitNewUser()">Registrer</button>
            </div>
        </div>
    </div>
    `;
    appDiv.innerHTML = loginPage;
}

function submitNewUser(){
    const existingUser = model.data.users.find(user => user.userName === model.input.register.userName);

    if (existingUser) {
        model.input.login.showLogin = `Brukernavn allerede tatt`;
        registerNewUser();
    }else{
        const newUserId = model.data.users.length;
        model.data.users.push(
            {
                userId: newUserId,
                userName: model.input.register.userName,
                password: model.input.register.password,
                userImage: model.input.register.userImage,
                comments: [],
                friendComments: [],
                friends: [],
                favorites: [],
                aboutme: model.input.register.aboutme
            }
        );   
        model.input.login.showLogin = `Registrering fullført`;
        updateLoginView();
    }
}