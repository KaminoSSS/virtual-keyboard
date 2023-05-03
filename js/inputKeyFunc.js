import state from './state.js';

export default function inputKeyFunc(currentChar, event) {
  let currentCharElement = currentChar;
  const textarea = document.getElementById('textarea');
  let textAreaValue = textarea.value;
  const areaCursorPos = textarea.selectionStart;
  function textareaFunc() {
    if (areaCursorPos >= 0 && areaCursorPos <= textAreaValue.length) {
      textarea.value = textAreaValue.slice(0, areaCursorPos)
        + currentCharElement
        + textAreaValue.slice(areaCursorPos, textAreaValue.length);
      textarea.selectionStart = areaCursorPos + currentCharElement.length;
      textarea.selectionEnd = areaCursorPos + currentCharElement.length;
    } else {
      textarea.value += currentCharElement;
    }
  }
  if (state.SPECIALS.includes(event.code)) {
    switch (event.code) {
      case 'Backspace':
        if (areaCursorPos > 0 && areaCursorPos <= textAreaValue.length) {
          textAreaValue = textAreaValue.slice(0, areaCursorPos - 1)
            + textAreaValue.slice(areaCursorPos, textAreaValue.length);
          textarea.value = textAreaValue;
          textarea.selectionStart = areaCursorPos - 1;
          textarea.selectionEnd = areaCursorPos - 1;
        }
        break;
      case 'Delete':
        if (areaCursorPos >= 0 && areaCursorPos <= textAreaValue.length - 1) {
          textAreaValue = textAreaValue.slice(0, areaCursorPos)
            + textAreaValue.slice(areaCursorPos + 1, textAreaValue.length);
          textarea.value = textAreaValue;
          textarea.selectionStart = areaCursorPos;
          textarea.selectionEnd = areaCursorPos;
        }
        break;
      case 'Tab':
        currentCharElement = '    ';
        textareaFunc();
        break;
      case 'Enter':
        currentCharElement = '\n';
        textareaFunc();
        break;
      default:
        break;
    }
  } else {
    textareaFunc();
  }
}
