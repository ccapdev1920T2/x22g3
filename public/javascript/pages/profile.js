var studentId = document.getElementById("student-id-hidden");

// Logic for toggling tabs

window.location.hash = "#personal-information";

var listGroupItems = document.querySelector(".list-group").children;

var containers = document.querySelectorAll("div.list-group-target");

window.onhashchange = setActive;

function setActive(e) {
  var hash = window.location.hash;
  for (let i = 0; i < listGroupItems.length; i++) {
    var item = listGroupItems.item(i);
    var container = containers.item(i);

    var force = hash === item.hash;
    item.classList.toggle("active", force);
    container.classList.toggle("d-none", !force);
  }
}

// calendar

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("weekly-schedule");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    events: [{ title: "the title", start: "2021-09-01", end: "2021-09-01" }],
    stickyHeaderDates: false,
    allDaySlot: false,
    height: "auto",
    themeSystem: "bootstrap",
  });
  calendar.render();
});

// tabulator

// var table = new Tabulator("#tabular-schedule", {
//   data: sample,
//   autoColumns: true,
//   layout: "fitColumns",
//   pagination: "local",
//   paginationSize: 10,
// });

var table = new Tabulator("#tabular-schedule", {
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
  ],
  layout: "fitColumns",
  ajaxURL: `/api/students/${studentId.value}/courses`,
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
