var courses = [
    {
        courseCode: "CCAPDEV",
        start: "1100",
        end: "1230",
        days: ["T", "H"],
    },
    {
        courseCode: "CSARCH1",
        start: "0915",
        end: "1045",
        days: ["M", "W"],
    },
    {
        courseCode: "STALGCM",
        start: "0915",
        end: "1045",
        days: ["T", "H"],
    },
    {
        courseCode: "STMATH",
        start: "0730",
        end: "0900",
        days: ["T", "H"],
    },
    {
        courseCode: "GESPORT",
        start: "1300",
        end: "1500",
        days: ["T"],
    },
    {
        courseCode: "GEETHIC",
        start: "1245",
        end: "1515",
        days: ["M", "W"],
    },
    {
        courseCode: "LCLSTWO",
        start: "0800",
        end: "1000",
        days: ["F"],
    },
];

var earliest = courses.map((course) => course.start).sort((a, b) => a - b)[0];
var latest = courses.map((course) => course.end).sort((a, b) => b - a)[0];

function generateScheduleStyle() {
    var style = document.createElement("style");
    var rows = "";
    for (let i = Number(earliest); i < Number(latest); i += 15) {
        if (i % 100 === 60) i += 40;
        var time = i < 1000 ? "0" + i.toString() : i.toString();
        rows += `\n[time-${time}] 1fr`;
    }

    var css = `.schedule {
        display: grid;
        grid-column-gap: 2px;
        grid-template-rows: [tracks] auto${rows};
        grid-template-columns:
            [times] 4em
            [day-1-start] 1fr
            [day-1-end day-2-start] 1fr
            [day-2-end day-3-start] 1fr
            [day-3-end day-4-start] 1fr
            [day-4-end day-5-start] 1fr
            [day-5-end];
    }`;

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

// pass an array of colors to randomly choose from
function generateRandomColor(colors = []) {
    var courseMap = courses.map((val) => val.courseCode);
    for (let course of courseMap) {
        var blocks = document.querySelectorAll(`div.course.${course}`);
        var i = Math.floor(Math.random() * colors.length);
        console.log(`div.course.${course}`);

        for (let block of blocks) {
            block.style.backgroundColor = colors[i];
        }
    }
}

function constructCalendar() {
    var schedule = document.querySelector("div.schedule");
    // Construct day columns
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    for (let i = 0; i < days.length; i++) {
        schedule.innerHTML += `<span class="day-slot" aria-hidden="true" style="grid-column: day-${
            i + 1
        }; grid-row: tracks;">${days[i]}</span>`;
    }

    // Construct time rows
    for (let i = Number(earliest); i < Number(latest); i += 30) {
        if (i % 100 === 60) i += 40;
        var time = i < 1000 ? "0" + i.toString() : i.toString();

        schedule.innerHTML += `<p class="time-slot" style="grid-row: time-${time};">${time}</p>`;
    }
}

function plotClasses() {
    const schedule = document.querySelector("div.schedule");
    // for each course, check days
    for (let i = 0; i < courses.length; i++) {
        // map days to corresponding number
        var day = courses[i].days.map((val) => {
            switch (val) {
                case "M":
                    return "1";
                case "T":
                    return "2";
                case "W":
                    return "3";
                case "H":
                    return "4";
                case "F":
                    return "5";
                default:
                    break;
            }
        });

        // for each day, create class block
        for (let j = 0; j < day.length; j++) {
            var block = `<div class='course ${courses[i].courseCode}' style='grid-column: day-${day[j]};
            grid-row: time-${courses[i].start} / time-${courses[i].end};'>`;
            block += `<h3 class='session-title'>${courses[i].courseCode}</h3>`;
            block += `<span class='session-time'>${courses[i].start}-${courses[i].end}</span>`;
            block += `</div>`;

            // add to schedule container
            schedule.innerHTML += block;
        }
    }
}


