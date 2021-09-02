import './styles.scss';
import 'normalize.css';

const refs = {
  menuHeder: document.querySelector('.menu-btn'),
  menuHederList: document.querySelector('.nav-menu-list'),
  toggleMenuBtn1: document.querySelector('.menu1'),
  toggleMenuBtn2: document.querySelector('.menu2'),
  toggleMenuBtn3: document.querySelector('.menu3'),
  itemsList1: document.querySelector('.links1'),
  itemsList2: document.querySelector('.links2'),
  itemsList3: document.querySelector('.links3'),
  cross1: document.querySelector('.menu1 img'),
  cross2: document.querySelector('.menu2 img'),
  cross3: document.querySelector('.menu3 img'),
};

refs.menuHeder.addEventListener('click', () => {
  refs.menuHederList.classList.toggle('is-hiden');
});

refs.toggleMenuBtn1.addEventListener('click', () => {
  refs.itemsList1.classList.toggle('is-hiden');
  refs.cross1.classList.toggle('is-hiden');
  refs.toggleMenuBtn1.classList.toggle('border-off');
});

refs.toggleMenuBtn2.addEventListener('click', () => {
  refs.itemsList2.classList.toggle('is-hiden');
  refs.cross2.classList.toggle('is-hiden');
  refs.toggleMenuBtn2.classList.toggle('border-off');
});

refs.toggleMenuBtn3.addEventListener('click', () => {
  refs.itemsList3.classList.toggle('is-hiden');
  refs.cross3.classList.toggle('is-hiden');
  refs.toggleMenuBtn3.classList.toggle('border-off');
});
