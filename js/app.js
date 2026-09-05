const SITE_EMAIL = 'dollypartoncharitygiveaway@gmail.com';
const form = document.getElementById('applicationForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMessage');
    msg.hidden = false;
    msg.className = 'form-message success';
    msg.textContent = 'Application captured in demo mode. Connect a verified form/email service before accepting real submissions.';
    form.reset();
    window.scrollTo({top: document.querySelector('.form-section').offsetTop - 30, behavior:'smooth'});
  });
}
