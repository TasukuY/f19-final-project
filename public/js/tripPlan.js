
const baseURL = `http://localhost:5100/localseelocaldo/`;

const show_tripPlan_title_description_sec = document.getElementById('show_tripPlan_title_description_sec');
const show_day_title_sec = document.getElementById('show_day_title_sec');
const show_event_sec = document.getElementById('show_event_sec');
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
let dayNum = 1;

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
            show_day_title_sec.appendChild(titleH);
            show_day_title_sec.appendChild(descriptionText);
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
            show_event_sec.appendChild(titleH);
            show_event_sec.appendChild(detailH);
        })
        .catch(err => console.log(err))
}

addTrip_title_description.addEventListener('click', addTitleAndDescription);
addDayBtn.addEventListener('click', addaDay);
addEventBtn.addEventListener('click', addaEvent);