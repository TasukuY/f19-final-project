
const baseURL = `http://localhost:5100/localseelocaldo/`;
const redirectToAccountP = document.getElementById('redirectToAccount');

function backToAccountPage(event){
    event.preventDefault();
    location.href = './travelerHome.html';
}

redirectToAccountP.addEventListener('click', backToAccountPage);