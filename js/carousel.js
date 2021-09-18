const carouselImages = document.querySelector('.carousel');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel img').length;
var widthFrame = 620;
let dialogue = ["","Hola","voy a contarte", "mi historia","para el reto"];
let imageIndex = 1;
let translateX = 0;


carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX -= widthFrame;
        document.getElementById("text").innerHTML = dialogue[imageIndex];
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX += widthFrame;
        document.getElementById("text").innerHTML = dialogue[imageIndex];
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

/* let text = "Hola";
    document.getElementById("text").innerHTML = text; */
