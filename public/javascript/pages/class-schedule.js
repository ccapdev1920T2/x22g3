var studentId = document.getElementById("student-id-hidden");

Promise.all([
  axios.get(`/api/students/${studentId.value}/courses`),
  axios.get("/api/term-details"),
])
  .then(function (response) {
    var courses = response[0].data;
    var testTerm = response[1].data.find(
      (el) => el._id === courses[0].termOffered
    );

    var calendarEl = document.getElementById("enrollment-calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "timeGridWeek",
      events: toEvent(courses, testTerm),
      slotMinTime: getEarliestStartTime(courses),
      slotMaxTime: getLatestEndTime(courses),
      initialDate: testTerm.startDate,
      stickyHeaderDates: false,
      allDaySlot: false,
      height: "auto",
      themeSystem: "bootstrap",
    });

    calendar.render();
  })
  .catch((err) => console.log(err));

var table = new Tabulator("#enrolled-courses-table", {
  // autoColumns: true,
  // autoColumnsDefinitions: [{ field: "schedules", formatter: "html" }],
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
