const btnOnLight = document.querySelectorAll('button')[0]
const btnOffLight = document.querySelectorAll('button')[1]


btnOnLight.addEventListener('click', function () {
    const image = document.querySelector('#myimage')
    image.src = './images/pic_bulbon.gif'
    btnOnLight.style.background = 'green'
    btnOffLight.style.background = 'white'
})



btnOffLight.addEventListener('click', lightOff)

function lightOff() {
    const image = document.querySelector('#myimage')
    image.src = './images/pic_bulboff.gif'

    btnOffLight.style.background = 'red'
    btnOnLight.style.background = 'white'
}