const STORAGE_KEY = 'feedback-form';

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormInput);

function handleFormSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

function handleFormInput(event) {
  const value = event.target.value;
  const key = event.target.name;

  let savedFeedbackData = {};

  try {
    savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }

  if (savedFeedbackData) {
    savedFeedbackData[key] = value;
  } else {
    savedFeedbackData = {
      [key]: value,
    };
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFeedbackData));
  } catch (err) {
    console.log(err);
    return;
  }
}

function populateForm() {
  let savedFeedbackData = {};

  try {
    savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }

  if (!savedFeedbackData) {
    return;
  }

  for (const key in savedFeedbackData) {
    form.elements[key].value = savedFeedbackData[key];
  }
}
