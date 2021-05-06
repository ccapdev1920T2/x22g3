var preenlistmentTable = new Tabulator("#preenlistment-courses-table", {
  autoColumns: true,
  autoColumnsDefinitions: [{ field: "courseCode", formatter: "html" }],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: "/api/preenlistment-courses",
  ajaxResponse(url, params, response) {
    return response.map((course) => {
      return {
        courseCode: `${course.courseCode}<button class="btn btn-primary py-0 float-right">Pre-enlist</button>`,
      };
    });
  },
});

var searchCoursesForm = document.getElementById("search-course-form");

searchCoursesForm.onsubmit = function (e) {
  e.preventDefault();

  var searchCoursesTextfield = document.getElementById("search-courses-tf");
  preenlistmentTable.setData(
    `/api/preenlistment-courses?courseCode=${searchCoursesTextfield.value}`
  );
};
