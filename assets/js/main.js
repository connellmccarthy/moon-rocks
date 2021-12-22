var video = {
  playing: false,
  element: null,
  id: null
}
window.addEventListener('load', () => {
  document.querySelector('.loading').classList.add('animated');
});
document.querySelectorAll('a').forEach(function(el) {
  el.addEventListener('click', (event) => {
    if (el.host == window.location.host  && el.getAttribute('target') != '_blank') {
      event.preventDefault();
      document.querySelector('.loading').classList.toggle('animated');
      setTimeout(function() {
        window.location = el.getAttribute('href');
      }, 500);
    }
  })
});