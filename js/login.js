// Login related JavaScript functions for the EBank prototype website.

// Login process to save the logged in information to a session cookie.
// As a result we this prototypes how a real website would send information to the server
// and the server would handle redirection to the secure page and would use user details to
// show secure information only accessible to the user.
$(document).ready(function() {

    if (localStorage.chkbox && localStorage.chkbx != '') {
      $('#remember_me').attr('checked', 'checked');
      $('#username').val(localStorage.username);
      $('#password').val(localStorage.password);
    } else {
      $('#remember_me').removeAttr('checked');
      $('#username').val('');
      $('#password').val('');
    }

    $('#loginButton').click(function() {
      // If the checkbox is checked then save the username and password values 
      // to our localStorage (in a real life implementation, localStorage should not be 
      // used to store a username and password in plaintext.)
      if ($('#remember_me').is(':checked')) {
        localStorage.username = $('#username').val();
        localStorage.password = $('#password').val();
        localStorage.chkbox = $('#remember_me').val();
      } else {
        localStorage.username = '';
        localStorage.password = '';
        localStorage.chkbox = '';
      }
    });
});

// Due to HTTPOnly on local cookies, to simulate login we are using sessionStorage.
function saveLoginInfo(name, value) {
  // It will only save login details for a session and for a banking
  // application this is suitable as you would not want to prolong the expiration of a cookie.
  sessionStorage.setItem(name, value);
}

function processLoginDetails() {
  var modal = document.getElementById('login-error-modal');
  // Reset modal error message.
  var loginErrorMessage = document.getElementById('modal-message');
  loginErrorMessage.innerHTML = 'Unknown Error Message';

  // Save the username in a cookie.
  var username = document.getElementById('username').value;
  var attemptPassword = document.getElementById('password').value;

  // Check to see if the username and password match from 
  // what has been stored in localStorage from registration. 
  if (username != '' && attemptPassword != '') {

    // Attempt to get the password from the localStorage.
    var retrievedPassword = localStorage.getItem(username);

    // Allow for a testing user to use the "bankuser" and "bankpassword" login details to test the system.
    if ((username == 'bankuser' && attemptPassword == 'bankpassword') || (retrievedPassword == attemptPassword)) {
      saveLoginInfo("username", username);

      // Proceed to re-directing user to the secure account dashboard 
      // upon a successful login (logging-in on a real implementation will
      // be handled by a server).
      document.location.href = 'secure_dashboard.html';
    } else {
      loginErrorMessage.innerHTML = "The username and password you have entered is invalid. " + 
            "Make sure have <u><a href='open_your_account.html'>registered</a></u> or have a <strong>valid testing username and password</strong> for the system?";
    }    

    modal.style.display = "block";
  }
  else {
    if (username == '' && password != '') {
      loginErrorMessage.innerHTML = 'Please enter a valid username to proceed to logging into your account.';
    }
    else if (password == '' && username != '') {
      loginErrorMessage.innerHTML = 'Please enter a valid password to proceed to logging into your account.';
    }
    else {
      loginErrorMessage.innerHTML = 'Please enter in a username and password to log-in to Online Banking.';
    }

    // Display the modal error message.
    modal.style.display = "block";
  }
  
}


