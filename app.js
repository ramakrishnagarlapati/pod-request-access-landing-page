const reqAccessBtn = document.querySelector('.access button');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg')

function validateEmail(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

reqAccessBtn.addEventListener('click', () => {
    if (email.value === '') {
        errorMsg.textContent = 'Oops! please add your email';
        errorMsg.style.color = 'red'
    }
    else if (!validateEmail(email)) {
        errorMsg.textContent = 'Oops! please check your email'
        errorMsg.style.color = 'red'
    } else {
        errorMsg.textContent = 'Your email was added.'
        errorMsg.style.color = 'orange'
    }
})
