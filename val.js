const email1 = document.getElementById('mail1');
const form1 = document.getElementById('contact-form1');
const errorElement1 = document.getElementById('Error-messages1');
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