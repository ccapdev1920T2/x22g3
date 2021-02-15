Promise.all([
  axios.get('/data/courses.json'),
  axios.get('/data/term-details.json'),
])
  .then(response => {
    var courses = response[0].data;
    var testTerm = response[1].data.find(
      el => el.academicYear === '2020-2021' && el.term === 1,
    );

    var calendarEl = document.getElementById('enrollment-calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      events: toEvent(courses, testTerm),
      slotMinTime: getEarliestStartTime(courses),
      slotMaxTime: getLatestEndTime(courses),
      initialDate: testTerm.startDate,
      stickyHeaderDates: false,
      allDaySlot: false,
      height: 'auto',
      themeSystem: 'bootstrap',
    });

    calendar.render();
  })
  .catch(err => console.log(err));

var table = new Tabulator('#enrolled-courses-table', {
  autoColumns: true,
  autoColumnsDefinitions: [{ field: 'schedules', formatter: 'html' }],
  layout: 'fitColumns',
  ajaxURL: '/data/courses.json',
  ajaxResponse(url, params, response) {
    return response.map(course => {
      const obj = Object.assign({}, course);
      obj.schedules = obj.schedules.reduce(
        (prev, cur, i, arr) =>
          `${prev}${i > 0 && i < arr.length ? '<br>' : ''}` +
          `${cur.day} ${cur.startTime}-${cur.endTime}`,
        ``,
      );

      return obj;
    });
  },
});
