var table = new Tabulator("#preenlisted-courses-table", {
  autoColumns: true,
  autoColumnsDefinitions: [{ field: "courseCode", formatter: "html" }],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: "/data/preenlistment-courses.json", // TODO: change this to get student's preenlisted courses from db
  ajaxResponse(url, params, response) {
    return response.map((course) => {
      return {
        courseCode: `${course.courseCode}<button class="btn btn-danger py-0 float-right">Remove</button>`,
      };
    });
  },
});

// TODO: use axios to save changes in student's preenlisted courses
