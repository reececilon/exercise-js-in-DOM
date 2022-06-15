const toggle = document.getElementById('toggle')
const header = document.getElementById('changeColor1')
const greeting = document.getElementById('greeting');

toggle.addEventListener('click', changeColor)
greeting.addEventListener('mouseover', salutation);

function changeColor() {

    if (toggle.innerHTML == `<h2><i class="fa-solid fa-toggle-off"></i></h2>`) {
        header.style.backgroundColor = 'blue'
        header.style.color = 'white'
        toggle.innerHTML = `<h2><i class="fa-solid fa-toggle-on"></i></h2>`
    } else {
        header.style.backgroundColor = ''
        header.style.color = 'black'
        toggle.innerHTML = `<h2><i class="fa-solid fa-toggle-off"></i></h2>`
    }
}

function salutation() {
    greeting.innerText = 'Greetings!';
}



