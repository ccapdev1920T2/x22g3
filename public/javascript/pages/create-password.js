var createPasswordForm = document.getElementById("create-password-form");
var createPasswordSubmit = document.getElementById("create-password-submit");
var createPasswordSpinner = document.getElementById("create-password-spinner");
var createPasswordText = document.getElementById("create-password-text");
var createPasswordFormElements = getFormElements(createPasswordForm);
var splitPathname = window.location.pathname.split("/");

createPasswordForm.onsubmit = function (e) {
  handleButtonSpinner(
    true,
    createPasswordSubmit,
    createPasswordSpinner,
    createPasswordText
  );

  e.preventDefault();

  var body = createRequestBody(createPasswordForm);

  axios
    .post(
      `/register/student/${splitPathname[splitPathname.length - 1]}`,
      body,
      {
        validateStatus: function (status) {
          // resolve the promise when this condition is true
          return (status >= 200 && status < 300) || status == 400;
        },
      }
    )
    .then(function (response) {
      if (response.status == 400) {
        var errors = response.data.errors;

        for (let i = 0; i < createPasswordFormElements.length; i++) {
          var element = createPasswordFormElements[i];
          var errorTextContainer = document.getElementById(
            `${element.id}-error`
          );
          var errorObject = errors.find(function (error) {
            return error.param === element.name;
          });

          if (errorObject) {
            errorTextContainer.innerHTML = errorObject.msg;
            element.classList.add("is-invalid");
            element.classList.remove("is-valid");
          } else {
            errorTextContainer.innerHTML = "";
            element.classList.add("is-valid");
            element.classList.remove("is-invalid");
          }
        }
      } else {
        window.location.pathname = `/login`;
        console.log(response);
      }

      handleButtonSpinner(
        false,
        createPasswordSubmit,
        createPasswordSpinner,
        createPasswordText
      );
    })
    .catch(function (error) {
      console.log(error);

      handleButtonSpinner(
        false,
        createPasswordSubmit,
        createPasswordSpinner,
        createPasswordText
      );
    });
};
