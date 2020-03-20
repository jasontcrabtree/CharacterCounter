var button = document.querySelectorAll('button')[0];
button.addEventListener(
  'click',
  function() {
    if (button.getAttribute('data-text-swap') == button.innerHTML) {
      button.innerHTML = button.getAttribute('data-text-original');
    } else {
      button.setAttribute('data-text-original', button.innerHTML);
      button.innerHTML = button.getAttribute('data-text-swap');
    }
  },
  false
);
