"use strict";

const DRUM = document.getElementsByClassName('drum-kit__drum');

for (let i = 0; i < DRUM.length; i++) {
	DRUM[i].onclick = function () {
		const AUDIO = this.getElementsByTagName('audio')[0];
		AUDIO.currentTime = 0;
		AUDIO.play();
	}
}