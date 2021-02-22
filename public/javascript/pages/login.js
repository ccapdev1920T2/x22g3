var loginStudentForm = document.getElementById('login-student-form');
var loginStudentSubmit = document.getElementById('login-student-submit');
var loginStudentErrorContainer = document.getElementById(
  'login-student-error-container',
);

loginStudentForm.onsubmit = function (e) {
  e.preventDefault();

  loginStudentSubmit.disabled = true;

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // send AJAX request to POST /login/mod
  axios
    .post(
      `/login`,
      {
        username,
        password,
      },
      {
        validateStatus: function (status) {
          return (status >= 200 && status < 300) || status == 401;
        },
      },
    )
    .then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        window.location.pathname = `/`;
      } else {
        loginStudentErrorContainer.innerHTML = response.data;
        loginStudentSubmit.disabled = false;
      }
    })
    .catch(function (err) {
      console.log(err);
      loginStudentSubmit.disabled = false;
    });
};
