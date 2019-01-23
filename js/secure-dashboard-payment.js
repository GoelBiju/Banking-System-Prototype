// JavaScript related to the functions of the Secure Dashboard.

$("#make-payment-form").submit(function(event) {
  // Cancel form submission and process the registration.
  event.preventDefault();
  
  var modal = document.getElementById('payment-message-modal');

  document.getElementById('modal-message').innerHTML = 'Are you sure you would like to go through with this payment?';
  
  // Show the modal notification and redirect to the login page.
  modal.style.display = 'block';
});

function processPayment() {
  var modal = document.getElementById('payment-message-modal');

  document.getElementById('modal-message').innerHTML = 'Are you sure you would like to go through with this payment?';
  
  // Show the modal notification and redirect to the login page.
  modal.style.display = 'block';
}


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


function paymentConfirm() {
  var modal = document.getElementById('payment-message-modal');
  modal.style.display = 'none';

  // Get payee info
  var payeeFName = document.getElementById('payment-payee-fname'); 
  var payeeLName = document.getElementById('payment-payee-lname');
  var amount = document.getElementById('payment-payee-amount');
  showConfirmed(payeeFName, payeeLName, amount); 
}

function showConfirmed(firstName, lastName, amount) {
  var modal = document.getElementById('payment-message-modal');

  document.getElementById('modal-message').innerHTML = 'Your payment to ' + firstName + ' ' + lastName + ' has been confirmed.<br/><br/>' +
            'You have paid a total of £' + amount + '. You will be automatically redirected to your dashboard in 5 seconds.'; 

  // Show the modal notification and redirect to the dashboard page.
  modal.style.display = 'block';
  setTimeout('redirectDashboard()', 5000);
}

function redirectDashboard() {
  document.location.href = 'secure_dashboard.html';
}