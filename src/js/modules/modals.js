const modals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {

    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();


    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    function closeAllModal() {
        windows.forEach(item => {
            item.style.display = 'none';
            document.body.style.marginRight = `0px`;
        });
    }

    close.addEventListener('click', () => {
        closeModal();
    });

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            closeAllModal();
            openModal();
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target == modal && closeClickOverlay) {
            closeAllModal();
            closeModal();
        }
    });

};

const showModalByTime = (selector, time) => {
    setTimeout(() => {
        let display;

       document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== 'none') {
                display = 'block';
            }
        });

        if (!display) {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

    }, time);
};

function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}

export default modals;
export {
    showModalByTime
};