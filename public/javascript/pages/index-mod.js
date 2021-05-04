var requestClassButton = document.getElementById("add-student-modal-btn");
var addStudentForm = document.getElementById("add-student-form");
var addStudentSubmit = document.getElementById("add-student-submit");
var addStudentSpinner = document.getElementById("add-student-spinner");
var addStudentText = document.getElementById("add-student-text");

var addStudentFormElements = getFormElements(addStudentForm);

var collegeSelect = addStudentFormElements.find(function (el) {
  return el.id === "college";
});

axios.get("/api/colleges").then(function (response) {
  var data = response.data;

  collegeSelect.innerHTML = "";
  var span = document.createElement("option");
  span.value = "";
  span.innerText = "Select a college...";
  span.disabled = true;
  collegeSelect.appendChild(span);

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    span = document.createElement("option");
    span.value = element.code;
    span.innerText = `${element.name} (${element.code})`;
    collegeSelect.appendChild(span);
  }
});

var programSelect = addStudentFormElements.find(function (el) {
  return el.id === "program";
});

collegeSelect.onchange = function (e) {
  axios
    .get(`/api/colleges?code=${collegeSelect.value}`)
    .then(function (response) {
      var data = response.data[0].degrees;

      programSelect.innerHTML = "";
      var span = document.createElement("option");
      span.value = "";
      span.innerText = "Select a program...";
      span.disabled = true;
      programSelect.appendChild(span);

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        span = document.createElement("option");
        span.value = element.code;
        span.innerText = `${element.name} (${element.code})`;
        programSelect.appendChild(span);
      }
    });
};

requestClassButton.onclick = function (e) {
  resetFormValidationStyles(addStudentForm);
  resetFormInputs(addStudentForm);
};

addStudentForm.onsubmit = function (e) {
  handleButtonSpinner(
    true,
    addStudentSubmit,
    addStudentSpinner,
    addStudentText
  );
  e.preventDefault();

  var body = createRequestBody(addStudentForm);

  axios
    .post("/api/students", body, {
      validateStatus: function (status) {
        // resolve the promise when this condition is true
        return (status >= 200 && status < 300) || status == 400;
      },
    })
    .then((response) => {
      if (response.status == 400) {
        var errors = response.data.errors;

        for (let i = 0; i < addStudentFormElements.length; i++) {
          var element = addStudentFormElements[i];
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
      }

      handleButtonSpinner(
        false,
        addStudentSubmit,
        addStudentSpinner,
        addStudentText
      );
    })
    .catch((err) => {
      console.log(err);

      handleButtonSpinner(
        false,
        addStudentSubmit,
        addStudentSpinner,
        addStudentText
      );
    });
};

var removeIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement("span");
  span.classList.add("material-icons", "btn", "btn-outline-danger");
  span.innerText = "remove_circle_outline";
  span.onclick = function (e) {
    console.log("test2");
  };
  return span;
};

var removeIconTooltip = function (cell) {
  return "Remove this student";
};

var studentsTable = new Tabulator("#students-table", {
  columns: [
    { title: "ID Number", field: "idNum", sorter: "number" },
    { title: "First Name", field: "first", sorter: "string" },
    { title: "Middle Name", field: "middle", sorter: "string" },
    { title: "Last Name", field: "last", sorter: "string" },
    { title: "College", field: "college", sorter: "string" },
    { title: "Course", field: "course", sorter: "string" },
    { title: "Section", field: "section", sorter: "string" },
    { title: "Status", field: "status", sorter: "string" },
    {
      title: "Graduating",
      field: "graduating",
      formatter: "tickCross",
      sorter: "string",
    },
    {
      title: "Action",
      formatter: removeIcon,
      tooltip: removeIconTooltip,
      headerSort: false,
      hozAlign: "center",
      vertAlign: "middle",
    },
  ],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: "/data/students.json",
  ajaxResponse(url, params, response) {
    return response.map((student) => {
      const {
        name: { first, middle, last },
        ...rest
      } = student;
      rest.first = first;
      rest.middle = middle;
      rest.last = last;

      return rest;
    });
  },
});
