const changeModalState = (state) => {
    const windowSize = document.querySelectorAll('#size'),
        windowMaterial = document.querySelectorAll('#material'),
        windowOptions = document.querySelectorAll('#options'),
        windowPromocode = document.querySelectorAll('.promocode'),
        windowPrice = document.querySelector('.calc-price');

    function bindActionTyElems(event, elem, prop) {

        elem.forEach((item) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                    case 'INPUT':
                        state[prop] = item.value;
                        break;
                }

                state['price'] = windowPrice.textContent;

                console.log(state);
                console.log(windowPrice.textContent);
            });
        });

    }

    bindActionTyElems('input', windowPromocode, 'promocode');
    bindActionTyElems('change', windowMaterial, 'material');
    bindActionTyElems('change', windowOptions, 'options');
    bindActionTyElems('change', windowSize, 'size');
};

export default changeModalState;