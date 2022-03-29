
const baseURL = `http://localhost:5100/localseelocaldo/`;

//Login page html elements' connection starts here
const login_body = document.getElementById('login_body');
const login_btn = document.getElementById('login_btn');
const login_email_input = document.getElementById('login_email_input');
const login_password_input = document.getElementById('login_password_input');
const login_isLocal_check = document.getElementById('login_isLocal_check');
const login_passWrong_div = document.getElementById('login_passWrong_div');
//Login page html elements' connection starts here

//Account page html elements' connection starts here
const account_body = document.getElementById('account_body');
const accont_username_div = document.getElementById('accont_username_div');
const account_username_h = document.getElementById('account_username_h');
const account_user_location_div = document.getElementById('account_user_location_div');
const account_user_location_h = document.getElementById('account_user_location_h');
const account_user_email_div = document.getElementById('account_user_email_div');
const account_user_email_h = document.getElementById('account_user_email_h');
const account_review_div = document.getElementById('account_review_div');
const account_review_h = document.getElementById('account_review_h');
const account_post_new_trip_div = document.getElementById('account_post_new_trip_div');
const account_post_new_trip_btn = document.getElementById('account_post_new_trip_btn');
const account_pending_trip_plan_div = document.getElementById('account_pending_trip_plan_div');
const account_pending_trip_plan_h = document.getElementById('account_pending_trip_plan_h');
const account_trip_proposals_from_local_div = document.getElementById('account_trip_proposals_from_local_div');
const account_trip_proposals_from_local_h = document.getElementById('account_trip_proposals_from_local_h');
const account_trip_plan_div = document.getElementById('account_trip_plan_div');
const account_trip_plan_h = document.getElementById('account_trip_plan_h');
const account_past_trip_plan_div = document.getElementById('account_past_trip_plan_div');
const account_past_trip_plan_h = document.getElementById('account_past_trip_plan_h');
const account_trip_request_from_travelers_div = document.getElementById('account_trip_request_from_travelers_div');
//Account page html elements' connection ends here

login_btn.addEventListener('click', (event) => {
    event.preventDefault();
    let email = login_email_input.value;
    let password = login_password_input.value;
    let isLocal = login_isLocal_check.checked;
    console.log(isLocal);
    let body = {email, password, isLocal};
    axios.post(baseURL+'login', body)
    .then(res => {
        let user = res.data[0]
        //login unsuccessful
        if(user === undefined){
            login_passWrong_div.innerHTML = '';
            let passWrongPara = document.createElement('p');
            let passWrongText = document.createTextNode('email or password is incorrect. please retry again.');
            passWrongPara.appendChild(passWrongText);
            login_passWrong_div.appendChild(passWrongPara);
        //login successful
        }else{
            console.log(user);
            account_body.style.display = "block";
            login_body.style.display = "none";

            let usernameNode = document.createTextNode(`${user.username}`);
            account_username_h.innerHTML = '';
            account_username_h.appendChild(usernameNode);
            let locationNode = document.createTextNode(`${user.city_name}, ${user.country_name}`);
            account_user_location_h.innerHTML = '';
            account_user_location_h.appendChild(locationNode);
            let emailNode = document.createTextNode(`${user.email}`);
            account_user_email_h.innerHTML = '';
            account_user_email_h.appendChild(emailNode);
            if(user.review){
                let reviewNode = document.createTextNode(`${user.review}`);
                account_review_h.innerHTML = '';
                account_review_h.appendChild(reviewNode);
                account_review_h.style.display = "block";
                account_trip_request_from_travelers_div.style.display = "block";
            }
        }
    })
    .catch(err => console.log(err));

});