
const baseURL = `http://localhost:5100/localseelocaldo/`;

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
            console.log('trip added!');
        })
        .catch(err => console.log(err));
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
            console.log('day added!');
        })
        .catch(err => console.log(err));
}

addTrip_title_description.addEventListener('click', addTitleAndDescription);
addDayBtn.addEventListener('click', addaDay);