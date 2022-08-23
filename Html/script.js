const buttonMenu = document.querySelector('.button-menu input');
const nav = document.querySelector('nav ul');

buttonMenu.addEventListener('click', function(){
    nav.classList.toggle('slide');
});