
const baseURL = `http://localhost:5100/localseelocaldo/`;

//SignUp page html elements' connection starts here
const signUp_body = document.getElementById('signUp_body');
const redirectToLoginP = document.getElementById('redirectToLogin');
const registerBtn = document.getElementById('registerBtn');
const firstnameInput = document.getElementById('firstnameInput');
const lastnameInput = document.getElementById('lastnameInput');
const usernameInput = document.getElementById('usernameInput');
const countryInput = document.getElementById('countryInput');
const cityInput = document.getElementById('cityInput');
const emailInput = document.getElementById('emailInput');
const maleCheckbox = document.getElementById('maleCheckbox');
const femaleCheckbox = document.getElementById('femaleCheckbox');
const no_genderCheckbox = document.getElementById('no-genderCheckbox');
const passInput = document.getElementById('passInput');
const re_passInput = document.getElementById('re-passInput');
const passCheckDiv = document.getElementById('passCheck');
const re_passCheckDiv = document.getElementById('re-passCheck');
const registerAsLocal_y_checkbox = document.getElementById('registerAsLocal-y-checkbox');
const registerAsLocal_n_checkbox = document.getElementById('registerAsLocal-n-checkbox');
const maleCheckboxLabel = document.getElementById('maleCheckboxLabel');
const femaleCheckboxLabel = document.getElementById('femaleCheckboxLabel');
const no_genderCheckboxLabel = document.getElementById('no-genderCheckboxLabel');
const registerAsLocal_yLabel = document.getElementById('registerAsLocal-yLabel');
const registerAsLocal_nLabel = document.getElementById('registerAsLocal-nLabel');
const hasUpperP = document.getElementById('hasUpper');
const hasLowerP = document.getElementById('hasLower');
const hasNumberP = document.getElementById('hasNumber');
const hasSpecharP = document.getElementById('hasSpechar');
const isValidLengthP = document.getElementById('isValidLength');
//SignUp page html elements' connection ends here

//Account page html elements' connection starts here
const account_body = document.getElementById('account_body');
const accont_username_div = document.getElementById('accont_username_div');
const account_username_h1 = document.getElementById('account_username_h1');
const account_user_location_div = document.getElementById('account_user_location_div');
const account_user_location_h3 = document.getElementById('account_user_location_h3');
const account_user_email_div = document.getElementById('account_user_email_div');
const account_user_email_h3 = document.getElementById('account_user_email_h3');
const account_review_div = document.getElementById('account_review_div');
const account_review_h3 = document.getElementById('account_review_h3');
const account_post_new_trip_div = document.getElementById('account_post_new_trip_div');
const account_post_new_tripBtn = document.getElementById('account_post_new_tripBtn');
const account_pending_trip_plan_div = document.getElementById('account_pending_trip_plan_div');
const account_pending_trip_plan_h3 = document.getElementById('account_pending_trip_plan_h3');
const account_trip_plan_div = document.getElementById('account_trip_plan_div');
const account_trip_plan_h3 = document.getElementById('account_trip_plan_h3');
const account_past_trip_plan_div = document.getElementById('account_past_trip_plan_div');
const account_past_trip_plan_h3 = document.getElementById('account_past_trip_plan_h3');
//Account page html elements' connection ends here

//SignUp page functions starts here
//default page setting
registerBtn.disabled = true;
no_genderCheckbox.checked = true;
registerAsLocal_n_checkbox.checked = true;

function addNewUser(event){
    event.preventDefault();
    let userInfo = {
        first_name: firstnameInput.value,
        last_name: lastnameInput.value,
        username: usernameInput.value,
        country_name: countryInput.value,
        city_name: cityInput.value,
        //male, female, no_gender
        gender: genderCheck()
    }
    let authInfo = {
        email: emailInput.value,
        password: passInput.value
    }
    let localInfo = {
        //yes, no
        registerAsLocal: registerAsLocalCheck()
    }
     let body = {
        userInfo,
        authInfo,
        localInfo
    }

    axios.post(baseURL+'register_user', body)
        .then(res => {
            //Keep the user data and do everything here
            //Account page js starts here
            signUp_body.style.display = "none";
            account_body.style.display = "block";
            let userObj = res.data[0];
            let usernameNode = document.createTextNode(`${userObj.username}`);
            account_username_h1.innerHTML = '';
            account_username_h1.appendChild(usernameNode);
            let locationNode = document.createTextNode(`${userObj.city_name}, ${userObj.country_name}`);
            account_user_location_h3.innerHTML = '';
            account_user_location_h3.appendChild(locationNode);
            let emailNode = document.createTextNode(`${userObj.email}`);
            account_user_email_h3.innerHTML = '';
            account_user_email_h3.appendChild(emailNode);
            if(userObj.review){
                let reviewNode = document.createElement(`${userObj.review}`);
                account_review_h3.innerHTML = '';
                account_review_h3.appendChild(reviewNode);
                account_review_h3.style.display = "block";
            }

            //Account page js ends here
        })
        .catch(err => console.log(err));
}
function genderCheck(){

    if(maleCheckbox.checked){
        return maleCheckbox.value;
    }else if(femaleCheckbox.checked){
        return femaleCheckbox.value;
    }else{
        return no_genderCheckbox.value
    }
}
function registerAsLocalCheck(){
    if(registerAsLocal_y_checkbox.checked){
        return registerAsLocal_y_checkbox.value;
    }else{
        return registerAsLocal_n_checkbox.value;
    }
}
function maleSelected(){
    maleCheckbox.checked = true;
    femaleCheckbox.checked = false;
    no_genderCheckbox.checked = false;
}
function femaleSelected(){
    maleCheckbox.checked = false;
    femaleCheckbox.checked = true;
    no_genderCheckbox.checked = false;
}
function no_genderSelected(){
    maleCheckbox.checked = false;
    femaleCheckbox.checked = false;
    no_genderCheckbox.checked = true;
}
function doRegisterAsLocal(){
    registerAsLocal_y_checkbox.checked = true;
    registerAsLocal_n_checkbox.checked = false;
}
function dontRegisterAsLocal(){
    registerAsLocal_y_checkbox.checked = false;
    registerAsLocal_n_checkbox.checked = true;
}
function redirectToLogin(event){
    event.preventDefault();
    location.href = './localseelocaldo_log_all.html';
}
function isValidLength(str){
    return str.length >= 8;
}
function hasLower(str) {
    return /[a-z]/.test(str);
}
function hasUpper(str){
    return /[A-Z]/.test(str);
}
function hasNumber(str) {
    return /\d/.test(str);
}
function hasSpecialChar(str){
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
function isPassValid(){
    let pass = passInput.value;
    return isValidLength(pass) && hasLower(pass) && hasUpper(pass) && hasNumber(pass) && hasSpecialChar(pass);
}
function checkPass(event){
    event.preventDefault();
    let pass = passInput.value;

    if(hasUpper(pass)){
        hasUpperP.innerHTML = '';
        let hasUpperText = document.createTextNode("it has to contain at least 1 upper case. OK!");
        hasUpperP.appendChild(hasUpperText);
        passCheckDiv.appendChild(hasUpperP);
    }else{
        hasUpperP.innerHTML = '';
        let hasUpperText = document.createTextNode("it has to contain at least 1 upper case. X");
        hasUpperP.appendChild(hasUpperText);
        passCheckDiv.appendChild(hasUpperP);
    }

    if(hasLower(pass)){
        hasLowerP.innerHTML = '';
        let hasLowerText = document.createTextNode("it has to contain at least 1 lower case. OK!");
        hasLowerP.appendChild(hasLowerText);
        passCheckDiv.appendChild(hasLowerP);
    }else{
        hasLowerP.innerHTML = '';
        let hasLowerText = document.createTextNode("it has to contain at least 1 lower case. X");
        hasLowerP.appendChild(hasLowerText);
        passCheckDiv.appendChild(hasLowerP);
    }

    if(hasNumber(pass)){
        hasNumberP.innerHTML = '';
        let hasNumberText = document.createTextNode("it has to contain at least 1 number. OK!");
        hasNumberP.appendChild(hasNumberText);
        passCheckDiv.appendChild(hasNumberP);
    }else{
        hasNumberP.innerHTML = '';
        let hasNumberText = document.createTextNode("it has to contain at least 1 number. X");
        hasNumberP.appendChild(hasNumberText);
        passCheckDiv.appendChild(hasNumberP);
    }

    if(hasSpecialChar(pass)){
        hasSpecharP.innerHTML = '';
        hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. OK!");
        hasSpecharP.appendChild(hasSpecialCharText);
        passCheckDiv.appendChild(hasSpecharP);
    }else{
        hasSpecharP.innerHTML = '';
        hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. X");
        hasSpecharP.appendChild(hasSpecialCharText);
        passCheckDiv.appendChild(hasSpecharP);
    }

    if(isValidLength(pass)){
        isValidLengthP.innerHTML = '';
        isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. OK!");
        isValidLengthP.appendChild(isValidLengthText);
        passCheckDiv.appendChild(isValidLengthP);
    }else{
        isValidLengthP.innerHTML = '';
        isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. X");
        isValidLengthP.appendChild(isValidLengthText);
        passCheckDiv.appendChild(isValidLengthP);
    }

}
function checkPassRepass(event){
    event.preventDefault();
    re_passCheckDiv.innerHTML = '';
    const passCheckPara = document.createElement('p');
    let text = document.createTextNode("Password and Retyped Password must be match.");
    if(passInput.value === re_passInput.value){
        text = document.createTextNode("Password and Retyped Password matched.");
        passCheckPara.appendChild(text);
        re_passCheckDiv.appendChild(passCheckPara);
        if(firstnameInput.value !== '' && lastnameInput.value !== '' && usernameInput.value !== '' && emailInput.value !== '' && isPassValid(passInput.value)){
            registerBtn.disabled = false;
        }
        return
    }
    passCheckPara.appendChild(text);
    re_passCheckDiv.appendChild(passCheckPara);
    registerBtn.disabled = true;
}
//SignUp page functions ends here

//SignUp page eventListner starts here
redirectToLoginP.addEventListener('click', redirectToLogin);
registerBtn.addEventListener('click', addNewUser);
maleCheckbox.addEventListener('click', maleSelected);
maleCheckboxLabel.addEventListener('click', maleSelected);
femaleCheckbox.addEventListener('click', femaleSelected);
femaleCheckboxLabel.addEventListener('click', femaleSelected);
no_genderCheckbox.addEventListener('click', no_genderSelected);
no_genderCheckboxLabel.addEventListener('click', no_genderSelected);
registerAsLocal_y_checkbox.addEventListener('click', doRegisterAsLocal);
registerAsLocal_yLabel.addEventListener('click', doRegisterAsLocal);
registerAsLocal_n_checkbox.addEventListener('click', dontRegisterAsLocal);
registerAsLocal_nLabel.addEventListener('click', dontRegisterAsLocal);
passInput.addEventListener('keyup', checkPass);
re_passInput.addEventListener('keyup', checkPassRepass);
//SignUp page eventListner endss here
