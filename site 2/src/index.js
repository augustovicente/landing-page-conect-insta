var text = document.querySelectorAll('.faq-text');
var increase = document.querySelectorAll('.faqs');

document.querySelectorAll('.btn-show').forEach((element, index) => {
  element.addEventListener('click', event => {
    text[index].classList.toggle('show')
    increase[index].classList.toggle('increase')
  })
});