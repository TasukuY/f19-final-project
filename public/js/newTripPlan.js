
const baseURL = `http://localhost:5100/localseelocaldo/`;

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
const nextBtn = document.getElementById('nextBtn');
const backToAccount = document.getElementById('backToAccount');

window.onload = (event) => {
    event.preventDefault();
}

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

function backToAccountPage(event){
    event.preventDefault();
    location.href = './travelerHome.html';
}

function postNewTripPlan(event){
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
                        traveler_id: 2,
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

                    axios.post(baseURL + 'post_new_trip_plan', body)
                        .then(res => {
                            location.href = './tripPlanConfirmation.html'
                        }) 
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))    
}

nextBtn.addEventListener('click', postNewTripPlan);
backToAccount.addEventListener('click', backToAccountPage);
