
const form = document.querySelector('#contact-us');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = document.querySelector('#feedback').value;
  const recipient = 'feedback@example.com';
  const subject = 'Feedback from website';
  const body = encodeURIComponent(feedback);
  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});