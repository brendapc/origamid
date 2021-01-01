// Mude a cor da tela para azul e depois para vermelho a cada 2s.

/* setInterval(()=>{
    document.body.classList.toggle('active')
}, 2000)
*/


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo) //double click

let i = 0
let timer

function iniciarTempo() {
    timer = setInterval(()=>{
        tempo.innerText = i++
    }, 100)
    iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled')
}

function resetarTempo() {
    tempo.innerText = 0
    i = 0
}