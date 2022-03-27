
const baseURL = `http://localhost:5100/localseelocaldo/`;

const postNewTripPlanBtn = document.getElementById('postNewTripPlanBtn');

function redirectToNewTripPlan(event){
    event.preventDefault();
    location.href = './newTripPlan.html'
}

postNewTripPlanBtn.addEventListener('click', redirectToNewTripPlan);