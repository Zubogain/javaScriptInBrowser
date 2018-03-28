'use strict';

function handleTableClick(event) {
	sort('firstName');
	sort('lastName');
	sort('birth');

	function sort(name) {
		if(event.target.tagName === 'TH' && event.target.dataset.propName === name) {
			event.currentTarget.dataset.sortBy = name;

			if(event.target.dataset.dir === '1') {
				sortTable(name, 1);
				event.target.dataset.dir = '-1';
			} else {
				sortTable(name, -1);
				event.target.dataset.dir = '1';
			}
		}
	}
}