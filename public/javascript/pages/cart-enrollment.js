var addIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement('span');
  span.classList.add('material-icons', 'btn', 'btn-outline-danger');
  span.innerText = 'remove_shopping_cart';
  span.onclick = function (e) {
    console.log('test2');
  };
  return span;
};

var addIconTooltip = function (cell) {
  return 'Remove from enrollment cart';
};

var enrollmentCartTable = new Tabulator('#enrollment-cart-table', {
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
    { title: 'Status', field: 'status', sorter: 'string' },
    {
      title: 'Action',
      formatter: addIcon,
      tooltip: addIconTooltip,
      headerSort: false,
      hozAlign: 'center',
      vertAlign: 'middle',
    },
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

      return obj;
    });
  },
});
