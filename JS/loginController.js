function goLogin(){
    window.location.hash = "login";
    navigateToLogin();
}
function navigateToLogin() {
    model.app.currentPage = model.app.pages[5];
    changeView();
}
function getUserNamePassword(){
    let inputUserName = model.input.login.userName;
    let inputPassword = model.input.login.password;
    let user = searchUserLogin(inputUserName, inputPassword);
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
function submitNewUser(){
    let registerUser = model.input.register;
    if(registerUser.userName && registerUser.password && registerUser.userImage && registerUser.aboutme && registerUser.secondpassword) {
        const existingUser = model.data.users.find(user => user.userName === registerUser.userName);
        if (!existingUser) {
            if (registerUser.password === registerUser.secondpassword) {
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
                        aboutme: model.input.register.aboutme,
                        chatMessage:[],
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