//keydow- adiciona um evento quando qualquer tecla do teclado seja pressionado
document.addEventListener('Keydow' , pulo) // escutador de eventos

const personagem = document.querySelector('.personagem');
const obstaculo = document.querySelector('.obstaculo');


    const pulo =()=>{
        personagem.classList.add('pulo');
        setTimeout(()=>{}, 500);
        }

document.addEventListener('keydown', pulo);

const loop = setInterval(()=>{
    const obstaculoPosition = obstaculo.offsetLeft;
    /*converter um string em Number*/
    const personagemPosition =parseInt( window.getComputedStyle(personagem).bottom);
   /* console.log(personagemPosition);*/


   if (canoPosition <= 120 && canoPosition >= 0 && marioPosition < 100) {
        obstaculo.style.animation = 'none'; /* paramos a animação do cano */
        obstaculo.style.left = `${obstaculoPosition}px`
        
        personagem.src = '../img/game-over.png';
        personagem.style.width ='75px'; 
        personagem.style.marginLeft = '50px';
        clearInterval(loop);
    }
    }, 10)


    
document.addEventListener('keydown', pulo);
