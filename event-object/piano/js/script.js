"use strict";

class Piano {
  constructor() {
    this.src = "./sounds";
    for (let i = 0; i < this.keys.length; i++) {
      this.audios[i].src =  `${this.src}/middle/${this.sounds[i]}.mp3`;
      this.keys[i].addEventListener("click", this.play.bind(this.audios[i]));
    }
  }

  get mode() {
    return document.getElementsByClassName('set')[0];
  }
  
  get keys() {
    return this.mode.getElementsByTagName('li');
  }
  
  get audios() {
    return this.mode.getElementsByTagName('audio');
  }

  get sounds() {
    return [
      'fifth',
      'first',
      'fourth',
      'second',
      'third',
    ];
  }

  play() {
    this.currentTime = 0;
    this.play();
  }

  updateMode(mode = 'middle') {
    switch(mode) {
      case 'middle':
        this.mode.classList.remove('higher');
        this.mode.classList.remove('lower');
        break;
      case 'higher':
        this.mode.classList.remove('middle');
        this.mode.classList.remove('lower');
        break;
      case 'lower':
        this.mode.classList.remove('middle');
        this.mode.classList.remove('higher');
        break;
    }

    this.mode.classList.add(mode);

    for (let i = 0; i < this.keys.length; i++) {
      this.audios[i].src =  `${this.src}/${mode}/${this.sounds[i]}.mp3`;
    }
  }

  start() {
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if(key === 'Alt') {
        this.updateMode('higher');
      }
      if(key === 'Shift') {
        this.updateMode('lower');
      }
    })

    document.addEventListener('keyup', (event) => {
      const key = event.key;
      if(key === 'Shift' || key === 'Alt') {
        this.updateMode();
      }
    })
  }
}

const PIANO = new Piano();
PIANO.start();