
const baseURL = `http://localhost:5100/locals/`;

const registerBtn = document.getElementById('registerBtn');
const firstnameInput = document.getElementById('firstnameInput');
const lastnameInput = document.getElementById('lastnameInput');
const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('emailInput');
const maleCheckbox = document.getElementById('maleCheckbox');
const femaleCheckbox = document.getElementById('femaleCheckbox');
const no_genderCheckbox = document.getElementById('no-genderCheckbox');
const passInput = document.getElementById('passInput');
const re_passInput = document.getElementById('re-passInput');
const registerAsLocal_y_checkbox = document.getElementById('registerAsLocal-y-checkbox');
const registerAsLocal_n_checkbox = document.getElementById('registerAsLocal-n-checkbox');
const maleCheckboxLabel = document.getElementById('maleCheckboxLabel');
const femaleCheckboxLabel = document.getElementById('femaleCheckboxLabel');
const no_genderCheckboxLabel = document.getElementById('no-genderCheckboxLabel');
const registerAsLocal_yLabel = document.getElementById('registerAsLocal-yLabel');
const registerAsLocal_nLabel = document.getElementById('registerAsLocal-nLabel');

function addNewUser(event){
    event.preventDefault();

    // let body = {
    //     first_name: firstnameInput.value,
    //     last_name: lastnameInput.value,
    //     username: usernameInput.value,
    //     gender: ,
    //     email: emailInput.value,
    //     password: passInput.value,
    //     registerAsLocal: ,
    // }

    console.log(firstnameInput.value);
    console.log(lastnameInput.value);
    console.log(usernameInput.value);
    console.log(emailInput.value);
    console.log(passInput.value);
    console.log(re_passInput.value);
    console.log(genderCheck());
    console.log(registerAsLocalCheck());

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


/*
*/