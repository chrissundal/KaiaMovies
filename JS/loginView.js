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