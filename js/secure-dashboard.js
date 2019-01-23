// JavaScript related to the functions of the Secure Dashboard.

window.addEventListener("DOMContentLoaded", function() {
  // Check to ensure that the login information 
  // from sessionStorage is available.
  var username = sessionStorage.getItem("username");

  // If the username is null then redirect to the forbidden access page.
  if (username == null) {
    sessionStorage.clear();
    document.location.href = 'access_forbidden_page.html';
  }
}, false);


// When signing the user out, clear all session information and redirect back to landing page.
function signOut() {
  sessionStorage.clear();
  document.location.href = 'landing_page.html';
}
