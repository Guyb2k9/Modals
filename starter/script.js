'use strict';

let modalButton = document.querySelectorAll('.show-modal');
let modal = document.querySelectorAll('.modal');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelectorAll('.close-modal');

//////////////////////////////////////////////////////////////

for (let i = 0; i < modalButton.length; i++) {
  let button = modalButton[i];
  button.addEventListener('click', () => {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  closeModal(i);
}

for (let i = 0; i < closeBtn.length; i++) {
  let close = closeBtn[i];
  close.addEventListener('click', () => {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

///////////////////////////////////////////////////////////////

function closeModal(number) {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal[number].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}
