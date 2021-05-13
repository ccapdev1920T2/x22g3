var requestClassForm = document.getElementById("request-class-form");
var requestClassButton = document.getElementById("request-class-btn");

var requestClassElements = getFormElements(requestClassForm);

requestClassButton.onclick = function (e) {
  e.preventDefault();

  var body = createRequestBody(requestClassForm);

  axios
    .post("/api/subject-requests/new", body, {
      validateStatus: function (status) {
        // resolve the promise when this condition is true
        return (status >= 200 && status < 300) || status == 400;
      },
    })
    .then(function (response) {
      if (response.status == 400) {
        var errors = response.data.errors;

        for (let i = 0; i < requestClassElements.length; i++) {
          var element = requestClassElements[i];
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
        alert("Succesful request!");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};
