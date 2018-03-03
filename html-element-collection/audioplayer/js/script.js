"use strict";

const AUDIO_ARRAY = [
	{
		link: 'mp3/LA Chill Tour.mp3',
		title: 'LA Chill Tour',
	},
	{
		link: 'mp3/LA Fusion Jam.mp3',
		title: 'LA Fusion Jam',
	},
	{
		link: 'mp3/This is it band.mp3',
		title: 'This is it band',
	},
];

class AudioPlayer {
	constructor(audioArray) {
		if(!Array.isArray(audioArray)) {
			throw new Error("Argument not specified or not an array!");
		}
		audioArray.forEach((element) => {
			if(!(element instanceof Object)) {
				throw new Error("An array element is not an object!");
			}
		});

		this.audioArray = audioArray;
		this.isPlaying = false;
		this.index = 0;
	}

	get player() {
		return document.getElementsByClassName('mediaplayer')[0];
	}

	get audio() {
		return this.player.getElementsByTagName('audio')[0];
	}

	get title() {
		return this.player.getElementsByClassName('title')[0];
	}

	get buttonPlayAndPause() {
		return this.player.getElementsByClassName('playstate')[0];
	}

	get buttonStop() {
		return this.player.getElementsByClassName('stop')[0];
	}

	get buttonBack() {
		return this.player.getElementsByClassName('back')[0];
	}

	get buttonNext() {
		return this.player.getElementsByClassName('next')[0];
	}

	/*
		Play and pause the track
		return undefined
	*/
	audioPlayAndPause() {
		this.isPlaying === true ? this.isPlaying = false: this.isPlaying = true;

		if(this.player.classList.contains('play')) {
			this.player.classList.remove('play');
			this.audio.pause();
		} else {
			this.player.classList.add('play');
			this.audio.play();
		}
	}

	/*
		Stop track
		return undefined
	*/
	audioStop() {
		this.player.classList.remove('play');
		this.isPlaying = false;
		this.audio.pause();
		this.audio.currentTime = 0;
	}

	/*
		Previous track
		return undefined
	*/
	audioBack() {
		if(this.index > 0) {
			this.index--;
			this.isPlaying = false;
			this.audioStop();
			this.audioChange();
		}
	}

	/*
		Next track
		return undefined
	*/
	audioNext() {
		if(this.index < this.audioArray.length - 1) {
			this.index++;
			this.isPlaying = false;
			this.audioStop();
			this.audioChange();
		}
	}

	/*
		Changes the track to the current song and the song name
		return undefined
	*/
	audioChange() {
		this.title.title = this.audioArray[this.index].title;
		this.audio.src = this.audioArray[this.index].link;
	}

	/*
		Main method
		return undefined
	*/
	start() {
		this.buttonPlayAndPause.onclick = this.audioPlayAndPause.bind(this);
		this.buttonStop.onclick = this.audioStop.bind(this);
		this.buttonBack.onclick = this.audioBack.bind(this);
		this.buttonNext.onclick = this.audioNext.bind(this);
		setInterval(() => this.audio.ended && this.player.classList.remove('play') , 2000);
	}
}

const AUDIO_PLAYER = new AudioPlayer(AUDIO_ARRAY);
AUDIO_PLAYER.start();