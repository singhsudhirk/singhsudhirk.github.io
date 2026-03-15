function toggleAbstract(id, el) {
  var box = document.getElementById(id);
  var icon = el.querySelector('.toggle-icon');
  var isOpen = box.style.display === 'block';
  box.style.display = isOpen ? 'none' : 'block';
  icon.classList.toggle('open', !isOpen);
}
