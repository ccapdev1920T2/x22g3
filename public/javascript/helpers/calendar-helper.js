// returns the parseable FullCalendar events of a given course array and its termDetails
// TODO: change params function when db is implemented
function toEvent(coursesArr, termDetails) {
  return normalizeCourses(coursesArr).map(course => {
    return {
      title: course.courseCode,
      start: termDetails.startDate,
      end: termDetails.endDate,
      daysOfWeek: [mapDay(course.schedule.day)],
      startTime: course.schedule.startTime,
      endTime: course.schedule.endTime,
      startRecur: termDetails.startDate,
      endRecur: termDetails.endDate,
    };
  });
}

function normalizeCourses(coursesArr) {
  // normalize
  const normalized = [];

  coursesArr.forEach(course => {
    const { schedules, ...rest } = course;

    schedules.forEach(schedule => {
      const obj = { schedule, ...rest };
      normalized.push(obj);
    });
  });

  return normalized;
}

function mapDay(dayChar) {
  switch (dayChar) {
    case 'M':
      return 1;
    case 'T':
      return 2;
    case 'W':
      return 3;
    case 'H':
      return 4;
    case 'F':
      return 5;
    case 'S':
      return 6;
    default:
      return 0;
  }
}

function getEarliestStartTime(coursesArr) {
  return normalizeCourses(coursesArr).sort((a, b) =>
    a.schedule.startTime.localeCompare(b.schedule.startTime),
  )[0].schedule.startTime;
}

function getLatestEndTime(coursesArr) {
  return normalizeCourses(coursesArr).sort((a, b) =>
    b.schedule.endTime.localeCompare(a.schedule.endTime),
  )[0].schedule.endTime;
}
