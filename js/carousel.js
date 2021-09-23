const carouselImages = document.querySelector('.carousel');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel .img').length;
const widthFrame = getComputedStyle(document.documentElement).getPropertyValue("--width").split('px')[0]


let dialogue = ["","¡Hola!<br>Como puedes notar me veo como una persona normal",
"A quien le gusta mucho usar su teléfono",
"Pero...<br>¿Qué pensarías si te dijera que esto es un arma?",
"Y ¿Qué pensarías si te digo que nunca he dormido?",
"¿Seguirias pensando que soy normal?",
"Nací con un cerebro diferente al del resto.",
"Yo no necesito dormir.",
"Asi que desde pequeño he tenido mucho más tiempo que los demás para hacer más cosas.",
"Jugué mucho más, comí mucho más y por supuesto, aprendí mucho más.",
"Inventé un sistema operativo con el cuál puedo hacer muchas cosas.",
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
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX += parseInt(widthFrame);
        document.getElementById("text").innerHTML = dialogue[imageIndex];
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});


console.log(widthFrame+"px de ancho y alto para el panel");
console.log(numberOfImages+" viñetas");