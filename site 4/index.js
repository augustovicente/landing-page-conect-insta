var text = document.querySelectorAll('.faq-text');
var increase = document.querySelectorAll('.faqs');

document.querySelectorAll('.btn-show').forEach((element, index) => {
  element.addEventListener('click', event => {
    increase[index].classList.toggle('increase')
    text[index].classList.toggle('show')
  })
});