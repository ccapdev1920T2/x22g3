var removeIcon = function (cell, formatterParams, onRendered) {
  var span = document.createElement('span');
  span.classList.add('material-icons', 'btn', 'btn-outline-danger');
  span.innerText = 'remove_circle_outline';
  span.onclick = function (e) {
    console.log('test2');
  };
  return span;
};

var removeIconTooltip = function (cell) {
  return 'Remove this student';
};

var studentsTable = new Tabulator('#students-table', {
  columns: [
    { title: 'ID Number', field: 'idNum', sorter: 'number' },
    { title: 'First Name', field: 'first', sorter: 'string' },
    { title: 'Middle Name', field: 'middle', sorter: 'string' },
    { title: 'Last Name', field: 'last', sorter: 'string' },
    { title: 'College', field: 'college', sorter: 'string' },
    { title: 'Course', field: 'course', sorter: 'string' },
    { title: 'Section', field: 'section', sorter: 'string' },
    { title: 'Status', field: 'status', sorter: 'string' },
    {
      title: 'Graduating',
      field: 'graduating',
      formatter: 'tickCross',
      sorter: 'string',
    },
    {
      title: 'Action',
      formatter: removeIcon,
      tooltip: removeIconTooltip,
      headerSort: false,
      hozAlign: 'center',
      vertAlign: 'middle',
    },
  ],
  layout: 'fitColumns',
  pagination: 'local',
  paginationSize: 10,
  ajaxURL: '/data/students.json',
  ajaxResponse(url, params, response) {
    return response.map(student => {
      const {
        name: { first, middle, last },
        ...rest
      } = student;
      rest.first = first;
      rest.middle = middle;
      rest.last = last;

      return rest;
    });
  },
});
