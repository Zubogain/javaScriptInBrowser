const menu = document.getElementsByTagName('nav')[0],
      secret = document.getElementsByClassName('secret')[0];

let arrResult = [],
    i = 0,
    arr = ['KeyY', 'KeyT', 'KeyN','KeyJ', 'KeyK', 'KeyJ','KeyU', 'KeyB', 'KeyZ'];
   

document.addEventListener('keydown', openClose);

function openClose(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
    menu.classList.toggle('visible');
  }
}

document.addEventListener('keydown', netology);

function netology(event) { 
  if (event.key !== 'Shift') {
    arrResult.push(event.code);
      if (arrResult[i] !== arr[i]) {
        arrResult = [];
        i = 0;
      } else {
        i++;
      }
  }
  
  if (i === 9) {
    secret.classList.add('visible');
  }
}