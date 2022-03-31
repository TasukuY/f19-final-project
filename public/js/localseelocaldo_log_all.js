
const baseURL = `http://localhost:5100/localseelocaldo/`;

//Login page html elements' connection starts here
const login_body = document.getElementById('login_body');
const login_btn = document.getElementById('login_btn');
const login_email_input = document.getElementById('login_email_input');
const login_password_input = document.getElementById('login_password_input');
const login_isLocal_check = document.getElementById('login_isLocal_check');
const login_passWrong_div = document.getElementById('login_passWrong_div');
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
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
const my_trip_plan_cards_div = document.getElementById('my_trip_plan_cards_div');
const my_trip_plan_account_btn = document.getElementById('my_trip_plan_body');
const pending_trip_plan_body = document.getElementById('pending_trip_plan_body');
const pending_trip_plan_cards_div = document.getElementById('pending_trip_plan_cards_div');
const pending_trip_plan_account_btn = document.getElementById('pending_trip_plan_account_btn');
const trip_proposals_from_locals_body = document.getElementById('trip_proposals_from_locals_body');
const trip_proposals_cards_div = document.getElementById('trip_proposals_cards_div');
const trip_proposals_account_btn = document.getElementById('trip_proposals_account_btn');
const trip_request_from_travelers_body = document.getElementById('trip_request_from_travelers_body');
const trip_requests_cards_div = document.getElementById('trip_requests_cards_div');
const trip_requests_account_btn = document.getElementById('trip_requests_account_btn');
const my_trip_plan_chosen_body = document.getElementById('my_trip_plan_chosen_body');
const my_trip_plan_chosen_backToAccount = document.getElementById('my_trip_plan_chosen_backToAccount');
//Each trip plans sections ends here

//Trip plan proposal Form page html elements' connection starts here
const trip_proposal_body = document.getElementById('trip_proposal_body');
const show_tripPlan_title_description_sec = document.getElementById('show_tripPlan_title_description_sec');
const already_made_day_schedule_sec = document.getElementById('already_made_day_schedule_sec');
const currently_makind_day_schedule_sec = document.getElementById('currently_makind_day_schedule_sec');
const titleOfTripInput = document.getElementById('titleOfTripInput');
const tripDraftIDInput = document.getElementById('tripDraftIDInput');
const trip_descriptionTxtarea = document.getElementById('trip_descriptionTxtarea');
const add_tripPlan_title_description = document.getElementById('add_tripPlan_title_description');
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

//default page setting
let numNode = document.createTextNode(`${dayNum}`);
let numNode2 = document.createTextNode(`${dayNum}`);
let numNode3 = document.createTextNode(`${dayNum}`);
number_of_the_day.appendChild(numNode);
number_of_the_day_for_event.appendChild(numNode2);
number_of_the_day_for_addBtn.appendChild(numNode3);

//login button pushed
login_btn.addEventListener('click', (event) => {
    event.preventDefault();
    let email = login_email_input.value;
    let password = login_password_input.value;
    let isLocal = login_isLocal_check.checked;
    let body = {email, password, isLocal};
    axios.post(baseURL+'login', body)
    .then(res => {
        let user = res.data[0]
        //login unsuccessful
        if(user === undefined){
            login_passWrong_div.innerHTML = '';
            let passWrongPara = document.createElement('p');
            passWrongPara.textContent = 'email or password is incorrect. please retry again.';
            passWrongPara.style.fontSize = "small";
            login_passWrong_div.appendChild(passWrongPara);
        //login successful
        }else{
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
                new_trip_draft_body.style.display = "block";
                account_body.style.display = "none";
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
                    axios.get(baseURL + `getCountryCityID/${citiesSec.value}`)
                    .then(res => {
                        let cityID = res.data[0].city_id
                        let countryID = res.data[0].country_id
                        let body = {
                            user_id: user.user_id,
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
                        };
                        axios.post(baseURL + 'post_new_trip_draft', body)
                            .then(res => {
                                new_trip_draft_body.style.display = "none";
                                trip_draft_posted_confirmation_body.style.display = "block";
                                confirmation_backToAccount.addEventListener('click', (event) => {
                                    trip_draft_posted_confirmation_body.style.display = "none";
                                    account_body.style.display = "block";
                                });
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));    
                });
                draft_form_backToAccount.addEventListener('click', (event) => {
                    event.preventDefault();
                    clearTripDraftForm();
                    new_trip_draft_body.style.display = "none";
                    account_body.style.display = "block";
                });
            });

            //the user clicked on trip plan
            account_trip_plan_h.addEventListener('click', (event) => {
                event.preventDefault();
                account_body.style.display = "none";
                my_trip_plan_body.style.display = "block";
                axios.get(baseURL + `get_my_trip_plans/${user.user_id}`)
                    .then(res => {
                        let my_trip_plans_num = res.data.length;
                        if(my_trip_plans_num === 0){
                            my_trip_plan_cards_div.innerHTML = '';
                            my_trip_plan_cards_div.textContent = 'No Trip Plans..';
                        }else{
                            // aTrip_proposal_div = my_trip_div. proposal_id = my_trip_id. trip_proposal_titleH = trip_titleH. trip_descriptionH = trip_proposal_descriptionH
                            for(let i = 0; i < my_trip_plans_num; i++){
                                let my_trip_plan_res = res.data[i];
                                let my_trip_div = document.createElement('div');
                                let day_plan_div = document.createElement('div');
                                let my_trip_id = my_trip_plan_res.my_trip_plan_id;
                                let trip_titleH = document.createElement('h3');
                                trip_titleH.textContent = `${my_trip_plan_res.trip_title} in ${my_trip_plan_res.city_name}, ${my_trip_plan_res.country_name}`;
                                trip_titleH.style.outline = '1px solid #222';
                                trip_titleH.style.background = '#FEB242';
                                my_trip_div.appendChild(trip_titleH);
                                let localname_description_div = document.createElement('div');
                                let local_name_H = document.createElement('h5');
                                local_name_H.textContent = `This plan is made by ${my_trip_plan_res.local}`
                                localname_description_div.appendChild(local_name_H);
                                let trip_descriptionH = document.createElement('h5');
                                trip_descriptionH.textContent = `${my_trip_plan_res.trip_description}`
                                localname_description_div.appendChild(trip_descriptionH);
                                localname_description_div.style.outline = '1px solid #222';
                                my_trip_div.appendChild(localname_description_div);
                                

                                //add days and events
                                axios.get(baseURL + `get_my_trip_days/${my_trip_id}`)
                                    .then(res => {
                                        let my_days_num = res.data.length;
                                        if(my_days_num !== 0){
                                            for(let i = 0; i < my_days_num; i++){
                                                let my_day_plan_res = res.data[i];
                                                let my_day_plan_id = my_day_plan_res.my_day_plan_id;
                                                let my_day_titleH = document.createElement('h4');
                                                let year = my_day_plan_res.my_day_date.slice(0, 4);
                                                let month = my_day_plan_res.my_day_date.slice(5, 10).split('-')[0];
                                                let day = my_day_plan_res.my_day_date.slice(5, 10).split('-')[1];
                                                my_day_titleH.textContent = `Day${i+1} - ${month}/${day} : ${my_day_plan_res.my_day_title}`;
                                                my_day_titleH.style.background = "#EFD7B2";
                                                my_day_titleH.style.outline = '1px solid #222';
                                                let my_day_description_H = document.createElement('h5');
                                                my_day_description_H.textContent = `${my_day_plan_res.my_day_description}`;
                                                my_day_description_H.style.outline = '1px solid #222';
                                                day_plan_div.appendChild(my_day_titleH);
                                                day_plan_div.appendChild(my_day_description_H);
                                                axios.get(baseURL + `get_my_events/${my_day_plan_id}`)
                                                    .then(res => {
                                                        let my_events_num = res.data.length;
                                                        if(my_events_num !== 0){
                                                            for(let j = 0; j < my_events_num; j++){
                                                                let my_event_res = res.data[i];
                                                                console.log(my_event_res);
                                                                let my_events_div = document.createElement('div');
                                                                let my_event_title_H = document.createElement('h4');
                                                                my_event_title_H.textContent = `${my_event_res.my_event_title} @ ${my_event_res.my_event_start_time.slice(11, 16)} for ${my_event_res.my_event_total_hours} hours`;
                                                                my_event_title_H.style.background = `${my_event_res.my_event_color}`;
                                                                my_event_title_H.style.outline = '1px solid #222';
                                                                my_events_div.appendChild(my_event_title_H);
                                                                let my_event_detail_H = document.createElement('h5');
                                                                my_event_detail_H.textContent = `${my_event_res.my_event_detail}`;
                                                                my_event_detail_H.style.outline = '1px solid #222';
                                                                my_events_div.appendChild(my_event_detail_H);
                                                                day_plan_div.appendChild(my_events_div);
                                                            }
                                                        }
                                                    })  
                                                    .catch(err => console.log(err));

                                                day_plan_div.style.outline = '1px solid #222';
                                                my_trip_div.appendChild(day_plan_div);
                                            }
                                        }
                                    })
                                    .catch(err => console.log(err));
                                
                                my_trip_plan_cards_div.appendChild(my_trip_div); 
                                let lineBreak = document.createElement('br')
                                my_trip_plan_cards_div.appendChild(lineBreak); 
                            }
                        }
                    })
                    .catch(err => console.log(err));
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
                axios.get(baseURL + `get_trip_proposals_title_discription/${user.user_id}`)
                    .then(res => {
                        let num_of_trip_proposals = res.data.length;
                        if(num_of_trip_proposals === 0){
                            trip_proposals_cards_div.innerHTML = '';
                            trip_proposals_cards_div.textContent = 'No Trip Proposals..';
                        }else{
                            for(let i = 0; i < num_of_trip_proposals; i++){
                                let trip_proposal_res = res.data[i]
                                let aTrip_proposal_div = document.createElement('div');
                                let day_plan_div = document.createElement('div');
                                let proposal_id = trip_proposal_res.trip_proposal_id;
                                let trip_proposal_titleH = document.createElement('h3');
                                trip_proposal_titleH.textContent = `${trip_proposal_res.proposal_title} for ${trip_proposal_res.traveler_name}'s tirp to ${trip_proposal_res.city_name}, ${trip_proposal_res.country_name}`;
                                trip_proposal_titleH.style.outline = '1px solid #222';
                                trip_proposal_titleH.style.background = '#FEB242';
                                aTrip_proposal_div.appendChild(trip_proposal_titleH);
                                let localname_description_div = document.createElement('div');
                                let local_name_H = document.createElement('h5');
                                local_name_H.textContent = `Proposed by ${trip_proposal_res.local_name}`
                                localname_description_div.appendChild(local_name_H);
                                let trip_proposal_descriptionH = document.createElement('h5');
                                trip_proposal_descriptionH.textContent = `${trip_proposal_res.proposal_description}`
                                localname_description_div.appendChild(trip_proposal_descriptionH);
                                localname_description_div.style.outline = '1px solid #222';
                                aTrip_proposal_div.appendChild(localname_description_div);
                                let readMore_P = document.createElement('p');
                                readMore_P.textContent = 'read more';
                                readMore_P.classList.add('redirect');
                                let readLess_P = document.createElement('p');
                                readLess_P.textContent = 'read less';
                                readLess_P.classList.add('redirect');
                                readLess_P.style.display = "none";
                                day_plan_div.style.display = "none";
                                let selectPlanBtn = document.createElement('button');
                                selectPlanBtn.textContent = 'Select this as My Trip Plan';
                                selectPlanBtn.style.background = '#19245E';
                                aTrip_proposal_div.appendChild(readMore_P);
                                aTrip_proposal_div.appendChild(day_plan_div);
                                aTrip_proposal_div.appendChild(readLess_P);
                                aTrip_proposal_div.appendChild(selectPlanBtn);
                                let lineBreak = document.createElement('br')
                                trip_proposals_cards_div.appendChild(aTrip_proposal_div); 
                                trip_proposals_cards_div.appendChild(lineBreak); 
                                readMore_P.addEventListener('click', (event) => {
                                    axios.get(baseURL + `get_trip_proposals_days/${proposal_id}`)
                                        .then(res => {
                                            let num_of_dayPlans = res.data.length;
                                            readMore_P.style.display = "none";
                                            day_plan_div.style.display = "block";
                                            readLess_P.style.display = "block";
                                            if(num_of_dayPlans === 0){
                                                day_plan_div.innerHTML = '';
                                                day_plan_div.textContent = 'No day plans..';
                                            }else{
                                                for(let i = 0; i < num_of_dayPlans; i++){
                                                    let day_plan_res = res.data[i]
                                                    let day_plan_id = day_plan_res.day_plan_id
                                                    axios.get(baseURL + `get_trip_proposals_events/${day_plan_id}`)
                                                        .then(res => {
                                                            let event_res_length = res.data.length;
                                                            let aDay_div = document.createElement('div');
                                                            let day_title_H = document.createElement('h4');
                                                            let month = day_plan_res.day_date.slice(5, 10).split('-')[0];
                                                            let day = day_plan_res.day_date.slice(5, 10).split('-')[1];
                                                            day_title_H.textContent = `Day${i+1} - ${month}/${day}: ${day_plan_res.day_title}`;
                                                            day_title_H.style.background = "#EFD7B2";
                                                            day_title_H.style.outline = '1px solid #222';
                                                            let day_description_H = document.createElement('h5');
                                                            day_description_H.textContent = `${day_plan_res.day_description}`;
                                                            aDay_div.style.outline = '1px solid #222';
                                                            aDay_div.appendChild(day_title_H);
                                                            aDay_div.appendChild(day_description_H);
                                                            if(event_res_length !== 0){
                                                                for(let i = 0; i < event_res_length; i++){
                                                                    let event_res = res.data[i];
                                                                    let day_events_div = document.createElement('div');
                                                                    let day_event_title_H = document.createElement('h5');
                                                                    let day_event_start_time = event_res.start_time.slice(11, 16);
                                                                    day_event_title_H.textContent = `${event_res.event_title} @ ${day_event_start_time} for ${event_res.total_hours} hours`;
                                                                    day_event_title_H.style.background = `${event_res.event_color}`;
                                                                    day_event_title_H.style.outline = '1px solid #222';
                                                                    let day_event_details_H = document.createElement('h5');
                                                                    day_event_details_H.textContent = `${event_res.event_detail}`;
                                                                    day_events_div.appendChild(day_event_title_H);
                                                                    day_events_div.appendChild(day_event_details_H);
                                                                    day_events_div.style.outline = '1px solid #222';
                                                                    aDay_div.appendChild(day_events_div);
                                                                }
                                                            }
                                                            day_plan_div.appendChild(aDay_div);
                                                        })  
                                                        .catch(err => console.log(err));
                                                }
                                            }
                                        })
                                        .catch(err => console.log(err));
                                });
                                readLess_P.addEventListener('click', (event) => {
                                    readMore_P.style.display = "block";
                                    day_plan_div.style.display = "none";
                                    readLess_P.style.display = "none";
                                });
                                selectPlanBtn.addEventListener('click', (event) => {
                                    axios.post(baseURL + `add_to_my_trip_plan/${trip_proposal_res.trip_proposal_id}`)
                                        .then(res => {
                                            my_trip_plan_chosen_body.style.display = "block";
                                            trip_proposals_from_locals_body.style.display = "none";
                                            let days_info_res = res.data;
                                            let num_of_days = days_info_res.length;
                                            if(num_of_days !== 0){
                                                for(let i = 0; i < num_of_days; i++){
                                                    let body= {
                                                        my_day_date: days_info_res[i].day_date,
                                                        my_day_title: days_info_res[i].day_title,
                                                        my_day_description: days_info_res[i].day_description,
                                                        day_plan_id: days_info_res[i].day_plan_id
                                                    };
                                                    axios.post(baseURL + 'add_my_day_plan', body)
                                                        .then(res => {
                                                            let events_info_res = res.data;
                                                            let events_length = events_info_res.length;
                                                            if(events_length !== 0){
                                                                for(let j = 0; j < events_length; j++){
                                                                    let body = {
                                                                        my_event_start_time: events_info_res[j].start_time,
                                                                        my_event_total_hours: events_info_res[j].total_hours, 
                                                                        my_event_title: events_info_res[j].event_title,
                                                                        my_event_detail: events_info_res[j].event_detail,
                                                                        my_event_color: events_info_res[j].event_color,
                                                                        trip_draft_id: trip_proposal_res.trip_draft_id
                                                                    };
                                                                    axios.post(baseURL + 'add_my_events', body)
                                                                        .then(res => {
                                                                            console.log('events deleted');
                                                                        })//add my_events and delete events rows
                                                                        .catch(err => console.log(err));
                                                                }
                                                            }
                                                        })
                                                        .catch(err => console.log(err));
                                                }
                                                 //delete day_plans
                                                 axios.delete(baseURL + `delete_day_plans/${trip_proposal_res.trip_draft_id}`)
                                                 .then(res => {
                                                     console.log('day plans deleted');
                                                 })//delete day_plans completed
                                                 .catch(err => console.log(err))
                                            }
                                            //delete trip_proposal and trip_drafts
                                            axios.delete(baseURL + `delete_trip_proposal_trip_draft/${trip_proposal_res.trip_draft_id}`)
                                                .then(res => {
                                                    console.log('trip proposals and drafts deleted');
                                                })//delete trip_proposal and trip_drafts completed
                                                .catch(err => console.log(err));
                                            
                                            my_trip_plan_chosen_backToAccount.addEventListener('click', (event) => {
                                                event.preventDefault();
                                                my_trip_plan_chosen_body.style.display = "none";
                                                account_body.style.display = "block";
                                            })
                                        })
                                        .catch(err => console.log(err));
                                });
                            }
                        }
                    })
                    .catch(err => console.log(err));
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
        }
    })
    .catch(err => console.log(err));
});

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