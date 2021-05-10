var dropIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement('span');
  span.classList.add('material-icons', 'btn', 'btn-outline-danger');
  span.innerText = 'delete_outline';
  span.onclick = function (e) {
    console.log('test');
  };
  return span;
};

var dropIconTooltip = function (cell) {
  return 'Drop Class';
};

var dropClassTable = new Tabulator('#enrolled-courses-table', {
  height: 'auto',
  // autoColumns: true,
  // autoColumnsDefinitions: [{ field: 'schedules', formatter: 'html' }],
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
    {
      title: 'Action',
      formatter: dropIcon,
      tooltip: dropIconTooltip,
      headerSort: false,
      hozAlign: 'center',
      vertAlign: 'middle',
    },
  ],
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


