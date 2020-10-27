import modals from './modules/modals';
import {showModalByTime, showModalByScroll} from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-design .popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    
    showModalByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);
});