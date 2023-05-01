import { state } from './js/state.js';
import initDomStructure from './js/initDomStructure.js';
import { keyDownHandler, keyUpHandler } from './js/keyHandlerFuncs.js';
import { mouseDownHandler, mouseUpHandler } from './js/mouseHandlerFuncs.js';

const page = document.querySelector('.page');

initDomStructure(page, state);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('mousedown', mouseDownHandler);
document.addEventListener('mouseup', mouseUpHandler);
