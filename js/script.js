function renderError(element) {
    console.log('erraar')
    element.nextElementSibling.firstElementChild.classList.remove('hide');
}

function removeError(element) {
    console.log('removeErraar');
    element.nextElementSibling.firstElementChild.classList.add('hide');
}


function renderEmailValidationResult() {
    if (emailInp.value.match(regexForEmail)) {
        removeError(emailInp);
        return true
    }
    else {
        renderError(emailInp);
        return false

    }
}

function validateForm(event) {

    event.preventDefault();
    const emailInp = document.getElementById('email');
    const emailError = document.querySelector('.sign-up__email-error');
    const regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // const regexForLastName = 
    // const regexForEmail = 
    // const regexForPassword = 

    if (renderEmailValidationResult()) {
        alert('correct');
    }
    else {
        alert('incorrect');
    }


}