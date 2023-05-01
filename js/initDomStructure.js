export default function initDomStructure(page, keys) {
  // textarea
  const textarea = document.createElement('textarea');
  textarea.classList.add('body__textarea');
  textarea.setAttribute('id', 'textarea');
  textarea.setAttribute('cols', '40');
  textarea.setAttribute('rows', '6');
  page.appendChild(textarea);
  // keyboard div
  const keyboard = document.createElement('div');
  keyboard.className = 'page__keyboard keyboard';
  keyboard.setAttribute('id', 'keyboard');
  page.appendChild(keyboard);
  // keyboard keys

  const keyboardKeys = document.createDocumentFragment();

  for (let i = 0; i < keys.length; i++) {
    // current key
    const currentKey = document.createElement('div');
    currentKey.classList.add('keyboard__key', 'key', keys[i].className);

    // current ru key
    const ruKey = document.createElement('span');
    ruKey.classList.add('rus', 'hidden'),
      ruKey.insertAdjacentHTML(
        'afterBegin',
        `<span class="caseDown hidden">${keys[i].rus.caseDown}</span>`
      );
    ruKey.insertAdjacentHTML(
      'beforeEnd',
      `<span class="caseUp hidden">${keys[i].rus.caseUp}</span>`
    );
    ruKey.insertAdjacentHTML(
      'beforeEnd',
      `<span class="caps hidden">${
        keys[i].rus.caps || keys[i].rus.caseUp
      }</span>`
    );
    ruKey.insertAdjacentHTML(
      'beforeEnd',
      `<span class="shiftCaps hidden">${
        keys[i].rus.shiftCaps || keys[i].rus.caseDown
      }</span>`
    );
    // append ru key
    currentKey.appendChild(ruKey);

    // current eng key
    const engKey = document.createElement('span');
    engKey.classList.add('eng');
    engKey.insertAdjacentHTML(
      'afterBegin',
      `<span class="caseDown">${keys[i].eng.caseDown}</span>`
    );
    engKey.insertAdjacentHTML(
      'beforeEnd',
      `<span class="caseUp hidden">${keys[i].eng.caseUp}</span>`
    );
    engKey.insertAdjacentHTML(
      'beforeEnd',
      `<span class="caps hidden">${
        keys[i].eng.caps || keys[i].eng.caseUp
      }</span>`
    );
    engKey.insertAdjacentHTML(
      'beforeEnd',
      `<span class="shiftCaps hidden">${
        keys[i].eng.shiftCaps || keys[i].eng.caseDown
      }</span>`
    );

    // append eng key
    currentKey.appendChild(engKey);

    // append current key
    keyboard.appendChild(currentKey);
  }

  // append keyboardKeys into keyboard
  keyboard.appendChild(keyboardKeys);
}
