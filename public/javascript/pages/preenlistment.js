var studentId = document.getElementById("student-id-hidden");

var preenlistBtn = function (cell, formatterParams, onRendered) {
  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary");
  btn.innerText = "Pre-enlist";
  btn.onclick = function (e) {
    var rowData = cell.getData();
    var body = {};
    body._id = rowData._id;

    axios
      .post(`/api/students/${studentId.value}/preenlist`, body, {
        validateStatus: function (status) {
          // resolve the promise when this condition is true
          return (status >= 200 && status < 300) || status == 400;
        },
      })
      .then(function (response) {
        if (response.status == 400) {
          alert(
            response.data.errors.map(function (err) {
              return err.msg;
            })
          );
        } else {
          alert(`Successfully preenlisted ${rowData.courseCode}.`);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return btn;
};

var preenlistmentTable = new Tabulator("#preenlistment-courses-table", {
  columns: [
    { title: "Course Code", field: "courseCode", sorter: "string" },
    {
      title: "Action",
      formatter: preenlistBtn,
      headerSort: false,
      vertAlign: "middle",
    },
  ],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: "/api/preenlistment-courses",
});

var searchCoursesForm = document.getElementById("search-course-form");

searchCoursesForm.onsubmit = function (e) {
  e.preventDefault();

  var searchCoursesTextfield = document.getElementById("search-courses-tf");
  preenlistmentTable.setData(
    `/api/preenlistment-courses?courseCode=${searchCoursesTextfield.value}`
  );
};
