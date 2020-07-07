import { elements } from '../views/base';

const menuBtn = document.querySelector('.menu-icon');
const searchBtn = document.querySelector('.search-icon');
const menuCancelBtn = document.querySelector('.menu-cancel-icon');
const searchCancelBtn = document.querySelector('.search-cancel-icon');
const items = document.querySelector('.nav-items');
const form = document.querySelector('form');
const favorite = document.querySelector('.favorite');

menuBtn.onclick = () => {
  items.classList.add('active');
  menuBtn.classList.add('hide');
  searchBtn.classList.add('hidden');
  menuCancelBtn.classList.add('show');
  document.body.style.overflow = 'hidden';
};

menuCancelBtn.onclick = () => {
  items.classList.remove('active');
  menuBtn.classList.remove('hide');
  searchBtn.classList.remove('hidden');
  menuCancelBtn.classList.remove('show');
  favorite.classList.remove('active');
  document.body.style.overflow = 'auto';
};

searchBtn.onclick = () => {
  form.classList.add('active');
  menuBtn.classList.add('hide');
  searchBtn.classList.add('hide');
  searchCancelBtn.classList.add('show');
};

searchCancelBtn.onclick = () => {
  menuBtn.classList.remove('hide');
  searchBtn.classList.remove('hide');
  searchCancelBtn.classList.remove('show');
  form.classList.remove('active');
};

form.addEventListener('submit', () => {
  document.body.style.overflow = 'auto';
  menuBtn.classList.remove('hide');
  searchBtn.classList.remove('hide');
  searchCancelBtn.classList.remove('show');
  form.classList.remove('active');
});

export const hideMenu = () => {
  items.classList.remove('active');
  menuBtn.classList.remove('hide');
  searchBtn.classList.remove('hidden');
  menuCancelBtn.classList.remove('show');
  favorite.classList.remove('active');
  document.body.style.overflow = 'auto';
};

elements.favoriteLink.addEventListener('click', () => {
  menuCancelBtn.classList.add('show');
});
