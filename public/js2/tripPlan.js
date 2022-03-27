const baseURL = `http://localhost:5100/localseelocaldo/`;

const show_tripPlan_title_description_sec = document.getElementById('show_tripPlan_title_description_sec');
const already_made_day_schedule_sec = document.getElementById('already_made_day_schedule_sec');
const currently_makind_day_schedule_sec = document.getElementById('currently_makind_day_schedule_sec');
const titleOfTripInput = document.getElementById('titleOfTripInput');
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
let dayNum = 1;
let dayNum2 = 0;

window.onload = (event) => {
    event.preventDefault();
    let numNode = document.createTextNode(`${dayNum}`);
    let numNode2 = document.createTextNode(`${dayNum}`);
    let numNode3 = document.createTextNode(`${dayNum}`);
    number_of_the_day.appendChild(numNode);
    number_of_the_day_for_event.appendChild(numNode2);
    number_of_the_day_for_addBtn.appendChild(numNode3);
}

function addTitleAndDescription(event){
    event.preventDefault();
    let tripTitle = titleOfTripInput.value;
    let tripDescription = trip_descriptionTxtarea.value;

    let body = {
        trip_title: tripTitle,
        trip_description: tripDescription
    }

    axios.post(baseURL + 'add_title_description', body)
        .then(res => {
            getTripTitleAndDescription();
        })
        .catch(err => console.log(err));
}

function getTripTitleAndDescription(){
    axios.get(baseURL + 'get_title_description')
        .then(res => {
            let titleH = document.createElement('h1');
            let ttileText = document.createTextNode(`${res.data[0].trip_plan_title}`);
            let descriptionH = document.createElement('h1');
            let descriptionText = document.createTextNode(`${res.data[0].trip_plan_description}`);
            titleH.appendChild(ttileText);
            descriptionH.appendChild(descriptionText);
            show_tripPlan_title_description_sec.appendChild(titleH);
            show_tripPlan_title_description_sec.appendChild(descriptionText);
        })
        .catch(err => console.log(err))
}

function addaDay(event){
    event.preventDefault();
    let date_of_day = dateInput.value;
    let title_day = dayTitleInput.value;
    let description_day = day_descriptionTxtarea.value;

    let body = {
        date_of_day,
        title_day,
        description_day
    }

    axios.post(baseURL + 'add_day', body)
        .then(res => {
            getDayInfo();
        })
        .catch(err => console.log(err));
}

function getDayInfo(){
    axios.get(baseURL + 'get_dayInfo')
        .then(res => {
            let titleH = document.createElement('h1');
            let ttileText = document.createTextNode(`${res.data[0].title_day}`);
            let descriptionH = document.createElement('h1');
            let descriptionText = document.createTextNode(`${res.data[0].description_day}`);
            titleH.appendChild(ttileText);
            descriptionH.appendChild(descriptionText);
            currently_makind_day_schedule_sec.appendChild(titleH);
            currently_makind_day_schedule_sec.appendChild(descriptionText);
        })
        .catch(err => console.log(err))
}

function addaEvent(event){
    event.preventDefault();
    let event_start_time = eventStartInput.value;
    let event_total_hours = event_total_hourInput.value;
    let event_title = event_titleInput.value;
    let event_detail = event_descriptionTxtarea.value;
    let event_color = colorsSec.value;
    if(event_color === 'select the color'){
        event_color = 'black';
    }

    axios.get(baseURL + 'get_date')
        .then(res => {
            let date = res.data[0].date_of_day;
            let body = {
                date,
                event_start_time,
                event_total_hours,
                event_title,
                event_detail,
                event_color
            }
        
            axios.post(baseURL + 'add_event', body)
                .then(res => {
                    getEventInfo();
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

function getEventInfo(){
    axios.get(baseURL + 'get_eventInfo')
        .then(res => {
            let color = res.data[0].event_color;
            let startTime = res.data[0].event_start_time;
            let totalHour = res.data[0].event_total_hours;
            let titleH = document.createElement('h1');
            let ttileText = document.createTextNode(`${res.data[0].event_title}`);
            let detailH = document.createElement('h1');
            let detailText = document.createTextNode(`${res.data[0].event_detail}`);
            titleH.appendChild(ttileText);
            detailH.appendChild(detailText);
            currently_makind_day_schedule_sec.appendChild(titleH);
            currently_makind_day_schedule_sec.appendChild(detailH);
        })
        .catch(err => console.log(err))
}

function addAnotherDay(event){
    event.preventDefault();
    
    //get previous day schedle
    axios.get(baseURL + 'day_schedule')
        .then(res => {
            let num_of_events = res.data.length;
            //new div for the schedule of the day
            let dayDiv = document.createElement('div');
            //create elements for day_plan related info
            let day_numH = document.createElement('h1');
            let day_numNode = document.createTextNode(`DAY ${dayNum2}`);
            day_numH.appendChild(day_numNode);
            let dayTitleH = document.createElement('h1');
            let dayTitleNode = document.createTextNode(`${res.data[0].title_day}`); 
            dayTitleH.appendChild(dayTitleNode);
            let dayDescriptionP = document.createElement('p');
            let dayDescriptionNode = document.createTextNode(`${res.data[0].description_day}`);
            dayDescriptionP.appendChild(dayDescriptionNode);
            let dates = res.data[0].date_of_day.slice(5, 10);;
            let monthDateArr = dates.split('-');
            let year = res.data[0].date_of_day.slice(0, 4);
            let month = monthDateArr[0];
            let date = monthDateArr[1];
            let datesH2 = document.createElement('h3');
            let datesNode = document.createTextNode(`${month}/${date}/${year}`);
            datesH2.appendChild(datesNode);
            //add all the elements to day div
            dayDiv.appendChild(day_numH);
            dayDiv.appendChild(dayTitleH);
            dayDiv.appendChild(dayDescriptionP);
            dayDiv.appendChild(datesH2);

            for(let i = 0; i < num_of_events; i++){
                //new div for the events
                let eventDiv = document.createElement('div');
                //create elements for events related info
                let eventTitleH = document.createElement('h2');
                let eventTitleNode = document.createTextNode(`${res.data[i].event_title}`);
                eventTitleH.appendChild(eventTitleNode);
                let eventDetailP = document.createElement('p');
                let eventDetailNode = document.createTextNode(`${res.data[i].event_detail}`);
                eventDetailP.appendChild(eventDetailNode);
                let eventStartTimeP = document.createElement('p');
                let eventStartTimeNode = document.createTextNode(`@ ${res.data[i].event_start_time.slice(11, 16)}`);
                eventStartTimeP.appendChild(eventStartTimeNode);
                let eventTotalHorsNode = document.createTextNode(` for ${res.data[i].event_total_hours} hours`);
                eventStartTimeP.append(eventTotalHorsNode);
                let eventColor = res.data[i].event_color;

                //add all the elements to event div
                eventDiv.appendChild(eventTitleH);
                eventDiv.appendChild(eventDetailP);
                eventDiv.appendChild(eventStartTimeP);
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
}

function sendTripPlanToTraveler(event){
    event.preventDefault();
}

addTrip_title_description.addEventListener('click', addTitleAndDescription);
addDayBtn.addEventListener('click', addaDay);
addEventBtn.addEventListener('click', addaEvent);
addAnotherDayBtn.addEventListener('click', addAnotherDay);
send_to_travelerBtn.addEventListener('click', sendTripPlanToTraveler);