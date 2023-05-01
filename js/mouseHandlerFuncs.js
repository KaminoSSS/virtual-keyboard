import inputKeyFunc from './inputKeyFunc.js';

export function mouseDownHandler(event) {
  const textArea = document.getElementById('textarea');
  textArea.focus();
  if (event.target.tagName === 'SPAN') {
    const currentElement = event.target.closest('div');
    [, , event.code] = currentElement.classList;
    const currentChar = event.target.textContent;
    inputKeyFunc(currentChar, event);

    if (event.code !== 'CapsLock') {
      currentElement.classList.add('keyboard__key--active');
    }
  }
  event.preventDefault();
}
export function mouseUpHandler(event) {
  const currentElement = event.target.closest('.key');

  if (currentElement) {
    if (currentElement.classList.contains('key')) {
      [, , event.code] = currentElement.classList;
      currentElement.classList.remove('keyboard__key--active');
    }
  }
}
