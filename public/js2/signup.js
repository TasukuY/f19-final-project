
// const baseURL = `http://localhost:5100/localseelocaldo/`;

// const redirectToLoginP = document.getElementById('redirectToLogin');
// const registerBtn = document.getElementById('registerBtn');
// const firstnameInput = document.getElementById('firstnameInput');
// const lastnameInput = document.getElementById('lastnameInput');
// const usernameInput = document.getElementById('usernameInput');
// const emailInput = document.getElementById('emailInput');
// const maleCheckbox = document.getElementById('maleCheckbox');
// const femaleCheckbox = document.getElementById('femaleCheckbox');
// const no_genderCheckbox = document.getElementById('no-genderCheckbox');
// const passInput = document.getElementById('passInput');
// const re_passInput = document.getElementById('re-passInput');
// const passCheckDiv = document.getElementById('passCheck');
// const re_passCheckDiv = document.getElementById('re-passCheck');
// const registerAsLocal_y_checkbox = document.getElementById('registerAsLocal-y-checkbox');
// const registerAsLocal_n_checkbox = document.getElementById('registerAsLocal-n-checkbox');
// const maleCheckboxLabel = document.getElementById('maleCheckboxLabel');
// const femaleCheckboxLabel = document.getElementById('femaleCheckboxLabel');
// const no_genderCheckboxLabel = document.getElementById('no-genderCheckboxLabel');
// const registerAsLocal_yLabel = document.getElementById('registerAsLocal-yLabel');
// const registerAsLocal_nLabel = document.getElementById('registerAsLocal-nLabel');

// //default page setting
// registerBtn.disabled = true;
// no_genderCheckbox.checked = true;
// registerAsLocal_n_checkbox.checked = true;
// const hasUpperPara = document.createElement('p');
// let hasUpperText = document.createTextNode("it has to contain at least 1 upper case. X");
// hasUpperPara.appendChild(hasUpperText);
// passCheckDiv.appendChild(hasUpperPara);
// const hasLowerPara = document.createElement('p');
// let hasLowerText = document.createTextNode("it has to contain at least 1 lower case. X");
// hasLowerPara.appendChild(hasLowerText);
// passCheckDiv.appendChild(hasLowerPara);
// const hasNumberPara = document.createElement('p');
// let hasNumberText = document.createTextNode("it has to contain at least 1 number. X");
// hasNumberPara.appendChild(hasNumberText);
// passCheckDiv.appendChild(hasNumberPara)
// const hasSpecialCharPara = document.createElement('p');
// let hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. X");
// hasSpecialCharPara.appendChild(hasSpecialCharText);
// passCheckDiv.appendChild(hasSpecialCharPara);
// const isValidLengthPara = document.createElement('p');
// let isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. X");
// isValidLengthPara.appendChild(isValidLengthText);
// passCheckDiv.appendChild(isValidLengthPara);

// function addNewUser(event){
//     event.preventDefault();

//     let travelerInfo = {
//         first_name: firstnameInput.value,
//         last_name: lastnameInput.value,
//         username: usernameInput.value,
//         //male, female, no_gender
//         gender: genderCheck()
//     }
//     let authInfo = {
//         email: emailInput.value,
//         password: passInput.value
//     }
//     let localInfo = {
//         //yes, no
//         registerAsLocal: registerAsLocalCheck()
//     }
//      let body = {
//         travelerInfo,
//         authInfo,
//         localInfo
//     }

//     axios.post(baseURL+'register_user', body)
//         .then(res => {
//             console.log(res.data);
//             console.log('added user!!');
//         })
//         .catch(err => console.log(err));
// }

// function genderCheck(){

//     if(maleCheckbox.checked){
//         return maleCheckbox.value;
//     }else if(femaleCheckbox.checked){
//         return femaleCheckbox.value;
//     }else{
//         return no_genderCheckbox.value
//     }
// }

// function registerAsLocalCheck(){
//     if(registerAsLocal_y_checkbox.checked){
//         return registerAsLocal_y_checkbox.value;
//     }else{
//         return registerAsLocal_n_checkbox.value;
//     }
// }

// function maleSelected(){
//     maleCheckbox.checked = true;
//     femaleCheckbox.checked = false;
//     no_genderCheckbox.checked = false;
// }

// function femaleSelected(){
//     maleCheckbox.checked = false;
//     femaleCheckbox.checked = true;
//     no_genderCheckbox.checked = false;
// }

// function no_genderSelected(){
//     maleCheckbox.checked = false;
//     femaleCheckbox.checked = false;
//     no_genderCheckbox.checked = true;
// }

// function doRegisterAsLocal(){
//     registerAsLocal_y_checkbox.checked = true;
//     registerAsLocal_n_checkbox.checked = false;
// }

// function dontRegisterAsLocal(){
//     registerAsLocal_y_checkbox.checked = false;
//     registerAsLocal_n_checkbox.checked = true;
// }

// function redirectToLogin(event){
//     event.preventDefault();
//     location.href = './login.html';
// }

// function isValidLength(str){
//     return str.length >= 8;
// }

// function hasLower(str) {
//     return /[a-z]/.test(str);
// }

// function hasUpper(str){
//     return /[A-Z]/.test(str);
// }

// function hasNumber(str) {
//     return /\d/.test(str);
// }

// function hasSpecialChar(str){
//     return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
// }

// function isPassValid(){
//     let pass = passInput.value;
//     return isValidLength(pass) && hasLower(pass) && hasUpper(pass) && hasNumber(pass) && hasSpecialChar(pass);
// }

// function checkPass(event){
//     event.preventDefault();
//     let pass = passInput.value;

//     if(hasUpper(pass)){
//         hasUpperPara.innerHTML = '';
//         hasUpperText = document.createTextNode("it has to contain at least 1 upper case. OK!");
//         hasUpperPara.appendChild(hasUpperText);
//         passCheckDiv.appendChild(hasUpperPara);
//     }else{
//         hasUpperPara.innerHTML = '';
//         hasUpperText = document.createTextNode("it has to contain at least 1 upper case. X");
//         hasUpperPara.appendChild(hasUpperText);
//         passCheckDiv.appendChild(hasUpperPara);
//     }

//     if(hasLower(pass)){
//         hasLowerPara.innerHTML = '';
//         hasLowerText = document.createTextNode("it has to contain at least 1 lower case. OK!");
//         hasLowerPara.appendChild(hasLowerText);
//         passCheckDiv.appendChild(hasLowerPara);
//     }else{
//         hasLowerPara.innerHTML = '';
//         hasLowerText = document.createTextNode("it has to contain at least 1 lower case. X");
//         hasLowerPara.appendChild(hasLowerText);
//         passCheckDiv.appendChild(hasLowerPara);
//     }

//     if(hasNumber(pass)){
//         hasNumberPara.innerHTML = '';
//         hasNumberText = document.createTextNode("it has to contain at least 1 number. OK!");
//         hasNumberPara.appendChild(hasNumberText);
//         passCheckDiv.appendChild(hasNumberPara);
//     }else{
//         hasNumberPara.innerHTML = '';
//         hasNumberText = document.createTextNode("it has to contain at least 1 number. X");
//         hasNumberPara.appendChild(hasNumberText);
//         passCheckDiv.appendChild(hasNumberPara);
//     }

//     if(hasSpecialChar(pass)){
//         hasSpecialCharPara.innerHTML = '';
//         hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. OK!");
//         hasSpecialCharPara.appendChild(hasSpecialCharText);
//         passCheckDiv.appendChild(hasSpecialCharPara);
//     }else{
//         hasSpecialCharPara.innerHTML = '';
//         hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. X");
//         hasSpecialCharPara.appendChild(hasSpecialCharText);
//         passCheckDiv.appendChild(hasSpecialCharPara);
//     }

//     if(isValidLength(pass)){
//         isValidLengthPara.innerHTML = '';
//         isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. OK!");
//         isValidLengthPara.appendChild(isValidLengthText);
//         passCheckDiv.appendChild(isValidLengthPara);
//     }else{
//         isValidLengthPara.innerHTML = '';
//         isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. X");
//         isValidLengthPara.appendChild(isValidLengthText);
//         passCheckDiv.appendChild(isValidLengthPara);
//     }

// }
  
// function checkPassRepass(event){
//     event.preventDefault();
//     re_passCheckDiv.innerHTML = '';
//     const passCheckPara = document.createElement('p');
//     let text = document.createTextNode("Password and Retyped Password must be match.");
//     if(passInput.value === re_passInput.value){
//         text = document.createTextNode("Password and Retyped Password matched.");
//         passCheckPara.appendChild(text);
//         re_passCheckDiv.appendChild(passCheckPara);
//         if(firstnameInput.value !== '' && lastnameInput.value !== '' && usernameInput.value !== '' && emailInput.value !== '' && isPassValid(passInput.value)){
//             registerBtn.disabled = false;
//         }
//         return
//     }
//     passCheckPara.appendChild(text);
//     re_passCheckDiv.appendChild(passCheckPara);
//     registerBtn.disabled = true;
// }

// redirectToLoginP.addEventListener('click', redirectToLogin);
// registerBtn.addEventListener('click', addNewUser);
// maleCheckbox.addEventListener('click', maleSelected);
// maleCheckboxLabel.addEventListener('click', maleSelected);
// femaleCheckbox.addEventListener('click', femaleSelected);
// femaleCheckboxLabel.addEventListener('click', femaleSelected);
// no_genderCheckbox.addEventListener('click', no_genderSelected);
// no_genderCheckboxLabel.addEventListener('click', no_genderSelected);
// registerAsLocal_y_checkbox.addEventListener('click', doRegisterAsLocal);
// registerAsLocal_yLabel.addEventListener('click', doRegisterAsLocal);
// registerAsLocal_n_checkbox.addEventListener('click', dontRegisterAsLocal);
// registerAsLocal_nLabel.addEventListener('click', dontRegisterAsLocal);
// passInput.addEventListener('keyup', checkPass);
// re_passInput.addEventListener('keyup', checkPassRepass);
