window.onload = function () {
    // Keep the user on the page for a maximum of 7.5 seconds and then redirect.
    setTimeout("redirectToLogin()", 7500);
}

// Allow redirection to the login page.
// This function is to be specifically called if a user has not provided credentials
// to access our secure page.
function redirectToLogin() {
    document.location.href = 'login.html';
}
