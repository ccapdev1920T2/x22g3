var addIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement('span');
  span.classList.add('material-icons', 'btn', 'btn-outline-primary');
  span.innerText = 'add_shopping_cart';
  span.onclick = function (e) {
    console.log('test');
  };
  return span;
};

var addIconTooltip = function (cell) {
  return 'Add to enrollment cart';
};

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
    {
      title: 'Action',
      formatter: addIcon,
      tooltip: addIconTooltip,
      headerSort: false,
      hozAlign: 'center',
      vertAlign: 'middle',
    },
    // { title: 'Action', field: 'action', formatter: 'html', headerSort: false },
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
