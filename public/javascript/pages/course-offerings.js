var courseOfferingsTable = new Tabulator('#course-offerings-table', {
  columns: [
    { title: 'Class No.', field: 'classNo', sorter: 'number' },
    { title: 'Course Code', field: 'courseCode', sorter: 'string' },
    { title: 'Section', field: 'section', sorter: 'string' },
    {
      title: 'Schedules',
      field: 'schedules',
      sorter: 'string',
      formatter: 'html',
    },
    { title: 'Room', field: 'room', sorter: 'string' },
    { title: 'Instructor', field: 'instructor', sorter: 'string' },
    { title: 'Slots', sorter: 'string' },
  ],
  layout: 'fitColumns',
  pagination: 'local',
  paginationSize: 10,
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
      obj.action = `<button class="btn btn-primary py-0">Add to Cart</button>`;

      return obj;
    });
  },
});
