
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
            console.log(user.review);
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
                            console.log(trip_requests_cards_div.children);
                            for(let i = 0; i < num_of_trip_drafts; i++){
                                trip_requests_cards_div.children[i].addEventListener('click', (event) => {
                                    event.preventDefault();
                                    console.log('request clicked!');
                                    trip_proposal_show_trip_draft_div.appendChild(trip_requests_cards_div.children[i]);
                                    trip_request_from_travelers_body.style.display = "none"
                                    trip_proposal_body.style.display = "block";
                                });
                            }

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