function highlight() {
  const bolds = document.querySelectorAll('strong');
  bolds.forEach(function (el) {
    el.style.color = 'rgb(0, 128, 0)';
  });
}

function return_normal() {
  const bolds = document.querySelectorAll('strong');
  bolds.forEach(function (el) {
    el.style.color = 'rgb(0, 0, 0)';
  });
}