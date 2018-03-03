const NEXT_IMG = document.getElementById('nextPhoto');
const PREV_IMG = document.getElementById('prevPhoto');
const CURRENT_PHOTO = document.getElementById('currentPhoto');
const IMAGES_ARRAY = [
    'i/breuer-building.jpg',
    'i/guggenheim-museum.jpg',
    'i/headquarters.jpg',
    'i/IAC.jpg',
    'i/new-museum.jpg',
];

let counter = 0;

function nextImg() {
	(counter >= IMAGES_ARRAY.length - 1) ? counter = 0: counter++;
}

function prevImg() {
	(counter <= 0) ? counter = IMAGES_ARRAY.length - 1: counter--;
}

NEXT_IMG.onclick = function () {
	nextImg();
	CURRENT_PHOTO.src = IMAGES_ARRAY[counter];
}

PREV_IMG.onclick = function () {
	prevImg();
	CURRENT_PHOTO.src = IMAGES_ARRAY[counter];
}