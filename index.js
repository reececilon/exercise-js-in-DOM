const toggle = document.getElementById('toggle')
const header = document.getElementById('changeColor1')
const greeting = document.getElementById('greeting')
const bold = document.getElementById('bold')
const italic = document.getElementById('italic')
const underline = document.getElementById('underline')
const paragraph = document.getElementsByTagName('p')
const body = document.getElementById('body')
const create = document.getElementById('create')

toggle.addEventListener('click', changeColor)

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

greeting.addEventListener('mouseover', () => {
    greeting.innerText = 'Hello Everyone, Welcome'
})

bold.addEventListener('click', () => {
    paragraph[0].style.fontSize = '30px'
    paragraph[1].style.fontSize = '30px'
    paragraph[2].style.fontSize = '30px'
})

italic.addEventListener('click', () => {
    paragraph[0].style.fontStyle = 'italic'
    paragraph[1].style.fontStyle = 'italic'
    paragraph[2].style.fontStyle = 'italic'
})

underline.addEventListener('click', () => {
    paragraph[0].style.textDecoration = 'underline'
    paragraph[1].style.textDecoration = 'underline'
    paragraph[2].style.textDecoration = 'underline'
})


body.addEventListener('keydown', (e) => {

    let p = document.createElement('p')
    p.innerText = e.key
    create.appendChild(p)
   
})





