const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

const form = document.querySelector('.newsletter');
const message = document.querySelector('#form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('#name')?.value?.trim();
    const email = form.querySelector('#email')?.value?.trim();

    if (!name || !email) {
      message.textContent = 'Please enter your name and a valid email.';
      message.style.color = '#a23b3b';
      return;
    }

    message.textContent = `Thanks, ${name}! You're subscribed.`;
    message.style.color = '#21692a';
    form.reset();
  });
}
