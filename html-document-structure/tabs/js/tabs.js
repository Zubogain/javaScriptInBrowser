document.addEventListener('DOMContentLoaded', () => {
	const MAIN = document.getElementById('tabs');
	const NAV = MAIN.querySelector('.tabs-nav');
	const tabs = MAIN.querySelector('.tabs-content');
	let navClone = NAV.children[0].cloneNode(true);
	NAV.removeChild(NAV.children[0]);

	for (let i = 0; i < tabs.children.length; i++) {
		const title = tabs.children[i].dataset.tabTitle;
		const icon = tabs.children[i].dataset.tabIcon;

		navClone.children[0].removeAttribute('class');
		navClone.children[0].classList.add(icon);
		navClone.children[0].textContent = title;

		NAV.appendChild(navClone.cloneNode(true)).addEventListener('click', currentTab);

	}
	currentTab.call(NAV.children[0]);

	function currentTab() {
		for (let i = 0; i < this.parentElement.children.length; i++) {
			this.parentElement.children[i].classList.remove('ui-tabs-active');
			tabs.children[i].classList.add('hidden');
			if(tabs.children[i].dataset.tabTitle === this.children[0].textContent) {
				tabs.children[i].classList.remove('hidden');
			}
		}
		this.classList.add('ui-tabs-active');
	}
});