const rootElement = document.querySelector(":root");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop,scrollLeft);
  }
}

rootElement.style.scrollBehavior = 'auto';

function enableScroll () {
  window.onscroll = function () {}
  rootElement.style.scrollBehavior = 'smooth';
  localStorage.setItem('opened', 'true');
}
if (!localStorage.getItem('opened')) {
  disableScroll();
}

disableScroll();

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Berhasil Terkirim");
    })
  });
});