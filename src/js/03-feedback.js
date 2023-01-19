import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const localCurrent = JSON.parse(localStorage.getItem(FORM_KEY));
const formData = localCurrent ? localCurrent : {};

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmitForm);

// init form fields
for (const el of formEl.elements) {
  el.value = formData[el.name] ? formData[el.name] : '';
}

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;

  if (!(email.value && message.value)) alert('input data');
  else {
    console.log({ email: email.value, message: message.value });
    formEl.reset();
    localStorage.setItem('feedback-form-state', null);
  }
}
