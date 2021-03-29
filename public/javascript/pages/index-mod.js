var addStudentButton = document.getElementById("add-student-modal-btn");
var addStudentForm = document.getElementById("add-student-form");
var addStudentSubmit = document.getElementById("add-student-submit");
var addStudentSpinner = document.getElementById("add-student-spinner");
var addStudentText = document.getElementById("add-student-text");
var addStudentModal = document.getElementById("add-student-modal");
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

var degreeSelect = addStudentFormElements.find(function (el) {
  return el.id === "degree";
});

collegeSelect.onchange = function (e) {
  axios
    .get(`/api/colleges?code=${collegeSelect.value}`)
    .then(function (response) {
      var data = response.data[0].degrees;

      degreeSelect.innerHTML = "";
      var span = document.createElement("option");
      span.value = "";
      span.innerText = "Select a degree...";
      span.disabled = true;
      degreeSelect.appendChild(span);

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        span = document.createElement("option");
        span.value = element.code;
        span.innerText = `${element.name} (${element.code})`;
        degreeSelect.appendChild(span);
      }
    });
};

addStudentButton.onclick = function (e) {
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
      } else {
        addStudentModal.click();
        alert("Student created.");
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
    var rowData = cell.getData();

    axios
      .post(`/api/students/${rowData._id}/disable-access`, {})
      .then(function (response) {
        studentsTable.setData();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return span;
};

var removeIconTooltip = function (cell) {
  return "Disable student access";
};

var addIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement("span");
  span.classList.add("material-icons", "btn", "btn-outline-primary");
  span.innerText = "add_circle_outline";
  span.onclick = function (e) {
    var rowData = cell.getData();

    axios
      .post(`/api/students/${rowData._id}/enable-access`, {})
      .then(function (response) {
        studentsTable.setData();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return span;
};

var addIconTooltip = function (cell) {
  return "Allow student access";
};

var chooseFormatter = function (cell, formatterParams, onRendered) {
  var span = cell.getData().hasAccess
    ? removeIcon(cell, formatterParams, onRendered)
    : addIcon(cell, formatterParams, onRendered);

  return span;
};

var chooseTooltip = function (cell) {
  return cell.getData().hasAccess
    ? removeIconTooltip(cell)
    : addIconTooltip(cell);
};

var studentsTable = new Tabulator("#students-table", {
  reactiveData: true,
  columns: [
    { title: "ID Number", field: "idNum", sorter: "number" },
    { title: "First Name", field: "first", sorter: "string" },
    { title: "Middle Name", field: "middle", sorter: "string" },
    { title: "Last Name", field: "last", sorter: "string" },
    { title: "College", field: "college", sorter: "string" },
    { title: "Degree", field: "degree", sorter: "string" },
    { title: "Section", field: "section", sorter: "string" },
    {
      title: "Graduating",
      field: "graduating",
      formatter: "tickCross",
      sorter: "string",
    },
    {
      title: "Action",
      formatter: chooseFormatter,
      tooltip: chooseTooltip,
      headerSort: false,
      hozAlign: "center",
      vertAlign: "middle",
    },
  ],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: "/api/students",
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
