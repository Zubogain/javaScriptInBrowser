const links = document.getElementsByTagName('a')
	  img = document.getElementsByClassName('gallery-view')[0];

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', show);
}

function show(element) {
  element.preventDefault();
  for (var i = 0; i < links.length; i++) {
  	links[i].classList.remove('gallery-current');
  }
  this.classList.add('gallery-current');
  img.src = this.href;
}