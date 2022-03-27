
const baseURL = `http://localhost:5100/localseelocaldo/`;

const redirectToSignupBtn = document.getElementById('redirectToSignup');
const redirectToLoginP = document.getElementById('redirectToLogin');

function redirectToSignup(event){
    event.preventDefault();
    location.href = './localseelocaldo_reg_all.html';
}

function redirectToLogin(event){
    event.preventDefault();
    location.href = './localseelocaldo_log_all.html';
}

redirectToSignupBtn.addEventListener('click', redirectToSignup);
redirectToLoginP.addEventListener('click', redirectToLogin);