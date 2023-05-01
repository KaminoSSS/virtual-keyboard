import { state } from './js/state.js';
import initDomStructure from './js/initDomStructure.js';
import { keyDownHandler, keyUpHandler } from './js/keyHandlerFuncs.js';

const page = document.querySelector('.page');

initDomStructure(page, state);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
