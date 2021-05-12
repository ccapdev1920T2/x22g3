var loginModForm = document.getElementById('login-mod-form');
var loginModSubmit = document.getElementById('login-mod-submit');
var loginModSpinner = document.getElementById('login-mod-spinner');
var loginModText = document.getElementById('login-mod-text');
var loginModErrorContainer = document.getElementById(
  'login-mod-error-container',
);

var isLoading = false;

loginModForm.onsubmit = function (e) {
  e.preventDefault();

  isLoading = true;
  handleButtonSpinner(isLoading, loginModSubmit, loginModSpinner, loginModText);

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // send AJAX request to POST /login/mod
  axios
    .post(
      `/login/mod`,
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
        window.location.pathname = `/mod`;
      } else {
        loginModErrorContainer.innerHTML = response.data;

        isLoading = false;
        handleButtonSpinner(
          isLoading,
          loginModSubmit,
          loginModSpinner,
          loginModText,
        );
      }
    })
    .catch(function (err) {
      console.log(err);

      isLoading = false;
      handleButtonSpinner(
        isLoading,
        loginModSubmit,
        loginModSpinner,
        loginModText,
      );
    });
};
