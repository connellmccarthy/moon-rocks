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
    if (el.host == window.host & el.getAttribute('target') != '_blank') {
      event.preventDefault();
      setTimeout(function() {
        document.querySelector('.loading').classList.remove('animated');
      }, 500);
    }
  })
})