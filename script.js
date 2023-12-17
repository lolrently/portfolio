

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('active');
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY + window.innerHeight;
  var bodyHeight = document.documentElement.scrollHeight;


  if (scrollPosition >= bodyHeight - 100) {
    document.body.classList.add('show-footer');
  } else {
    document.body.classList.remove('show-footer');
  }
});
