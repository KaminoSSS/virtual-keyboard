import { state } from './state.js';

export default function inputKeyFunc(currentChar, event) {
  const textarea = document.getElementById('textarea');
  let textAreaValue = textarea.value;
  const areaCursorPos = textarea.selectionStart;
  function textareaFunc() {
    if (areaCursorPos >= 0 && areaCursorPos <= textAreaValue.length) {
      (textarea.value = textAreaValue.slice(0, areaCursorPos)
        + currentChar
        + textAreaValue.slice(areaCursorPos, textAreaValue.length));
      (textarea.selectionStart = areaCursorPos + currentChar.length);
      (textarea.selectionEnd = areaCursorPos + currentChar.length);
    } else {
      textarea.value += currentChar;
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
        currentChar = '    ';
        textareaFunc();
        break;
      case 'Enter':
        currentChar = '\n';
        textareaFunc();
        break;
    }
  } else {
    textareaFunc();
  }
}
