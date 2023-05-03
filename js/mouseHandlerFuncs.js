import inputKeyFunc from './inputKeyFunc.js';

export function mouseDownHandler(event) {
  const textArea = document.getElementById('textarea');
  textArea.focus();
  if (event.target.tagName === 'SPAN') {
    const currentElement = event.target.closest('div');
    const newEvent = { ...event };
    [, , newEvent.code] = currentElement.classList;
    const currentChar = event.target.textContent;
    inputKeyFunc(currentChar, newEvent);

    if (newEvent.code !== 'CapsLock') {
      currentElement.classList.add('keyboard__key--active');
    }
  }
  event.preventDefault();
}
export function mouseUpHandler(event) {
  const currentElement = event.target.closest('.key');

  if (currentElement) {
    if (currentElement.classList.contains('key')) {
      const newEvent = { ...event };
      [, , newEvent.code] = currentElement.classList;
      currentElement.classList.remove('keyboard__key--active');
    }
  }
}
