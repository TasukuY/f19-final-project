
const baseURL = `http://localhost:5100/localseelocaldo/`;

const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const passWrongDiv = document.getElementById('passWrong');
export const a = 'a';

function redirectToTravelerHome(){
    location.href = './travelerHome.html';
}

function login(event){
    event.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;

    body = {
        email,
        password
    }

    axios.post(baseURL+'login', body)
    .then(res => {
        let user = res.data[0]
        if(user === undefined){
            
            console.log('email or password is wrong.');
            passWrongDiv.innerHTML = '';
            let passWrongPara = document.createElement('p');
            let passWrongText = document.createTextNode('email or password is incorrect. please retry again.');
            passWrongPara.appendChild(passWrongText);
            passWrongDiv.appendChild(passWrongPara);
        }else{
            console.log(user);
            // location.href = './travelerHome.html';
        }
    })
    .catch(err => console.log(err));
}

loginBtn.addEventListener('click', login);

