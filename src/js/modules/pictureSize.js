const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';

        block.querySelectorAll('p:not(.size-hit)').forEach(element => {
            element.style.display = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';

        block.querySelectorAll('p:not(.size-hit)').forEach(element => {
            element.style.display = 'block';
        });
    }

    blocks.forEach(item => {
        item.addEventListener('mouseover', () => {
            showImg(item);
        });
        item.addEventListener('mouseout', () => {
            hideImg(item);
        });
    });
    

};

export default pictureSize;