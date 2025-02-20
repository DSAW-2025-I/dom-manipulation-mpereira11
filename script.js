let contador = 1;
const contadorElement = document.querySelector('.contador');
const prevButton = document.querySelector('.ant');
const nextButton = document.querySelector('.sig');
const images = document.querySelectorAll('.img');

function updateCarrusel() {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i + 1 === contador) {
      img.classList.add('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  if (contador > 1) {
    contador--;
    contadorElement.textContent = contador;
    updateCarrusel();
  }
});

nextButton.addEventListener('click', () => {
  if (contador < images.length) {
    contador++;
    contadorElement.textContent = contador;
    updateCarrusel();
  }
});

updateCarrusel();
