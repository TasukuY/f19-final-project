
const baseURL = `http://localhost:5100/localseelocaldo/`;

const redirectToSignupBtn = document.getElementById('redirectToSignup');
const redirectToLoginP = document.getElementById('redirectToLogin');

function redirectToSignup(event){
    event.preventDefault();
    location.href = './signup.html';
}

function redirectToLogin(event){
    event.preventDefault();
    location.href = './login.html';
}

// function test(){
//     axios.get(baseURL+'test')
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => console.log(err))
// }

redirectToSignupBtn.addEventListener('click', redirectToSignup);
redirectToLoginP.addEventListener('click', redirectToLogin);