
const baseURL = `http://localhost:5100/localseelocaldo/`;

const countriesSec = document.getElementById('countriesSec');

function pageLoaded(event){
    event.preventDefault();
    console.log('page loaded');
}

window.addEventListener('load', pageLoaded);

