
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
const account_username_h = document.getElementById('account_username_h');
const account_user_location_div = document.getElementById('account_user_location_div');
const account_user_location_h = document.getElementById('account_user_location_h');
const account_user_email_div = document.getElementById('account_user_email_div');
const account_user_email_h = document.getElementById('account_user_email_h');
const account_review_div = document.getElementById('account_review_div');
const account_post_new_trip_div = document.getElementById('account_post_new_trip_div');
const account_post_new_trip_btn = document.getElementById('account_post_new_trip_btn');
const account_pending_trip_plan_div = document.getElementById('account_pending_trip_plan_div');
const account_pending_trip_plan_h = document.getElementById('account_pending_trip_plan_h');
const account_trip_proposals_from_local_div = document.getElementById('account_trip_proposals_from_local_div');
const account_trip_proposals_from_local_h = document.getElementById('account_trip_proposals_from_local_h');
const account_trip_plan_div = document.getElementById('account_trip_plan_div');
const account_trip_plan_h = document.getElementById('account_trip_plan_h');
const account_trip_request_from_travelers_div = document.getElementById('account_trip_request_from_travelers_div');
const account_trip_request_from_travelers_h = document.getElementById('account_trip_request_from_travelers_h');
//Account page html elements' connection ends here

//Each trip plans sections starts here
const my_trip_plan_body = document.getElementById('my_trip_plan_body');
const my_trip_plan_account_btn = document.getElementById('my_trip_plan_body');
const pending_trip_plan_body = document.getElementById('pending_trip_plan_body');
const pending_trip_plan_cards_div = document.getElementById('pending_trip_plan_cards_div');
const pending_trip_plan_account_btn = document.getElementById('pending_trip_plan_account_btn');
const trip_proposals_from_locals_body = document.getElementById('trip_proposals_from_locals_body');
const trip_proposals_account_btn = document.getElementById('trip_proposals_account_btn');
const trip_request_from_travelers_body = document.getElementById('trip_request_from_travelers_body');
const trip_requests_cards_div = document.getElementById('trip_requests_cards_div');
const trip_requests_account_btn = document.getElementById('trip_requests_account_btn');
//Each trip plans sections ends here

//Trip plan proposal Form page html elements' connection starts here
const trip_proposal_body = document.getElementById('trip_proposal_body');
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
const trip_proposal_posted_confirmation_body = document.getElementById('trip_proposal_posted_confirmation_body');
const proposal_confirmation_backToAccount = document.getElementById('proposal_confirmation_backToAccount');
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

//register button pushed
registerBtn.addEventListener('click', (event) => {
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
            let user = res.data[0];
            account_body.style.display = "block";
            signUp_body.style.display = "none";
            let usernameNode = document.createTextNode(`${user.username}`);
            account_username_h.innerHTML = '';
            account_username_h.appendChild(usernameNode);
            let locationNode = document.createTextNode(`${user.city_name}, ${user.country_name}`);
            account_user_location_h.innerHTML = '';
            account_user_location_h.appendChild(locationNode);
            let emailNode = document.createTextNode(`${user.email}`);
            account_user_email_h.innerHTML = '';
            account_user_email_h.appendChild(emailNode);
            if(user.review !== undefined){
                if(user.review > 0 && user.review < 2){
                    star1.id = "star_checked";
                }else if(user.review >= 2 && user.review < 3) {
                    star1.id = "star_checked";
                    star2.id = "star_checked";
                }else if(user.review >= 3 && user.review < 4) {
                    star1.id = "star_checked";
                    star2.id = "star_checked";
                    star3.id = "star_checked";
                }else if(user.review >= 4 && user.review < 5) {
                    star1.id = "star_checked";
                    star2.id = "star_checked";
                    star3.id = "star_checked";
                    star4.id = "star_checked";
                }else if(user.review >= 5) {
                    star1.id = "star_checked";
                    star2.id = "star_checked";
                    star3.id = "star_checked";
                    star4.id = "star_checked";
                    star5.id = "star_checked";
                }
            }else{
                account_trip_request_from_travelers_div.style.display = "none";
                account_review_div.style.display = "none";
            }
            //the user clicked on post new trip plan
            account_post_new_trip_btn.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('post new trip plan clicked!');
            });

            //the user clicked on trip plan
            account_trip_plan_h.addEventListener('click', (event) => {
                event.preventDefault();
                account_body.style.display = "none";
                my_trip_plan_body.style.display = "block";
                
                my_trip_plan_account_btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    account_body.style.display = "block";
                    my_trip_plan_body.style.display = "none";
                })
            });

            //the user clicked on pending trip plan
            account_pending_trip_plan_h.addEventListener('click', (event) => {
                event.preventDefault();
                account_body.style.display = "none";
                pending_trip_plan_body.style.display = "block";
                //get all the pending trip plans from db
                axios.get(baseURL + `get_trip_drafts/${user.user_id}`)
                    .then(res => {
                        let num_of_trip_drafts = res.data.length;
                        if(num_of_trip_drafts === 0){
                            pending_trip_plan_cards_div.innerHTML = '';
                            pending_trip_plan_cards_div.textContent = 'No Pending Trip Plans..';
                        }else{
                            for(let i = 0; i < num_of_trip_drafts; i++){
                                let trip_draft = res.data[i];
                                let trip_draft_div = document.createElement('div');
                                let where_to_h = document.createElement('h3');
                                where_to_h.textContent = `My Trip to ${trip_draft.city_name}, ${trip_draft.country_name}`;
                                trip_draft_div.appendChild(where_to_h);
                                let when_h = document.createElement('h4');
                                let trip_start_date = `${trip_draft.start_date.slice(5, 10).split('-')[0]}/${trip_draft.start_date.slice(5, 10).split('-')[1]}/${trip_draft.start_date.slice(0, 4)}`; 
                                let trip_end_date = `${trip_draft.end_date.slice(5, 10).split('-')[0]}/${trip_draft.end_date.slice(5, 10).split('-')[1]}/${trip_draft.end_date.slice(0, 4)}`;
                                when_h.textContent = `Date:  ${trip_start_date}    to    ${trip_end_date}`;
                                trip_draft_div.appendChild(when_h);
                                let num_of_ppl_P = document.createElement('p');
                                num_of_ppl_P.textContent = `Group of: ${trip_draft.num_of_ppl}`;
                                trip_draft_div.appendChild(num_of_ppl_P);
                                let budget_P = document.createElement('p');
                                budget_P.textContent = `Budget Per Person: $${trip_draft.budget}`;
                                trip_draft_div.appendChild(budget_P);
    
                                let include_hotel_fee_P = document.createElement('p');
                                if(trip_draft.include_hotel_fee){
                                    include_hotel_fee_P.textContent = 'includes hotel fee? - Yes';
                                }else{
                                    include_hotel_fee_P.textContent = 'includes hotel fee? - No';
                                }
                                trip_draft_div.appendChild(include_hotel_fee_P);
    
                                let include_meal_fee_P = document.createElement('p');
                                if(trip_draft.include_meal_fee){
                                    include_meal_fee_P.textContent = 'includes meal fee? - Yes';
                                }else{
                                    include_meal_fee_P.textContent = 'includes meal fee? - No';
                                }
                                trip_draft_div.appendChild(include_meal_fee_P);
    
                                let include_transport_fee_P = document.createElement('p');
                                if(trip_draft.include_transport_fee){
                                    include_transport_fee_P.textContent = 'includes transportation fee? - Yes';
                                }else{
                                    include_transport_fee_P.textContent = 'includes transportation fee? - No';
                                }
                                trip_draft_div.appendChild(include_transport_fee_P);
    
                                let budget_detail_P = document.createElement('p');
                                budget_detail_P.textContent = `Budget Detail: ${trip_draft.budget_detail}`;
                                trip_draft_div.appendChild(budget_detail_P);
                                let note_P = document.createElement('p');
                                note_P.textContent = `Note: ${trip_draft.note}`;
                                trip_draft_div.appendChild(note_P);
                                trip_draft_div.style.outline = '1px solid #222';
                                //add the div to the pending_trip_plan_cards_div
                                pending_trip_plan_cards_div.innerHTML = '';
                                pending_trip_plan_cards_div.appendChild(trip_draft_div);
                            }
                        }
                    })
                    .catch(err => console.log(err));
                pending_trip_plan_account_btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    account_body.style.display = "block";
                    pending_trip_plan_body.style.display = "none";
                })
            });

            //the user clicked on trip proposals from locals
            account_trip_proposals_from_local_h.addEventListener('click', (event) => {
                event.preventDefault();
                account_body.style.display = "none";
                trip_proposals_from_locals_body.style.display = "block";
                
                trip_proposals_account_btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    account_body.style.display = "block";
                    trip_proposals_from_locals_body.style.display = "none";
                })
            });

           //the user clicked on trip requests from travelers
           account_trip_request_from_travelers_h.addEventListener('click', (event) => {
                event.preventDefault();
                account_body.style.display = "none";
                trip_request_from_travelers_body.style.display = "block";
                //get all trip requests
                axios.get(baseURL + `get_trip_requests_from_travelers/${user.city_name}`)
                    .then(res => {
                        let num_of_trip_drafts = res.data.length;
                        if(num_of_trip_drafts === 0){
                            trip_requests_cards_div.innerHTML = '';
                            trip_requests_cards_div.textContent = 'No Trip Requests..';
                        }else{
                            for(let i = 0; i < num_of_trip_drafts; i++){
                                let trip_draft = res.data[i];
                                let trip_draft_div = document.createElement('div');
                                let where_to_h = document.createElement('h3');
                                where_to_h.textContent = `${trip_draft.username}'s Trip to ${trip_draft.city_name}, ${trip_draft.country_name}`;
                                where_to_h.style.background = '#FEB242';
                                trip_draft_div.appendChild(where_to_h);
                                let when_h = document.createElement('h4');
                                let trip_start_date = `${trip_draft.start_date.slice(5, 10).split('-')[0]}/${trip_draft.start_date.slice(5, 10).split('-')[1]}/${trip_draft.start_date.slice(0, 4)}`; 
                                let trip_end_date = `${trip_draft.end_date.slice(5, 10).split('-')[0]}/${trip_draft.end_date.slice(5, 10).split('-')[1]}/${trip_draft.end_date.slice(0, 4)}`;
                                when_h.textContent = `Date:  ${trip_start_date}    to    ${trip_end_date}`;
                                trip_draft_div.appendChild(when_h);
                                let trip_draft_id_P = document.createElement('p');
                                trip_draft_id_P.textContent = `Trip Request ID:  ${trip_draft.trip_draft_id}`;
                                trip_draft_div.appendChild(trip_draft_id_P);
                                let num_of_ppl_P = document.createElement('p');
                                num_of_ppl_P.textContent = `Group of: ${trip_draft.num_of_ppl}`;
                                trip_draft_div.appendChild(num_of_ppl_P);
                                let budget_P = document.createElement('p');
                                budget_P.textContent = `Budget Per Person: $${trip_draft.budget}`;
                                trip_draft_div.appendChild(budget_P);

                                let include_hotel_fee_P = document.createElement('p');
                                if(trip_draft.include_hotel_fee){
                                    include_hotel_fee_P.textContent = 'includes hotel fee? - Yes';
                                }else{
                                    include_hotel_fee_P.textContent = 'includes hotel fee? - No';
                                }
                                trip_draft_div.appendChild(include_hotel_fee_P);

                                let include_meal_fee_P = document.createElement('p');
                                if(trip_draft.include_meal_fee){
                                    include_meal_fee_P.textContent = 'includes meal fee? - Yes';
                                }else{
                                    include_meal_fee_P.textContent = 'includes meal fee? - No';
                                }
                                trip_draft_div.appendChild(include_meal_fee_P);

                                let include_transport_fee_P = document.createElement('p');
                                if(trip_draft.include_transport_fee){
                                    include_transport_fee_P.textContent = 'includes transportation fee? - Yes';
                                }else{
                                    include_transport_fee_P.textContent = 'includes transportation fee? - No';
                                }
                                trip_draft_div.appendChild(include_transport_fee_P);

                                let budget_detail_P = document.createElement('p');
                                budget_detail_P.textContent = `Budget Detail: ${trip_draft.budget_detail}`;
                                trip_draft_div.appendChild(budget_detail_P);
                                let note_P = document.createElement('p');
                                note_P.textContent = `Note: ${trip_draft.note}`;
                                trip_draft_div.appendChild(note_P);
                                trip_draft_div.style.outline = '1px solid #222';
                                //add the div to the pending_trip_plan_cards_div
                                trip_requests_cards_div.innerHTML = '';
                                trip_requests_cards_div.appendChild(trip_draft_div);
                            }
                            for(let i = 0; i < num_of_trip_drafts; i++){
                                trip_requests_cards_div.children[i].addEventListener('click', (event) => {
                                    event.preventDefault();
                                    trip_proposal_show_trip_draft_div.appendChild(trip_requests_cards_div.children[i]);
                                    trip_request_from_travelers_body.style.display = "none"
                                    trip_proposal_body.style.display = "block";                                 
                                });
                            }
                            addTrip_title_description.addEventListener('click', (event) => {
                                event.preventDefault();
                                let tripTitle = titleOfTripInput.value;
                                let tripDraftID = tripDraftIDInput.value;
                                let tripDescription = trip_descriptionTxtarea.value;

                                axios.get(baseURL + `get_local_id/${user.user_id}`)
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
                                                let title_description_div = document.createElement('div');
                                                let title_div = document.createElement('div');
                                                let description_div = document.createElement('div');
                                                let titleH = document.createElement('h2');
                                                titleH.textContent = `${res.data[0].proposal_title}`;
                                                let descriptionH = document.createElement('h5');
                                                descriptionH.textContent = `${res.data[0].proposal_description}`;
                                                titleH.style.background = '#FEB242';
                                                title_description_div.appendChild(titleH);
                                                title_description_div.appendChild(descriptionH);
                                                title_description_div.style.outline = '1px solid #222';
                                                show_tripPlan_title_description_sec.appendChild(title_description_div);
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
                                                            let day_div = document.createElement('div');
                                                            let dates = res.data[0].day_date.slice(5, 10);;
                                                            let monthDateArr = dates.split('-');
                                                            let year = res.data[0].day_date.slice(0, 4);
                                                            let month = monthDateArr[0];
                                                            let date = monthDateArr[1];
                                                            let datesText = `${month}/${date}/${year}`;
                                                            let day_numH = document.createElement('h4');
                                                            day_numH.textContent = `DAY ${dayNum2 + 1}     -     ${datesText}`;
                                                            day_numH.style.background = '#EFD7B2';
                                                            day_div.appendChild(day_numH);
                                                            let titleH = document.createElement('h3');
                                                            titleH.textContent = `${res.data[0].day_title}`;
                                                            let descriptionH = document.createElement('h5');
                                                            descriptionH.textContent = `${res.data[0].day_description}`;
                                                            day_div.appendChild(titleH);
                                                            day_div.appendChild(descriptionH);
                                                            day_div.style.outline = '1px solid #222';
                                                            currently_makind_day_schedule_sec.appendChild(day_div);
                                                            day_paln_sec.style.display = "none";
                                                            dateInput.value = '';
                                                            dayTitleInput.value = '';
                                                            day_descriptionTxtarea.value = '';
                                                        })
                                                        .catch(err => console.log(err));
                                                });
                                                addEventBtn.addEventListener('click', (event) => {
                                                    event.preventDefault();
                                                    axios.get(baseURL + 'get_date')
                                                        .then(res => {
                                                            let date = res.data[0].day_date.slice(0, 10);
                                                            let event_start_time = eventStartInput.value;
                                                            let start_time = `${date} ${event_start_time}:00`;
                                                            let total_hours = event_total_hourInput.value;
                                                            let event_title = event_titleInput.value;
                                                            let event_detail = event_descriptionTxtarea.value;
                                                            let event_color = colorsSec.value;
                                                            if(event_color === 'select the color'){
                                                                event_color = 'black';
                                                            }
                                                            let body = {
                                                                start_time,
                                                                total_hours,
                                                                event_title,
                                                                event_detail,
                                                                event_color
                                                            }
                                                            axios.post(baseURL + 'add_event', body)
                                                                .then(res => {
                                                                    let event_div = document.createElement('div');
                                                                    let color = res.data[0].event_color;
                                                                    let startTime = res.data[0].start_time;
                                                                    let totalHour = res.data[0].total_hours;
                                                                    let titleH = document.createElement('h4');
                                                                    titleH.textContent = `${res.data[0].event_title}`;
                                                                    let detailH = document.createElement('h5');
                                                                    detailH.textContent = `${res.data[0].event_detail}`;
                                                                    event_div.id = 'event_div';
                                                                    titleH.style.background = `${color}`;
                                                                    event_div.appendChild(titleH);
                                                                    event_div.appendChild(detailH);
                                                                    event_div.style.outline = '1px solid #222';
                                                                    currently_makind_day_schedule_sec.appendChild(event_div);
                                                                    let day_plan_id = res.data[0].day_plan_id;
                                                                    eventStartInput.value = '';
                                                                    event_total_hourInput.value = '';
                                                                    event_titleInput.value = '';
                                                                    event_descriptionTxtarea.value = '';
                                                                    colorsSec.value = '';
                                                                })
                                                                .catch(err => console.log(err))
                                                        })
                                                        .catch(err => console.log(err));
                                                });
                                                addAnotherDayBtn.addEventListener('click', (event) => {
                                                    event.preventDefault();
                                                    axios.get(baseURL + `day_schedule`)
                                                        .then(res => {
                                                            let num_of_events = res.data.length;
                                                            //new div for the schedule of the day
                                                            let dayDiv = document.createElement('div');
                                                            //create elements for day_plan related info
                                                            let dates = res.data[0].day_date.slice(5, 10);;
                                                            let monthDateArr = dates.split('-');
                                                            let year = res.data[0].day_date.slice(0, 4);
                                                            let month = monthDateArr[0];
                                                            let date = monthDateArr[1];
                                                            let datesText = `${month}/${date}/${year}`;
                                                            let day_numH = document.createElement('h4');
                                                            day_numH.textContent = `DAY ${dayNum2}     -     ${datesText}`;
                                                            day_numH.style.background = '#EFD7B2';
                                                            let dayTitleH = document.createElement('h3');
                                                            dayTitleH.textContent = `${res.data[0].day_title}`; 
                                                            let dayDescriptionP = document.createElement('p');
                                                            dayDescriptionP.textContent = `${res.data[0].day_description}`;
                                                            //add all the elements to day div
                                                            dayDiv.appendChild(day_numH);
                                                            dayDiv.appendChild(dayTitleH);
                                                            dayDiv.appendChild(dayDescriptionP);
                                                            dayDiv.style.outline = '1px solid #222';
                                                            for(let i = 0; i < num_of_events; i++){
                                                                //new div for the events
                                                                let eventDiv = document.createElement('div');
                                                                //create elements for events related info
                                                                let eventTitleH = document.createElement('h4');
                                                                eventTitleH.textContent = `${res.data[i].event_title}`;
                                                                let eventDetailP = document.createElement('p');
                                                                eventDetailP.textContent = `${res.data[i].event_detail}`;
                                                                let eventStartTimeP = document.createElement('p');
                                                                eventStartTimeP.textContent = `@ ${res.data[i].start_time.slice(11, 16)} for ${res.data[i].total_hours} hours`;
                                                                let eventColor = res.data[i].event_color;
                                                                //add all the elements to event div
                                                                eventTitleH.style.background = `${eventColor}`;
                                                                eventDiv.appendChild(eventTitleH);
                                                                eventDiv.appendChild(eventDetailP);
                                                                eventDiv.appendChild(eventStartTimeP);
                                                                eventDiv.style.outline = '1px solid #222';
                                                                //add eventDiv to dayDiv
                                                                dayDiv.appendChild(eventDiv);
                                                            }
                                                            already_made_day_schedule_sec.appendChild(dayDiv);
                                                        })
                                                        .catch(err => console.log(err));
                                                    dayNum++;
                                                    dayNum2++;
                                                    let numNode = document.createTextNode(`${dayNum}`);
                                                    let numNode2 = document.createTextNode(`${dayNum}`);
                                                    let numNode3 = document.createTextNode(`${dayNum}`);
                                                    number_of_the_day.innerHTML = '';
                                                    number_of_the_day_for_event.innerHTML = '';
                                                    number_of_the_day_for_addBtn.innerHTML = '';
                                                    number_of_the_day.appendChild(numNode);
                                                    number_of_the_day_for_event.appendChild(numNode2);
                                                    number_of_the_day_for_addBtn.appendChild(numNode3);   
                                                    currently_makind_day_schedule_sec.innerHTML = ''
                                                    day_paln_sec.style.display = "block";
                                                });
                                                send_to_travelerBtn.addEventListener('click', (event) => {
                                                    trip_proposal_body.style.display = "none"
                                                    trip_proposal_posted_confirmation_body.style.display = "block";
                                                    proposal_confirmation_backToAccount.addEventListener('click', (event)=>{
                                                        account_body.style.display = "block";
                                                        trip_proposal_posted_confirmation_body.style.display = "none";
                                                    });
                                                });
                                            })
                                            .catch(err => console.log(err));
                                    })
                                    .catch(err => console.log(err));
                            });

                        }
                    })
                    .catch(err => console.log(err));
                
                trip_requests_account_btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    account_body.style.display = "block";
                    trip_request_from_travelers_body.style.display = "none";
                })
            });
        })
        .catch(err => console.log(err));
});

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
        hasUpperP.style.color = "#97DBAE";
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
        hasLowerP.style.color = "#97DBAE";
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
        hasNumberP.style.color = "#97DBAE";
        passCheckDiv.appendChild(hasNumberP);
    }else{
        hasNumberP.innerHTML = '';
        let hasNumberText = document.createTextNode("it has to contain at least 1 number. X");
        hasNumberP.appendChild(hasNumberText);
        passCheckDiv.appendChild(hasNumberP);
    }

    if(hasSpecialChar(pass)){
        hasSpecharP.innerHTML = '';
        let hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. OK!");
        hasSpecharP.appendChild(hasSpecialCharText);
        hasSpecharP.style.color = "#97DBAE";
        passCheckDiv.appendChild(hasSpecharP);
    }else{
        hasSpecharP.innerHTML = '';
        let hasSpecialCharText = document.createTextNode("it has to contain at least 1 special character. X");
        hasSpecharP.appendChild(hasSpecialCharText);
        passCheckDiv.appendChild(hasSpecharP);
    }

    if(isValidLength(pass)){
        isValidLengthP.innerHTML = '';
        let isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. OK!");
        isValidLengthP.appendChild(isValidLengthText);
        isValidLengthP.style.color = "#97DBAE";
        passCheckDiv.appendChild(isValidLengthP);
    }else{
        isValidLengthP.innerHTML = '';
        let isValidLengthText = document.createTextNode("it has to be at least 8 or more characters. X");
        isValidLengthP.appendChild(isValidLengthText);
        passCheckDiv.appendChild(isValidLengthP);
    }

}
function checkPassRepass(event){
    event.preventDefault();
    re_passCheckDiv.innerHTML = '';
    const passCheckPara = document.createElement('p');
    passCheckPara.style.color = "#FD5D5D";
    passCheckPara.style.fontSize = "small";
    let text = document.createTextNode("Password and Retyped Password must be match.");
    if(passInput.value === re_passInput.value){
        text = document.createTextNode("Password and Retyped Password matched.");
        passCheckPara.appendChild(text);
        passCheckPara.style.color = "#97DBAE";
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

//for profile picture
const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

imgDiv.addEventListener('mouseenter', () => {
    uploadBtn.style.display = 'block';
});

imgDiv.addEventListener('mouseleave', () => {
    uploadBtn.style.display = 'none';
});

function handleFiles() {
    const choosedFile = this.files[0];
    if(choosedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
}

file.addEventListener("change", handleFiles, false);