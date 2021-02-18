var loginModForm = document.getElementById('login-mod-form');
var loginModErrorContainer = document.getElementById(
  'login-mod-error-container',
);

loginModForm.onsubmit = function (e) {
  e.preventDefault();

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
      if (response.status >= 200 && response.status < 300)
        window.location.pathname = `/mod`;
      else {
        loginModErrorContainer.innerHTML = response.data;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};
