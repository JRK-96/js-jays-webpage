
const firstP = document.querySelector('p')
console.log(firstP)
//firstP.textContent = "Hello"

const contactA = document.querySelector('#contact')
contactA.style.backgroundColor = "#3388FF"

// grab all of an element..
// const active = document.querySelector('.active')
// console.log(active)
// active.style.textDecoration = 'underline'

//document.body.style.backgroundColor= 'red'
document.title = 'Ryan\'s webpage'

document.addEventListener('click', (e) => {
    //e.target.parentElement.style.border = '2px solid red'
    const section = e.target.closest('section')
    section.style.border= '2px solid red'
})

const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'