import modals from './modules/modals';
import {showModalByTime, showModalByScroll} from './modules/modals';
import forms from './modules/forms';
import slider from './modules/sliders';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeModalState from './modules/changeModalState';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalStates = {};
    changeModalState(modalStates);

    modals('.button-design', '.popup-design', '.popup-design .popup-close');
    modals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    modals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    
    showModalByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 60000);

    forms(modalStates);
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
    showMoreStyles('.button-styles', '#styles .row');

    calc('#size', "#material", '#options', '.promocode', '.calc-price');

    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});