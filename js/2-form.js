const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

initializeForm();

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    const { name, value } = event.target;

    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log('Submitted data:', formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
}

function initializeForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || '';
        form.elements.message.value = formData.message || '';
    }
}
