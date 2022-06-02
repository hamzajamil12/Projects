'use strict';
const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModalFunction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModalFunction);

btnCloseModal.addEventListener('click', closeModalFunction);
overlay.addEventListener('click', closeModalFunction);
