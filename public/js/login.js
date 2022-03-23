
const baseURL = `http://localhost:5100/locals/`;

const registerBtn = document.getElementById('registerBtn');

function testFunc(event){
    event.preventDefault();
    axios.get(baseURL + 'test')
        .then(res => {
            console.log(res.data[0]);
        })
        .catch(err => console.log(err));
}

registerBtn.addEventListener('click', testFunc);