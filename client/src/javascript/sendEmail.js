const form = document.querySelector('#email-form');
const snackbar = document.querySelector('#snackbar');

const displaySnackbar = (type, message) => {
  snackbar.classList.add('show', `snackbar--${type}`);
  snackbar.innerHTML = `<span>${message}</span>`
  setTimeout(() => {
    snackbar.classList.remove('show', `snackbar--${type}`);
    snackbar.innerHTML = "";
  }, 3000);
}

form.addEventListener('submit', async (e) => {
  try{
    e.preventDefault();
    const formData = new FormData(form);

    const formObj = {}
    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    const response = await fetch('/api/sendEmail', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify(formObj),
    }).then((res) => res.json());
    
    displaySnackbar('success', response.message);
    form.reset();
  } catch(err){
    console.log(err);
    displaySnackbar('error', err.message);
  }
})