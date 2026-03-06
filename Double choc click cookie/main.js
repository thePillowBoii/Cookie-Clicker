let heading = document.querySelector('h2');
let image = document.querySelector('img');

function bite() {
  image.src = 'cookie-bite.png';
}

function crumbs() {
  image.src = 'crumbs.png';
  heading.textContent = 'Om nom nom nom!';
}