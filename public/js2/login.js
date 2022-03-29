
const baseURL = `http://localhost:5100/localseelocaldo/`;

const loginBtn = document.getElementById('loginBtn');
const login_emailInput = document.getElementById('login_emailInput');
const login_passwordInput = document.getElementById('login_passwordInput');
const login_passWrongDiv = document.getElementById('login_passWrongDiv');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let email = login_emailInput.value;
    let password = login_passwordInput.value;
    let body = {email, password};
    axios.post(baseURL+'login', body)
    .then(res => {
        let user = res.data[0]
        //login unsuccessful
        if(user === undefined){
            login_passWrongDiv.innerHTML = '';
            let passWrongPara = document.createElement('p');
            let passWrongText = document.createTextNode('email or password is incorrect. please retry again.');
            passWrongPara.appendChild(passWrongText);
            login_passWrongDiv.appendChild(passWrongPara);
        //login successful
        }else{
            console.log(user);
        }
    })
    .catch(err => console.log(err));

});
