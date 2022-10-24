const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const scorepoint = document.querySelector('#score-board > p')
const audiojump = document.querySelector('.jump-audio')
const audiolost = document.querySelector('.lost-audio')
const audioteme = document.querySelector('.teme-audio')
const newgame = document.querySelector('#newgame')
var score = 00



const jump = () => {
    mario.classList.add('jump')
    audiojump.play()
    setTimeout(() => {
        mario.classList.remove('jump')
    } , 500)
}

const loop = setInterval(() => {
    audioteme.play()
    const pipePosition = pipe.offsetLeft
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
    

    if(pipePosition <= 0){
        score += 1
        scorepoint.textContent = score         
    }
        
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'image/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'  
        audioteme.pause()   
        audiolost.play()


        clearInterval(loop)
    }
} ,10)

newgame.addEventListener("click", ()=>{
    setInterval(loop)
})


document.addEventListener('keydown', jump)
