var table = new Tabulator('#enrolled-courses-table', {
  height: 'auto',
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
