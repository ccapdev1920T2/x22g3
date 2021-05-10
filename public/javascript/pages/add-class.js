var addIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement("span");
  span.classList.add("material-icons", "btn", "btn-outline-primary");
  span.innerText = "school";
  span.onclick = function (e) {
    console.log("test");
  };
  return span;
};

var addIconTooltip = function (cell) {
  return "Enroll to this class";
};

var courseOfferingsTable = new Tabulator("#course-offerings-table", {
  columns: [
    { title: "Class ID", field: "_id", sorter: "number" },
    { title: "Course Code", field: "courseCode", sorter: "string" },
    { title: "Section", field: "section", sorter: "string" },
    {
      title: "Schedules",
      field: "schedules",
      sorter: "string",
      formatter: "html",
    },
    { title: "Room", field: "room", sorter: "string" },
    { title: "Instructor", field: "instructor", sorter: "string" },
    {
      title: "Action",
      formatter: addIcon,
      tooltip: addIconTooltip,
      headerSort: false,
      hozAlign: "center",
      vertAlign: "middle",
    },
  ],
  layout: "fitColumns",
  pagination: "local",
  paginationSize: 10,
  ajaxURL: "/api/courses",
  ajaxResponse(url, params, response) {
    return response.map((course) => {
      const obj = Object.assign({}, course);
      obj.schedules = obj.schedules.reduce(
        (prev, cur, i, arr) =>
          `${prev}${i > 0 && i < arr.length ? "<br>" : ""}` +
          `${cur.day} ${cur.startTime}-${cur.endTime}`,
        ``
      );

      return obj;
    });
  },
});

var searchCourseOfferings = document.getElementById(
  "search-course-offerings-tf"
);

searchCourseOfferings.oninput = function (e) {
  e.preventDefault();

  courseOfferingsTable.setData(courseOfferingsTable.getAjaxUrl(), {
    courseCode: this.value,
  });
};
