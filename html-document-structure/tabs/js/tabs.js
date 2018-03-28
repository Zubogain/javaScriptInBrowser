document.addEventListener('DOMContentLoaded', () => {
	const MAIN = document.getElementById('tabs');
	const NAV = MAIN.querySelector('.tabs-nav');
	const TABS = MAIN.querySelector('.tabs-content');
	const NAV_CLONE = NAV.children[0];
	NAV.removeChild(NAV_CLONE);

	for (let i = 0; i < TABS.children.length; i++) {
		const title = TABS.children[i].dataset.tabTitle;
		const icon = TABS.children[i].dataset.tabIcon;

		NAV_CLONE.children[0].removeAttribute('class');
		NAV_CLONE.children[0].classList.add(icon);
		NAV_CLONE.children[0].textContent = title;

		NAV.appendChild(NAV_CLONE.cloneNode(true)).addEventListener('click', currentTab);
	}
	
	currentTab.call(NAV.children[0]);

	function currentTab() {
		for (let i = 0; i < this.parentElement.children.length; i++) {
			this.parentElement.children[i].classList.remove('ui-tabs-active');
			TABS.children[i].classList.add('hidden');
			if(TABS.children[i].dataset.tabTitle === this.children[0].textContent) {
				TABS.children[i].classList.remove('hidden');
			}
		}
		this.classList.add('ui-tabs-active');
	}
});