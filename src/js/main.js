import modals from './modules/modals';
import {showModalByTime, showModalByScroll} from './modules/modals';
import forms from './modules/forms';
import slider from './modules/sliders';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals('.button-design', '.popup-design', '.popup-design .popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    
    showModalByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);

    forms();
    slider({
        slidesSelector: '.main-slider-item', 
        time: 5000,
        dir: 'vertical'
    });

    slider({
        slidesSelector: '.feedback-slider-item',
        nextArrow: '.main-next-btn',
        time: 5000,
        prevArrow: '.main-prev-btn'
    });

    mask('[name="phone"]');

    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});