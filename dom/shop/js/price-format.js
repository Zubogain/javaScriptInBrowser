function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function cart() {
	const buyBtn = document.getElementsByClassName('add');
	const cartCount = document.getElementById('cart-count');
	const totalPrice = document.getElementById('cart-total-price');

	for (var i = 0; i < buyBtn.length; i++) {
		buyBtn[i].addEventListener('click', cartAdd);
	}

	function cartAdd() {
		// Доброе время суток, не вижу надобности использовать getPriceFormatted()
		totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) + parseFloat(this.dataset.price);
		cartCount.innerHTML = parseInt(cartCount.innerHTML) + 1;
	}
}

document.addEventListener('DOMContentLoaded', cart);