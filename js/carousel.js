const carouselImages = document.querySelector('.carousel');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel .img').length;
const widthFrame = getComputedStyle(document.documentElement).getPropertyValue("--width").split('px')[0]
const buttonNext = document.querySelector('.next');
const buttonPrevious = document.querySelector('.previous');
const textGlobe = document.querySelector('.text-globe');
const background = document.querySelector('body');
const buttons = document.querySelector('.buttons');

let dialogue = ["","¡Hola!<br>Como puedes notar me veo como una persona normal",
"A quien le gusta mucho usar su teléfono",
"Pero...<br>¿Qué pensarías si te dijera que esto es un arma?",
"Y ¿Qué pensarías si te digo que nunca he dormido?",
"¿Seguirias pensando que soy normal?",
"Nací con un cerebro diferente al del resto.",
"Yo no necesito dormir.",
"Asi que desde pequeño he tenido mucho más tiempo que los demás para hacer más cosas.",
"Jugué mucho más, comí mucho más y por supuesto, aprendí mucho más.",
"Inventé un sistema operativo con el cual puedo hacer casi cualquier cosa.",
"Digamos que mi smartphone es el mejor espía del planeta.",
"Como podrás adivinar, descubrí muchas cosas. Cosas que no me creerías si te las dijera.",
"Cosas que deben ser detenidas.",
"Alguien debe hacer algo.",
"Fue lo primero que pensé al enterarme.",
"Pero nadie hacía nada.",
"Ahora me he convertido en una combinación de Batman con Mr. Robot.",
"Aunque muchas veces me siento como Kira.",
"Con mi teléfono y mi notebook hago que los criminales más grandes...",
"...mueran."];

let imageIndex = 1;
let translateX = 0;


document.getElementById("text").innerHTML = dialogue[1];

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX -= parseInt(widthFrame);
        document.getElementById("text").innerHTML = dialogue[imageIndex];
        if (imageIndex==1){
          buttonPrevious.classList.replace('visible','hidden');
        } 
          buttonNext.classList.replace('hidden','visible');  
          textGlobe.setAttribute('style','background-color: white');
          textGlobe.classList.remove('white-text'); 
          background.setAttribute('style', 'background-color: var(--artic)');  
          buttons.setAttribute('style','background-color: white');
          buttonPrevious.setAttribute('style','background-color: var(--artic)');
          buttonPrevious.classList.remove('white-text');
          buttonPrevious.classList.replace('border-black', 'border-grey');
          buttons.classList.replace('border-black', 'border-grey');
      }

    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX += parseInt(widthFrame);
        document.getElementById("text").innerHTML = dialogue[imageIndex];
        if (imageIndex!==1){
          buttonPrevious.classList.replace('hidden','visible');
        }
        if(imageIndex == numberOfImages){
          buttonNext.classList.replace('visible','hidden') ;
          textGlobe.setAttribute('style','background-color: var(--not-black)');
          textGlobe.classList.add('white-text');
          background.setAttribute('style', 'background-color: var(--almost-black');
          buttons.setAttribute('style','background-color: var(--not-black)');
          buttonPrevious.setAttribute('style','background-color: var(--almost-black)');
          buttonPrevious.classList.add('white-text');
          buttonPrevious.classList.replace('border-grey', 'border-black');
          buttons.classList.replace('border-grey', 'border-black');
          
          
        } 
      }
    } 
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

