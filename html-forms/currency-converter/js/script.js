class CurrencyConverter {
	constructor(link) {
		this.link = link;
	}

	get content() {
		return document.getElementById('content');
	}

	get from() {
		return document.getElementById('from');
	}

	get to() {
		return document.getElementById('to');
	}

	get amount() {
		return document.getElementById('source');
	}

	get result() {
		return document.getElementById('result');
	}

	convert(amount, from, to) {
		return (amount * from / to * 100) / 100;
	}

	sendAsyncRequest(link, callback) {
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', callback);
		xhr.open('GET', link, true);
		xhr.send();
	}

	jsonParse(json) {
		if(json) {
			try {
				return JSON.parse(json);
			} catch(e) {
				console.log(e.name, e.message);
			}
		}
		return '';
	}

	start() {
		const self = this;

		this.sendAsyncRequest(this.link, function() {
			const ARRAY = self.jsonParse(this.responseText);
			self.from.innerHTML = self.to.innerHTML = ARRAY.map(el => `<option>${el.code}</option>`).join('');

			currencyResult();
			self.amount.addEventListener('input', currencyResult);
			self.from.addEventListener('input', currencyResult);
			self.to.addEventListener('input', currencyResult);

			self.content.classList.remove('hidden');

			function currencyResult() {
				const INDEX_FROM = ARRAY.findIndex(el => el.code === self.from.value),
					INDEX_TO = ARRAY.findIndex(el => el.code === self.to.value);

				if(INDEX_FROM !== -1 && INDEX_TO !== -1) {
					self.result.value = self.convert(self.amount.value, ARRAY[INDEX_FROM].value, ARRAY[INDEX_TO].value).toFixed(2);
				} else {
					self.result.value = 'Ошибка при конвертации валют!';
				}
			}
		});
	}
}

new CurrencyConverter('https://neto-api.herokuapp.com/currency').start();