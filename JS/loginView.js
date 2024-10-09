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
    model.input.register.userName = '';
    model.input.register.password = '';
    model.input.register.secondpassword = '';
    model.input.register.userImage = '';
    model.input.register.aboutme = '';
    appDiv.innerHTML = loginPage;
}

function getUserNamePassword(){
    const inputUserName = model.input.login.userName;
    const inputPassword = model.input.login.password;
    const user = searchUserLogin(inputUserName, inputPassword);
    if (user) {
        model.input.profile.selectedUser = user.userId;
        model.input.login.showLogin = '';
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
                <input type="text" placeholder="Nytt brukernavn" value="${model.input.register.userName ?? ''}" oninput="model.input.register.userName=this.value" required>
                <input type="password" placeholder="Nytt Passord" value="${model.input.register.password ?? ''}" oninput="model.input.register.password=this.value" required>
                <input type="password" placeholder="Gjenta Passord" value="${model.input.register.secondpassword ?? ''}" oninput="model.input.register.secondpassword=this.value" required>
                <input type="file" placeholder="Last opp bilde" value="${model.input.register.userImage ?? ''}" onchange="readFileLogin(this)">
                <input type="text" placeholder="Om meg" value="${model.input.register.aboutme ?? ''}" oninput="model.input.register.aboutme=this.value" required>
                ${model.input.login.showLogin}
                <button onclick="submitNewUser()">Registrer</button>
                <button onclick="cancelNewUser()">Avbryt</button>
            </div>
        </div>
    </div>
    `;
    appDiv.innerHTML = loginPage;
}

function submitNewUser(){
    if(model.input.register.userName && model.input.register.password && model.input.register.userImage && model.input.register.aboutme && model.input.register.secondpassword) {
        const existingUser = model.data.users.find(user => user.userName === model.input.register.userName);
        if (!existingUser) {
            if (model.input.register.password === model.input.register.secondpassword) {
                const newUserId = model.data.users.length;
                model.data.users.push(
                    {
                        userId: newUserId,
                        userName: model.input.register.userName,
                        password: model.input.register.password,
                        userImage: model.input.register.userImage,
                        comments: [],
                        isAdmin: false,
                        friendComments: [],
                        watchlist: [],
                        friends: [],
                        favorites: [],
                        aboutme: model.input.register.aboutme
                    }
                );   
                model.input.login.showLogin = `Registrering fullført`;
                updateLoginView();
            }else{
                model.input.login.showLogin = `Passord ikke likt`;
                registerNewUser();
            }
        }else{
            model.input.login.showLogin = `Brukernavn allerede tatt`;
            registerNewUser();
        }
    }else{
        model.input.login.showLogin = `Alle felter må fylles ut`;
        registerNewUser();
    }
}
function cancelNewUser() {
    model.input.login.showLogin = '';
    updateLoginView()
}
function readFileLogin(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            model.input.register.userImage = event.target.result;
        }
        reader.readAsDataURL(file);
    }
}