import inputKeyFunc from './inputKeyFunc.js';

export function keyDownHandler(event) {
  event.preventDefault();
  const currentKey = document.querySelector(`.${event.code}`);

  if (document.querySelector(`.${event.code}`)) {
    if (currentKey) {
      const currentChar = currentKey.querySelectorAll(':not(.hidden)')[1].textContent;
      inputKeyFunc(currentChar, event);
      currentKey.classList.add('keyboard__key--active');
    }
  }
}

export function keyUpHandler(event) {
  event.preventDefault();
  let currentKey;
  if (document.querySelector(`.${event.code}`)) {
    currentKey = document.querySelector(`.${event.code}`);
    currentKey.classList.remove('keyboard__key--active');
  }
}
