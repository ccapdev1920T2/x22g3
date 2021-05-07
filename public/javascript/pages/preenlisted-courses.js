var studentId = document.getElementById("student-id-hidden");

var removeBtn = function (cell, formatterParams, onRendered) {
  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger");
  btn.innerText = "Remove";
  btn.onclick = function (e) {
    var rowData = cell.getData();
    var body = {};
    body._id = rowData._id;

    axios
      .post(`/api/students/${studentId.value}/preenlisted-courses`, body, {
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
          alert(
            `Successfully removed preenlistment for ${rowData.courseCode}.`
          );
          preenlistedCoursesTable.setData();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return btn;
};

var preenlistedCoursesTable = new Tabulator("#preenlisted-courses-table", {
  columns: [
    { title: "Course Code", field: "courseCode", sorter: "string" },
    {
      title: "Action",
      formatter: removeBtn,
      headerSort: false,
      vertAlign: "middle",
    },
  ],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: `/api/students/${studentId.value}/preenlisted-courses`,
});
