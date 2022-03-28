
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
const account_see_trip_request_from_travelers_div = document.getElementById('account_see_trip_request_from_travelers_div');
//Account page html elements' connection ends here

//New Trip Draft Form page html elements' connection starts here
const new_trip_draft_body = document.getElementById('new_trip_draft_body');
const countriesSec = document.getElementById('countriesSec');
const citiesSec = document.getElementById('citiesSec');
const startDateInput = document.getElementById('startDateInput');
const endDateInput = document.getElementById('endDateInput');
const numberOfPeopleInput = document.getElementById('numberOfPeopleInput');
const budgetInput = document.getElementById('budgetInput');
const includeHotelCheck = document.getElementById('includeHotelCheck');
const includeMealCheck = document.getElementById('includeMealCheck');
const includeTranspotationCheck = document.getElementById('includeTranspotationCheck');
const budgetDetailTextarea = document.getElementById('budgetDetailTextarea');
const noteTextarea = document.getElementById('noteTextarea');
const trip_draft_nextBtn = document.getElementById('trip_draft_nextBtn');
const draft_form_backToAccount = document.getElementById('draft_form_backToAccount');
const trip_draft_posted_confirmation_body = document.getElementById('trip_draft_posted_confirmation_body');
const confirmation_backToAccount = document.getElementById('confirmation_backToAccount');
//New Trip Draft Form page html elements' connection ends here

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
                let reviewNode = document.createTextNode(`${userObj.review}`);
                account_review_h3.innerHTML = '';
                account_review_h3.appendChild(reviewNode);
                account_review_h3.style.display = "block";
                account_see_trip_request_from_travelers_div.style.display = "block";
            }
            //get all trip_drafts, trip_proposals, trip_plans from db and show it on the account page
            axios.get(baseURL + `get_trip_drafts/${userObj.user_id}`)
                .then(res => {
                    if(res.data.length >= 1){
                        for(let i = 0; i < res.data.length; i++){
                            let trip_draftObj = res.data[i];
                            let include_hotel_fee_text = (trip_draftObj.include_hotel_fee) ? 'Budget include hotel fee - Yes' : 'Budget include hotel fee - No';
                            let include_meal_fee_text = (trip_draftObj.include_meal_fee) ? 'Budget include Meal fee - Yes' : 'Budget include Meal fee - No';
                            let include_transport_fee_text = (trip_draftObj.include_transport_fee) ? 'Budget include transportation fee - Yes' : 'Budget include transportation fee - No';
                            
                            let new_trip_draft_div = document.createElement('div');
                            let new_trip_draft_title_h5 = document.createElement('h5');
                            let new_trip_draft_title_node = document.createTextNode(`Trip to ${trip_draftObj.city_name}, ${trip_draftObj.country_name}`);
                            new_trip_draft_title_h5.appendChild(new_trip_draft_title_node);
                            new_trip_draft_div.appendChild(new_trip_draft_title_h5);
                            let new_trip_draft_date_P = document.createElement('p');
                            let new_trip_draft_date_node = document.createTextNode(`${trip_draftObj.start_date.slice(5, 10).split('-')[0]}/${trip_draftObj.start_date.slice(5, 10).split('-')[1]}/${trip_draftObj.start_date.slice(0, 4)} to ${trip_draftObj.end_date.slice(5, 10).split('-')[0]}/${trip_draftObj.end_date.slice(5, 10).split('-')[1]}/${trip_draftObj.end_date.slice(0, 4)}`);
                            new_trip_draft_date_P.appendChild(new_trip_draft_date_node);
                            new_trip_draft_div.appendChild(new_trip_draft_date_P);
                            let num_of_pple_P = document.createElement('p');
                            let num_of_pple_node = document.createTextNode(`Group of ${trip_draftObj.num_of_ppl}`);
                            num_of_pple_P.appendChild(num_of_pple_node);
                            new_trip_draft_div.appendChild(num_of_pple_P);
                            let budget_per_person_P = document.createElement('p');
                            let budget_per_person_node = document.createTextNode(`Budget Per Person: $${trip_draftObj.budget}`);
                            budget_per_person_P.appendChild(budget_per_person_node);
                            new_trip_draft_div.appendChild(budget_per_person_P);
                            let include_hotel_fee_P = document.createElement('p');
                            let include_hotel_fee_node = document.createTextNode(`${include_hotel_fee_text}`);
                            include_hotel_fee_P.appendChild(include_hotel_fee_node);
                            new_trip_draft_div.appendChild(include_hotel_fee_P);
                            let include_meal_fee_P = document.createElement('p');
                            let include_meal_fee_node = document.createTextNode(`${include_meal_fee_text}`);
                            include_meal_fee_P.appendChild(include_meal_fee_node);
                            new_trip_draft_div.appendChild(include_meal_fee_P);
                            let include_transport_fee_P = document.createElement('p');
                            let include_transport_fee_node = document.createTextNode(`${include_transport_fee_text}`);
                            include_transport_fee_P.appendChild(include_transport_fee_node);
                            new_trip_draft_div.appendChild(include_transport_fee_P);
                            let budget_detail_P = document.createElement('p');
                            let budget_detail_Node = document.createTextNode(`Budget Details: ${trip_draftObj.budget_detail}`);
                            budget_detail_P.appendChild(budget_detail_Node);
                            new_trip_draft_div.appendChild(budget_detail_P);
                            let note_P = document.createElement('p');
                            let note_node = document.createTextNode(`Note: ${trip_draftObj.note}`);
                            note_P.appendChild(note_node);
                            new_trip_draft_div.appendChild(note_P);
                            account_pending_trip_plan_div.appendChild(new_trip_draft_div);
                        }
                    }
                })
                .catch(err => console.log(err));

                account_pending_trip_plan_div


            //Account page js ends here
            //create a new trip plan draft -> show trip draft form
            account_post_new_trip_div.addEventListener('click', (event) => {
                event.preventDefault();
                account_body.style.display = "none";
                new_trip_draft_body.style.display = "block";
            });
            draft_form_backToAccount.addEventListener('click', (event) => {
                event.preventDefault();
                new_trip_draft_body.style.display = "none";
                account_body.style.display = "block";
                //get all trip_drafts, trip_proposals, trip_plans from db and show it on the account page
                axios.get(baseURL + `get_trip_drafts/${userObj.user_id}`)
                    .then(res => {
                        if(res.data.length >= 1){
                            for(let i = 0; i < res.data.length; i++){
                                let trip_draftObj = res.data[i];
                                let include_hotel_fee_text = (trip_draftObj.include_hotel_fee) ? 'Budget include hotel fee - Yes' : 'Budget include hotel fee - No';
                                let include_meal_fee_text = (trip_draftObj.include_meal_fee) ? 'Budget include Meal fee - Yes' : 'Budget include Meal fee - No';
                                let include_transport_fee_text = (trip_draftObj.include_transport_fee) ? 'Budget include transportation fee - Yes' : 'Budget include transportation fee - No';
                                
                                let new_trip_draft_div = document.createElement('div');
                                let new_trip_draft_title_h5 = document.createElement('h5');
                                let new_trip_draft_title_node = document.createTextNode(`Trip to ${trip_draftObj.city_name}, ${trip_draftObj.country_name}`);
                                new_trip_draft_title_h5.appendChild(new_trip_draft_title_node);
                                new_trip_draft_div.appendChild(new_trip_draft_title_h5);
                                let new_trip_draft_date_P = document.createElement('p');
                                let new_trip_draft_date_node = document.createTextNode(`${trip_draftObj.start_date.slice(5, 10).split('-')[0]}/${trip_draftObj.start_date.slice(5, 10).split('-')[1]}/${trip_draftObj.start_date.slice(0, 4)} to ${trip_draftObj.end_date.slice(5, 10).split('-')[0]}/${trip_draftObj.end_date.slice(5, 10).split('-')[1]}/${trip_draftObj.end_date.slice(0, 4)}`);
                                new_trip_draft_date_P.appendChild(new_trip_draft_date_node);
                                new_trip_draft_div.appendChild(new_trip_draft_date_P);
                                let num_of_pple_P = document.createElement('p');
                                let num_of_pple_node = document.createTextNode(`Group of ${trip_draftObj.num_of_ppl}`);
                                num_of_pple_P.appendChild(num_of_pple_node);
                                new_trip_draft_div.appendChild(num_of_pple_P);
                                let budget_per_person_P = document.createElement('p');
                                let budget_per_person_node = document.createTextNode(`Budget Per Person: $${trip_draftObj.budget}`);
                                budget_per_person_P.appendChild(budget_per_person_node);
                                new_trip_draft_div.appendChild(budget_per_person_P);
                                let include_hotel_fee_P = document.createElement('p');
                                let include_hotel_fee_node = document.createTextNode(`${include_hotel_fee_text}`);
                                include_hotel_fee_P.appendChild(include_hotel_fee_node);
                                new_trip_draft_div.appendChild(include_hotel_fee_P);
                                let include_meal_fee_P = document.createElement('p');
                                let include_meal_fee_node = document.createTextNode(`${include_meal_fee_text}`);
                                include_meal_fee_P.appendChild(include_meal_fee_node);
                                new_trip_draft_div.appendChild(include_meal_fee_P);
                                let include_transport_fee_P = document.createElement('p');
                                let include_transport_fee_node = document.createTextNode(`${include_transport_fee_text}`);
                                include_transport_fee_P.appendChild(include_transport_fee_node);
                                new_trip_draft_div.appendChild(include_transport_fee_P);
                                let budget_detail_P = document.createElement('p');
                                let budget_detail_Node = document.createTextNode(`Budget Details: ${trip_draftObj.budget_detail}`);
                                budget_detail_P.appendChild(budget_detail_Node);
                                new_trip_draft_div.appendChild(budget_detail_P);
                                let note_P = document.createElement('p');
                                let note_node = document.createTextNode(`Note: ${trip_draftObj.note}`);
                                note_P.appendChild(note_node);
                                new_trip_draft_div.appendChild(note_P);
                                account_pending_trip_plan_div.appendChild(new_trip_draft_div);
                            }
                        }
                    })
                    .catch(err => console.log(err));
            });
            countriesSec.onchange = (event) => {
                event.preventDefault();
                let country_name = countriesSec.value; 
                axios.get(baseURL + `load_cities/${country_name}`)
                    .then(res => {
                        if(res.data[0] === undefined){
                            let selectOpt = document.createElement('option');
                            let selectNode = document.createTextNode('select the city');
                            let cityOpt = document.createElement('option');
                            let cityNode = document.createTextNode('No cities registered in this country');
                            selectOpt.appendChild(selectNode);
                            cityOpt.appendChild(cityNode);
                            citiesSec.innerHTML = '';
                            citiesSec.appendChild(selectOpt);
                            citiesSec.appendChild(cityOpt);
                        }else{
                            citiesSec.innerHTML = '';
                            let selectOpt = document.createElement('option');
                            let selectNode = document.createTextNode('select the city');
                            selectOpt.appendChild(selectNode);
                            citiesSec.appendChild(selectOpt);
                            for(let i = 0; i < res.data.length; i++){
                                let cityOpt = document.createElement('option');
                                let cityNode = document.createTextNode(`${res.data[i].city_name}`);
                                cityOpt.appendChild(cityNode);
                                citiesSec.appendChild(cityOpt);
                            }
                        }
                    })
                    .catch(err => console.log(err));
            }
            
            trip_draft_nextBtn.addEventListener('click', (event) => {
                event.preventDefault();
                //get countryID
                axios.get(baseURL + `getCountryID/${countriesSec.value}`)
                    .then(res => {
                        let countryID = res.data[0].country_id
                        //get cityID
                        axios.get(baseURL + `getCityID/${citiesSec.value}`)
                            .then(res => {
                                let cityID = res.data[0].city_id
                                let body = {
                                    user_id: userObj.user_id,
                                    country_id: countryID,
                                    city_id: cityID,
                                    start_date: startDateInput.value,
                                    end_date: endDateInput.value,
                                    num_of_ppl: numberOfPeopleInput.value,
                                    budget: budgetInput.value,
                                    include_hotel_fee: includeHotelCheck.checked,
                                    include_meal_fee: includeMealCheck.checked,
                                    include_transport_fee: includeTranspotationCheck.checked,
                                    budget_detail: budgetDetailTextarea.value,
                                    note: noteTextarea.value
                                }
            
                                axios.post(baseURL + 'post_new_trip_draft', body)
                                    .then(res => {
                                        clearTripDraftForm();
                                        new_trip_draft_body.style.display = "none";
                                        trip_draft_posted_confirmation_body.style.display = "block";
                                        confirmation_backToAccount.addEventListener('click', (event) => {
                                            event.preventDefault();
                                            trip_draft_posted_confirmation_body.style.display = "none";
                                            account_body.style.display = "block";
                                            //get all trip_drafts, trip_proposals, trip_plans from db and show it on the account page
                                            axios.get(baseURL + `get_trip_drafts/${userObj.user_id}`)
                                                .then(res => {
                                                    if(res.data.length >= 1){
                                                        for(let i = 0; i < res.data.length; i++){
                                                            let trip_draftObj = res.data[i];
                                                            let include_hotel_fee_text = (trip_draftObj.include_hotel_fee) ? 'Budget include hotel fee - Yes' : 'Budget include hotel fee - No';
                                                            let include_meal_fee_text = (trip_draftObj.include_meal_fee) ? 'Budget include Meal fee - Yes' : 'Budget include Meal fee - No';
                                                            let include_transport_fee_text = (trip_draftObj.include_transport_fee) ? 'Budget include transportation fee - Yes' : 'Budget include transportation fee - No';
                                                            
                                                            let new_trip_draft_div = document.createElement('div');
                                                            let new_trip_draft_title_h5 = document.createElement('h5');
                                                            let new_trip_draft_title_node = document.createTextNode(`Trip to ${trip_draftObj.city_name}, ${trip_draftObj.country_name}`);
                                                            new_trip_draft_title_h5.appendChild(new_trip_draft_title_node);
                                                            new_trip_draft_div.appendChild(new_trip_draft_title_h5);
                                                            let new_trip_draft_date_P = document.createElement('p');
                                                            let new_trip_draft_date_node = document.createTextNode(`${trip_draftObj.start_date.slice(5, 10).split('-')[0]}/${trip_draftObj.start_date.slice(5, 10).split('-')[1]}/${trip_draftObj.start_date.slice(0, 4)} to ${trip_draftObj.end_date.slice(5, 10).split('-')[0]}/${trip_draftObj.end_date.slice(5, 10).split('-')[1]}/${trip_draftObj.end_date.slice(0, 4)}`);
                                                            new_trip_draft_date_P.appendChild(new_trip_draft_date_node);
                                                            new_trip_draft_div.appendChild(new_trip_draft_date_P);
                                                            let num_of_pple_P = document.createElement('p');
                                                            let num_of_pple_node = document.createTextNode(`Group of ${trip_draftObj.num_of_ppl}`);
                                                            num_of_pple_P.appendChild(num_of_pple_node);
                                                            new_trip_draft_div.appendChild(num_of_pple_P);
                                                            let budget_per_person_P = document.createElement('p');
                                                            let budget_per_person_node = document.createTextNode(`Budget Per Person: $${trip_draftObj.budget}`);
                                                            budget_per_person_P.appendChild(budget_per_person_node);
                                                            new_trip_draft_div.appendChild(budget_per_person_P);
                                                            let include_hotel_fee_P = document.createElement('p');
                                                            let include_hotel_fee_node = document.createTextNode(`${include_hotel_fee_text}`);
                                                            include_hotel_fee_P.appendChild(include_hotel_fee_node);
                                                            new_trip_draft_div.appendChild(include_hotel_fee_P);
                                                            let include_meal_fee_P = document.createElement('p');
                                                            let include_meal_fee_node = document.createTextNode(`${include_meal_fee_text}`);
                                                            include_meal_fee_P.appendChild(include_meal_fee_node);
                                                            new_trip_draft_div.appendChild(include_meal_fee_P);
                                                            let include_transport_fee_P = document.createElement('p');
                                                            let include_transport_fee_node = document.createTextNode(`${include_transport_fee_text}`);
                                                            include_transport_fee_P.appendChild(include_transport_fee_node);
                                                            new_trip_draft_div.appendChild(include_transport_fee_P);
                                                            let budget_detail_P = document.createElement('p');
                                                            let budget_detail_Node = document.createTextNode(`Budget Details: ${trip_draftObj.budget_detail}`);
                                                            budget_detail_P.appendChild(budget_detail_Node);
                                                            new_trip_draft_div.appendChild(budget_detail_P);
                                                            let note_P = document.createElement('p');
                                                            let note_node = document.createTextNode(`Note: ${trip_draftObj.note}`);
                                                            note_P.appendChild(note_node);
                                                            new_trip_draft_div.appendChild(note_P);
                                                            account_pending_trip_plan_div.appendChild(new_trip_draft_div);
                                                        }
                                                    }
                                                })
                                                .catch(err => console.log(err));
                                        });
                                    }) 
                                    .catch(err => console.log(err));
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))   
            })

        })
        .catch(err => console.log(err));
}
function clearTripDraftForm(){
    countriesSec.value = '';
    citiesSec.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
    numberOfPeopleInput.value = '';
    budgetInput.value = '';
    includeHotelCheck.checked = false;
    includeMealCheck.checked = false;
    includeTranspotationCheck.checked = false;
    budgetDetailTextarea.value = '';
    noteTextarea.value = '';
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
