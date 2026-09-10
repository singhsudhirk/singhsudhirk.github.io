function toggleAbstract(id, el) {
  var box = document.getElementById(id);
  var icon = el.querySelector('.toggle-icon');
  var isOpen = box.style.display === 'block';
  box.style.display = isOpen ? 'none' : 'block';
  icon.classList.toggle('open', !isOpen);
}


/* Scroll Research to the correct position */
function scrollToResearch() {
  if (window.location.hash !== '#research') return;

  var target = document.getElementById('research');
  var nav = document.querySelector('.simple-nav');

  if (!target) return;

  var navHeight = nav ? nav.getBoundingClientRect().height : 0;

  var targetPosition =
    target.getBoundingClientRect().top +
    window.pageYOffset -
    navHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}


/* Clicking Research on the same page */
document.querySelectorAll('a[href="/#research"], a[href="#research"]').forEach(function(link) {
  link.addEventListener('click', function() {
    setTimeout(scrollToResearch, 10);
  });
});


/* Arriving at the homepage with #research */
window.addEventListener('load', function() {
  if (window.location.hash === '#research') {
    setTimeout(scrollToResearch, 50);
  }
});
