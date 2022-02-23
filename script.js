const faqs = document.querySelectorAll('.faq-acc');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

function toggle() {
  let blur = document.getElementById('chicks');
  const modal = document.querySelector('.intro');
  const body = document.querySelector('body');
  const popup = document.getElementById('road-img');
  blur.classList.toggle('active');
  popup.classList.toggle('active');
  if (modal.classList.contains('active')) {
    // Disable scroll
    body.style.overflow = 'hidden';
  } else {
    // Enable scroll
    body.style.overflow = 'auto';
  }
}
