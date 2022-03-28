
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
const account_trip_request_from_travelers_div = document.getElementById('account_trip_request_from_travelers_div');
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

//Trip plan proposal Form page html elements' connection starts here
const show_tripPlan_title_description_sec = document.getElementById('show_tripPlan_title_description_sec');
const already_made_day_schedule_sec = document.getElementById('already_made_day_schedule_sec');
const currently_makind_day_schedule_sec = document.getElementById('currently_makind_day_schedule_sec');
const titleOfTripInput = document.getElementById('titleOfTripInput');
const tripDraftIDInput = document.getElementById('tripDraftIDInput');
const trip_descriptionTxtarea = document.getElementById('trip_descriptionTxtarea');
const addTrip_title_description = document.getElementById('addTrip_title_description');
const number_of_the_day = document.getElementById('number_of_the_day');
const dateInput = document.getElementById('dateInput');
const dayTitleInput = document.getElementById('dayTitleInput');
const day_descriptionTxtarea = document.getElementById('day_descriptionTxtarea');
const addDayBtn = document.getElementById('addDayBtn');
const number_of_the_day_for_event = document.getElementById('number_of_the_day_for_event');
const number_of_the_day_for_addBtn = document.getElementById('number_of_the_day_for_addBtn');
const eventStartInput = document.getElementById('eventStartInput');
const event_total_hourInput = document.getElementById('event_total_hourInput');
const event_titleInput = document.getElementById('event_titleInput');
const event_descriptionTxtarea = document.getElementById('event_descriptionTxtarea');
const addEventBtn = document.getElementById('addEventBtn');
const colorsSec = document.getElementById('colorsSec');
const addAnotherDayBtn = document.getElementById('addAnotherDayBtn');
const send_to_travelerBtn = document.getElementById('send_to_travelerBtn');
const trip_proposal_show_trip_draft_div = document.getElementById('trip_proposal_show_trip_draft_div');
const day_paln_sec = document.getElementById('day_paln_sec');
let dayNum = 1;
let dayNum2 = 0;
//Trip plan proposal Form page html elements' connection ends here

//default page setting
registerBtn.disabled = true;
no_genderCheckbox.checked = true;
registerAsLocal_n_checkbox.checked = true;
let numNode = document.createTextNode(`${dayNum}`);
let numNode2 = document.createTextNode(`${dayNum}`);
let numNode3 = document.createTextNode(`${dayNum}`);
number_of_the_day.appendChild(numNode);
number_of_the_day_for_event.appendChild(numNode2);
number_of_the_day_for_addBtn.appendChild(numNode3);

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
                account_trip_request_from_travelers_div.style.display = "block";
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
            //get all trip_drafts from travelers
            if(account_trip_request_from_travelers_div.style.display === "block"){
                axios.get(baseURL + `get_trip_requests_from_travelers/${userObj.city_name}`)
                    .then(res => {
                        if(res.data.length >= 1){
                            for(let i = 0; i < res.data.length; i++){
                                let trip_requestObj = res.data[i];
                                let include_hotel_fee_text = (trip_requestObj.include_hotel_fee) ? 'Budget include hotel fee - Yes' : 'Budget include hotel fee - No';
                                let include_meal_fee_text = (trip_requestObj.include_meal_fee) ? 'Budget include Meal fee - Yes' : 'Budget include Meal fee - No';
                                let include_transport_fee_text = (trip_requestObj.include_transport_fee) ? 'Budget include transportation fee - Yes' : 'Budget include transportation fee - No';
                                
                                let trip_request_div = document.createElement('div');
                                let trip_draft_id_P = document.createElement('p');
                                let trip_draft_id_node = document.createTextNode(`Trip Draft ID: ${trip_requestObj.trip_draft_id}`);
                                trip_draft_id_P.appendChild(trip_draft_id_node);
                                trip_request_div.appendChild(trip_draft_id_P);
                                let trip_req_title_h5 = document.createElement('h5');
                                let trip_req_title_node = document.createTextNode(`${trip_requestObj.username}'s Trip to ${trip_requestObj.city_name}, ${trip_requestObj.country_name}`);
                                trip_req_title_h5.appendChild(trip_req_title_node);
                                trip_request_div.appendChild(trip_req_title_h5);
                                let rip_req_date_P = document.createElement('p');
                                let rip_req_date_node = document.createTextNode(`${trip_requestObj.start_date.slice(5, 10).split('-')[0]}/${trip_requestObj.start_date.slice(5, 10).split('-')[1]}/${trip_requestObj.start_date.slice(0, 4)} to ${trip_requestObj.end_date.slice(5, 10).split('-')[0]}/${trip_requestObj.end_date.slice(5, 10).split('-')[1]}/${trip_requestObj.end_date.slice(0, 4)}`);
                                rip_req_date_P.appendChild(rip_req_date_node);
                                trip_request_div.appendChild(rip_req_date_P);
                                let num_of_pple_P = document.createElement('p');
                                let num_of_pple_node = document.createTextNode(`Group of ${trip_requestObj.num_of_ppl}`);
                                num_of_pple_P.appendChild(num_of_pple_node);
                                trip_request_div.appendChild(num_of_pple_P);
                                let budget_per_person_P = document.createElement('p');
                                let budget_per_person_node = document.createTextNode(`Budget Per Person: $${trip_requestObj.budget}`);
                                budget_per_person_P.appendChild(budget_per_person_node);
                                trip_request_div.appendChild(budget_per_person_P);
                                let include_hotel_fee_P = document.createElement('p');
                                let include_hotel_fee_node = document.createTextNode(`${include_hotel_fee_text}`);
                                include_hotel_fee_P.appendChild(include_hotel_fee_node);
                                trip_request_div.appendChild(include_hotel_fee_P);
                                let include_meal_fee_P = document.createElement('p');
                                let include_meal_fee_node = document.createTextNode(`${include_meal_fee_text}`);
                                include_meal_fee_P.appendChild(include_meal_fee_node);
                                trip_request_div.appendChild(include_meal_fee_P);
                                let include_transport_fee_P = document.createElement('p');
                                let include_transport_fee_node = document.createTextNode(`${include_transport_fee_text}`);
                                include_transport_fee_P.appendChild(include_transport_fee_node);
                                trip_request_div.appendChild(include_transport_fee_P);
                                let budget_detail_P = document.createElement('p');
                                let budget_detail_Node = document.createTextNode(`Budget Details: ${trip_requestObj.budget_detail}`);
                                budget_detail_P.appendChild(budget_detail_Node);
                                trip_request_div.appendChild(budget_detail_P);
                                let note_P = document.createElement('p');
                                let note_node = document.createTextNode(`Note: ${trip_requestObj.note}`);
                                note_P.appendChild(note_node);
                                trip_request_div.appendChild(note_P);
                                trip_request_div.id = 'trip_request_from_travelers_card'
                                account_trip_request_from_travelers_div.appendChild(trip_request_div);
                            }
                            //show trip draft at the top of trip proposal form page
                            for(let i = 1; i < account_trip_request_from_travelers_div.children.length; i++){
                                account_trip_request_from_travelers_div.children[i].addEventListener('click', (event) => {
                                    event.preventDefault()
                                    account_body.style.display = "none";
                                    trip_proposal_body.style.display = "block";
                                    //make trip draft elements
                                    let trip_requestArr = account_trip_request_from_travelers_div.children[i].children;
                                    let trip_request_div = document.createElement('div');
                                    let trip_draft_id_P = document.createElement('p');
                                    let trip_draft_id_node = document.createTextNode(`${trip_requestArr[0].innerText}`);
                                    trip_draft_id_P.appendChild(trip_draft_id_node);
                                    trip_request_div.appendChild(trip_draft_id_P);
                                    let trip_req_title_h5 = document.createElement('h5');
                                    let trip_req_title_node = document.createTextNode(`${trip_requestArr[1].innerText}`);
                                    trip_req_title_h5.appendChild(trip_req_title_node);
                                    trip_request_div.appendChild(trip_req_title_h5);
                                    let rip_req_date_P = document.createElement('p');
                                    let rip_req_date_node = document.createTextNode(`${trip_requestArr[2].innerText}`);
                                    rip_req_date_P.appendChild(rip_req_date_node);
                                    trip_request_div.appendChild(rip_req_date_P);
                                    let num_of_pple_P = document.createElement('p');
                                    let num_of_pple_node = document.createTextNode(`${trip_requestArr[3].innerText}`);
                                    num_of_pple_P.appendChild(num_of_pple_node);
                                    trip_request_div.appendChild(num_of_pple_P);
                                    let budget_per_person_P = document.createElement('p');
                                    let budget_per_person_node = document.createTextNode(`${trip_requestArr[4].innerText}`);
                                    budget_per_person_P.appendChild(budget_per_person_node);
                                    trip_request_div.appendChild(budget_per_person_P);
                                    let include_hotel_fee_P = document.createElement('p');
                                    let include_hotel_fee_node = document.createTextNode(`${trip_requestArr[5].innerText}`);
                                    include_hotel_fee_P.appendChild(include_hotel_fee_node);
                                    trip_request_div.appendChild(include_hotel_fee_P);
                                    let include_meal_fee_P = document.createElement('p');
                                    let include_meal_fee_node = document.createTextNode(`${trip_requestArr[6].innerText}`);
                                    include_meal_fee_P.appendChild(include_meal_fee_node);
                                    trip_request_div.appendChild(include_meal_fee_P);
                                    let include_transport_fee_P = document.createElement('p');
                                    let include_transport_fee_node = document.createTextNode(`${trip_requestArr[7].innerText}`);
                                    include_transport_fee_P.appendChild(include_transport_fee_node);
                                    trip_request_div.appendChild(include_transport_fee_P);
                                    let budget_detail_P = document.createElement('p');
                                    let budget_detail_Node = document.createTextNode(`${trip_requestArr[8].innerText}`);
                                    budget_detail_P.appendChild(budget_detail_Node);
                                    trip_request_div.appendChild(budget_detail_P);
                                    let note_P = document.createElement('p');
                                    let note_node = document.createTextNode(`${trip_requestArr[9].innerText}`);
                                    note_P.appendChild(note_node);
                                    trip_request_div.appendChild(note_P);
                                    trip_request_div.id = 'trip_request_from_travelers_card'
                                    trip_proposal_show_trip_draft_div.appendChild(trip_request_div);
                                })
                            }  
                            // trip proposal form starts here
                            addTrip_title_description.addEventListener('click', (event) => {
                                event.preventDefault();
                                let tripTitle = titleOfTripInput.value;
                                let tripDraftID = tripDraftIDInput.value;
                                let tripDescription = trip_descriptionTxtarea.value;

                                axios.get(baseURL + `get_local_id/${userObj.user_id}`)
                                    .then(res => {
                                        let local_id = res.data[0].local_id;
                                        let body = {
                                            trip_draft_id: tripDraftID,
                                            local_id: local_id,
                                            trip_title: tripTitle,
                                            trip_description: tripDescription
                                        }
                                        //trip proposal title and description appears. 
                                        axios.post(baseURL + 'add_title_description', body)
                                            .then(res => {
                                                let titleH = document.createElement('h1');
                                                let ttileText = document.createTextNode(`${res.data[0].proposal_title}`);
                                                let descriptionH = document.createElement('h3');
                                                let descriptionText = document.createTextNode(`${res.data[0].proposal_description}`);
                                                titleH.appendChild(ttileText);
                                                descriptionH.appendChild(descriptionText);
                                                show_tripPlan_title_description_sec.appendChild(titleH);
                                                show_tripPlan_title_description_sec.appendChild(descriptionText);
                                                add_tripPlan_title_description.style.display = "none";
                                                //add a day_plan
                                                let trip_proposal_id = res.data[0].trip_proposal_id;
                                                addDayBtn.addEventListener('click', (event) => {
                                                    event.preventDefault();
                                                    let day_date = dateInput.value;
                                                    let day_title = dayTitleInput.value;
                                                    let day_description = day_descriptionTxtarea.value;
                                                    let body = {
                                                        trip_proposal_id,
                                                        day_date,
                                                        day_title,
                                                        day_description
                                                    }
                                                    axios.post(baseURL + 'add_day', body)
                                                        .then(res => {
                                                            console.log(res.data);
                                                            let titleH = document.createElement('h4');
                                                            let ttileText = document.createTextNode(`${res.data[0].day_title}`);
                                                            let descriptionH = document.createElement('h6');
                                                            let descriptionText = document.createTextNode(`${res.data[0].day_description}`);
                                                            titleH.appendChild(ttileText);
                                                            descriptionH.appendChild(descriptionText);
                                                            currently_makind_day_schedule_sec.appendChild(titleH);
                                                            currently_makind_day_schedule_sec.appendChild(descriptionH);
                                                            day_paln_sec.style.display = "none";
                                                            //add an event 
                                                            let day_plan_id = res.data[0].day_plan_id;
                                                        })
                                                        .catch(err => console.log(err));
                                                });
                                            })
                                            .catch(err => console.log('add title description ERROR' + err));
                                    })
                                    .catch(err => console.log(err));
                            });
                        }
                       
                    })
                    .catch(err => console.log(err));
            }    

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
                //get all trip_drafts from travelers
                if(account_trip_request_from_travelers_div.style.display === "block"){
                    axios.get(baseURL + `get_trip_requests_from_travelers/${userObj.city_name}`)
                        .then(res => {
                            if(res.data.length >= 1){
                                for(let i = 0; i < res.data.length; i++){
                                    let trip_requestObj = res.data[i];
                                    let include_hotel_fee_text = (trip_requestObj.include_hotel_fee) ? 'Budget include hotel fee - Yes' : 'Budget include hotel fee - No';
                                    let include_meal_fee_text = (trip_requestObj.include_meal_fee) ? 'Budget include Meal fee - Yes' : 'Budget include Meal fee - No';
                                    let include_transport_fee_text = (trip_requestObj.include_transport_fee) ? 'Budget include transportation fee - Yes' : 'Budget include transportation fee - No';
                                    
                                    let trip_request_div = document.createElement('div');
                                    let trip_req_title_h5 = document.createElement('h5');
                                    let trip_req_title_node = document.createTextNode(`${trip_requestObj.username}'s Trip to ${trip_requestObj.city_name}, ${trip_requestObj.country_name}`);
                                    trip_req_title_h5.appendChild(trip_req_title_node);
                                    trip_request_div.appendChild(trip_req_title_h5);
                                    let rip_req_date_P = document.createElement('p');
                                    let rip_req_date_node = document.createTextNode(`${trip_requestObj.start_date.slice(5, 10).split('-')[0]}/${trip_requestObj.start_date.slice(5, 10).split('-')[1]}/${trip_requestObj.start_date.slice(0, 4)} to ${trip_requestObj.end_date.slice(5, 10).split('-')[0]}/${trip_requestObj.end_date.slice(5, 10).split('-')[1]}/${trip_requestObj.end_date.slice(0, 4)}`);
                                    rip_req_date_P.appendChild(rip_req_date_node);
                                    trip_request_div.appendChild(rip_req_date_P);
                                    let num_of_pple_P = document.createElement('p');
                                    let num_of_pple_node = document.createTextNode(`Group of ${trip_requestObj.num_of_ppl}`);
                                    num_of_pple_P.appendChild(num_of_pple_node);
                                    trip_request_div.appendChild(num_of_pple_P);
                                    let budget_per_person_P = document.createElement('p');
                                    let budget_per_person_node = document.createTextNode(`Budget Per Person: $${trip_requestObj.budget}`);
                                    budget_per_person_P.appendChild(budget_per_person_node);
                                    trip_request_div.appendChild(budget_per_person_P);
                                    let include_hotel_fee_P = document.createElement('p');
                                    let include_hotel_fee_node = document.createTextNode(`${include_hotel_fee_text}`);
                                    include_hotel_fee_P.appendChild(include_hotel_fee_node);
                                    trip_request_div.appendChild(include_hotel_fee_P);
                                    let include_meal_fee_P = document.createElement('p');
                                    let include_meal_fee_node = document.createTextNode(`${include_meal_fee_text}`);
                                    include_meal_fee_P.appendChild(include_meal_fee_node);
                                    trip_request_div.appendChild(include_meal_fee_P);
                                    let include_transport_fee_P = document.createElement('p');
                                    let include_transport_fee_node = document.createTextNode(`${include_transport_fee_text}`);
                                    include_transport_fee_P.appendChild(include_transport_fee_node);
                                    trip_request_div.appendChild(include_transport_fee_P);
                                    let budget_detail_P = document.createElement('p');
                                    let budget_detail_Node = document.createTextNode(`Budget Details: ${trip_requestObj.budget_detail}`);
                                    budget_detail_P.appendChild(budget_detail_Node);
                                    trip_request_div.appendChild(budget_detail_P);
                                    let note_P = document.createElement('p');
                                    let note_node = document.createTextNode(`Note: ${trip_requestObj.note}`);
                                    note_P.appendChild(note_node);
                                    trip_request_div.appendChild(note_P);
                                    account_trip_request_from_travelers_div.appendChild(trip_request_div);
                                }
                            }
                        })
                        .catch(err => console.log(err));
                } 
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
                                            //get all trip_drafts from travelers
                                            if(account_trip_request_from_travelers_div.style.display === "block"){
                                                axios.get(baseURL + `get_trip_requests_from_travelers/${userObj.city_name}`)
                                                    .then(res => {
                                                        if(res.data.length >= 1){
                                                            for(let i = 0; i < res.data.length; i++){
                                                                let trip_requestObj = res.data[i];
                                                                let include_hotel_fee_text = (trip_requestObj.include_hotel_fee) ? 'Budget include hotel fee - Yes' : 'Budget include hotel fee - No';
                                                                let include_meal_fee_text = (trip_requestObj.include_meal_fee) ? 'Budget include Meal fee - Yes' : 'Budget include Meal fee - No';
                                                                let include_transport_fee_text = (trip_requestObj.include_transport_fee) ? 'Budget include transportation fee - Yes' : 'Budget include transportation fee - No';
                                                                
                                                                let trip_request_div = document.createElement('div');
                                                                let trip_req_title_h5 = document.createElement('h5');
                                                                let trip_req_title_node = document.createTextNode(`${trip_requestObj.username}'s Trip to ${trip_requestObj.city_name}, ${trip_requestObj.country_name}`);
                                                                trip_req_title_h5.appendChild(trip_req_title_node);
                                                                trip_request_div.appendChild(trip_req_title_h5);
                                                                let rip_req_date_P = document.createElement('p');
                                                                let rip_req_date_node = document.createTextNode(`${trip_requestObj.start_date.slice(5, 10).split('-')[0]}/${trip_requestObj.start_date.slice(5, 10).split('-')[1]}/${trip_requestObj.start_date.slice(0, 4)} to ${trip_requestObj.end_date.slice(5, 10).split('-')[0]}/${trip_requestObj.end_date.slice(5, 10).split('-')[1]}/${trip_requestObj.end_date.slice(0, 4)}`);
                                                                rip_req_date_P.appendChild(rip_req_date_node);
                                                                trip_request_div.appendChild(rip_req_date_P);
                                                                let num_of_pple_P = document.createElement('p');
                                                                let num_of_pple_node = document.createTextNode(`Group of ${trip_requestObj.num_of_ppl}`);
                                                                num_of_pple_P.appendChild(num_of_pple_node);
                                                                trip_request_div.appendChild(num_of_pple_P);
                                                                let budget_per_person_P = document.createElement('p');
                                                                let budget_per_person_node = document.createTextNode(`Budget Per Person: $${trip_requestObj.budget}`);
                                                                budget_per_person_P.appendChild(budget_per_person_node);
                                                                trip_request_div.appendChild(budget_per_person_P);
                                                                let include_hotel_fee_P = document.createElement('p');
                                                                let include_hotel_fee_node = document.createTextNode(`${include_hotel_fee_text}`);
                                                                include_hotel_fee_P.appendChild(include_hotel_fee_node);
                                                                trip_request_div.appendChild(include_hotel_fee_P);
                                                                let include_meal_fee_P = document.createElement('p');
                                                                let include_meal_fee_node = document.createTextNode(`${include_meal_fee_text}`);
                                                                include_meal_fee_P.appendChild(include_meal_fee_node);
                                                                trip_request_div.appendChild(include_meal_fee_P);
                                                                let include_transport_fee_P = document.createElement('p');
                                                                let include_transport_fee_node = document.createTextNode(`${include_transport_fee_text}`);
                                                                include_transport_fee_P.appendChild(include_transport_fee_node);
                                                                trip_request_div.appendChild(include_transport_fee_P);
                                                                let budget_detail_P = document.createElement('p');
                                                                let budget_detail_Node = document.createTextNode(`Budget Details: ${trip_requestObj.budget_detail}`);
                                                                budget_detail_P.appendChild(budget_detail_Node);
                                                                trip_request_div.appendChild(budget_detail_P);
                                                                let note_P = document.createElement('p');
                                                                let note_node = document.createTextNode(`Note: ${trip_requestObj.note}`);
                                                                note_P.appendChild(note_node);
                                                                trip_request_div.appendChild(note_P);
                                                                account_trip_request_from_travelers_div.appendChild(trip_request_div);
                                                            }
                                                        }
                                                    })
                                                    .catch(err => console.log(err));
                                            } 
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
