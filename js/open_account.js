// Handle the events for a user that is registering for online banking.

$("#account-registration-form").submit(function(event) {
    // Cancel form submission and process the registration.
    event.preventDefault();

    // Show a modal dialog indicating that you have been registered.
    var title = document.getElementById('registration-title').value;
    var firstName = document.getElementById('registration-first-name').value;
    var lastName = document.getElementById('registration-last-name').value;

    var modal = document.getElementById('registration-message-modal');

    document.getElementById('modal-message').innerHTML = 
        'Welcome to EBank, <strong>' + title + ' ' + firstName + ' ' + lastName + '</strong>.<br/>' +
        '<br/>Before continuing <strong>we need your consent to use your information for the EBank service</strong><br/><br/>' +
        'You can cancel registration by clicking close, however, if you consent to GDPR you will hear from an EBank Adviser shortly.' +
        ' Once your account has been activated you may login using the username and password you provided when registering.<br/>';  

    // Show the modal notification and redirect to the login page.
    modal.style.display = 'block';
});


function registrationConsent() {
    // Clear the session storage before proceeding with a re-direct to the login page.
    sessionStorage.clear();

    // Get the banking username and password before saving.
    var bankingUsername = document.getElementById('registration-username').value;
    var bankingPassword = document.getElementById('registration-password').value;

    // Store the registration username and password in a object and store into localStorage.
    localStorage.setItem(bankingUsername, JSON.stringify({"password": bankingPassword}));

    document.location.href = 'login.html';
}

function forceLowerCase(inputTxt) {
    inputTxt.value = inputTxt.value.toLowerCase();
}