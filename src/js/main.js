import modals from './modules/modals';
import {showModalByTime} from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-design .popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    showModalByTime('.popup-consultation', 60000);
});