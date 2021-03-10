var loginStudentForm = document.getElementById('login-student-form');
var loginStudentSubmit = document.getElementById('login-student-submit');
var loginStudentSpinner = document.getElementById('login-student-spinner');
var loginStudentText = document.getElementById('login-student-text');
var loginStudentErrorContainer = document.getElementById(
  'login-student-error-container',
);

var isLoading = false;

loginStudentForm.onsubmit = function (e) {
  e.preventDefault();

  isLoading = true;
  handleButtonSpinner(
    isLoading,
    loginStudentSubmit,
    loginStudentSpinner,
    loginStudentText,
  );

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // send AJAX request to POST /login
  axios
    .post(
      `/login`,
      {
        username,
        password,
      },
      {
        validateStatus: function (status) {
          // resolve the promise when this condition is true
          return (status >= 200 && status < 300) || status == 401;
        },
      },
    )
    .then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        window.location.pathname = `/`;
      } else {
        loginStudentErrorContainer.innerHTML = response.data;

        isLoading = false;
        handleButtonSpinner(
          isLoading,
          loginStudentSubmit,
          loginStudentSpinner,
          loginStudentText,
        );
      }
    })
    .catch(function (err) {
      console.log(err);

      isLoading = false;
      handleButtonSpinner(
        isLoading,
        loginStudentSubmit,
        loginStudentSpinner,
        loginStudentText,
      );
    });
};
