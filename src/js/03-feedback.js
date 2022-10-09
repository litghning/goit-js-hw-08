import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};
const LOCAL_STORAG = 'feedback-message';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormData, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();

  const parseData = JSON.parse(localStorage.getItem(LOCAL_STORAG));
  console.log('data:', parseData);

  localStorage.removeItem(LOCAL_STORAG);
}

function onFormData() {
  const formData = {
    email: refs.email.value,
    message: refs.textarea.value,
  };

  localStorage.setItem(LOCAL_STORAG, JSON.stringify(formData));
}

insetData();

function insetData() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAG));

  if (savedMessage !== null) {
    refs.textarea.value = savedMessage.message;
    refs.email.value = savedMessage.email;
  }
}