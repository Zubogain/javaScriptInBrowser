"use strict";

const DROPDOWN = document.getElementsByClassName('wrapper-dropdown')[0];

DROPDOWN.onclick = function () {
	this.classList.toggle("active");
}