const form = document.getElementById('alphanumericForm');
const input = document.getElementById('inputField');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const value = input.value;
  const regex = /^[a-zA-Z0-9]+$/;

  if (!regex.test(value)) {
    message.textContent = 'This is not alphanumeric and the form will not be submitted because of that, please try again.';
  } else {
    message.textContent = 'Your input is alphanumeric and is valid and the form has been submitted.';
  }

});
