const menuButton = document.querySelectorAll('.header .button');
const navModal = document.querySelector('.header .nav-modal');

const toggleMenu = () => {
  if(!(navModal.style.display == 'flex')){
    navModal.style.display = 'flex';
  } else {
    navModal.style.display = 'none';
  }
}

menuButton.forEach(button => button.addEventListener('click', () => toggleMenu()));

window.addEventListener('click', event => {
  if(event.target == navModal) navModal.style.display = 'none';
});