const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-3');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.port').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// const buttons = document.querySelectorAll('.pro-btn');
// const closeModal = document.querySelector('.close');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     document.getElementById('modal-cards').style.display = 'block';
//   });
// });
// closeModal.addEventListener('click', () => {
//   document.getElementById('modal-cards').style.display = 'none';
// });

// validate contact form Mobile

const email = document.getElementById('mail');
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('Error-messages');
form.addEventListener('submit', (e) => {
  const messages = [];
  if (email.value.match(/^[a-z@.0-9-_]*$/)) {
    messages.push('your email is correct');
  } else {
    e.preventDefault();
    messages.push('Please enter the email in lower case.');
    errorElement.innerText = messages.join(', ');
  }
});
// validate contact form Desktop

const email1 = document.getElementById('mail1');
const form1 = document.getElementById('contact-form1');
const errorElement1 = document.getElementById('Error-messages1');
errorElement1.style.color = 'red';
function validate() {
  if (email1.value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  errorElement1.innerText = 'please enter the email in lower case';
  return false;
}
form1.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validate()) {
    form1.submit();
  }
  validate();
});
// const markMe = document.querySelector('.pro-btn');
// const closeBtn = document.querySelector('.close');
// markMe.forEach((button) => {
//   button.addEventListener('click', () => {
//     document.getElementById('modal-cards').style.display = 'block';
//   });
// });
// closeBtn.addEventListener('click', () => {
//   closeBtn.getElementsByClassName('close').style.display = 'none';
// });
