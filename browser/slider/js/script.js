const SLIDER = document.getElementById('slider');

const IMAGES_ARRAY = [
    'i/airmax-jump.png',
    'i/airmax-on-foot.png',
    'i/airmax-playground.png',
    'i/airmax-top-view.png',
    'i/airmax.png',
];

let counter = 0;

setInterval(() => {
    if (counter === IMAGES_ARRAY.length) {
        counter = 0;
    }

    SLIDER.src = IMAGES_ARRAY[counter++];
    }, 5000);