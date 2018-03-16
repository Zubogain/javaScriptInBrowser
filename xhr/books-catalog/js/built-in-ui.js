/* Данный JS код */
document.addEventListener('DOMContentLoaded', () => {
  const response = new XMLHttpRequest();
  response.addEventListener('load', viewBooks);
  response.open('GET', 'https://neto-api.herokuapp.com/book/', true);
  response.send();

  function viewBooks() {
    if(response.responseText) {
      try {
        const content = document.getElementById('content');
        const booksArray = JSON.parse(response.responseText);
        content.innerHTML = booksArray.map(el => `<li data-title="${el.title}" data-author="${el.author.name}" data-info="${el.info}" data-price="${el.price}"><img src="${el.cover.small}"></li>`).join('');
      } catch(e) {
        console.log(e.name, e.message);
      }
    }
  }
});
// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});