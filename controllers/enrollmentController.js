var Student = require("../models/student");
var Course = require("../models/course");
var Request = require("../models/request");

// Landing page for /enrollment route
exports.enrollment_landing_page_get = (req, res) => {
    res.render("enrollment", {
        route: "enrollment",
        title: "Enrollment | Animo.sys",
        addedStyles: ["enrollment-styles"],
    });
};

// WILL DELETE
exports.course_create_sample_get = (req, res) => {
    // SAMPLE DATA THAT FOLLOWS COURSE MODEL
    var courses = [
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "CSARCH1",
            section: "X22",
            days: ["M", "W"],
            time: { start: "0915", end: "1045" },
            faculty: "PERADILLA, M.",
            room: "GT201",
            enlCap: 15,
            enrolled: 10,
        },
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "GEETHIC",
            section: "X22",
            days: ["M", "W"],
            time: { start: "1245", end: "1415" },
            faculty: "PERADILLA, M.",
            room: "GT203",
            enlCap: 31,
            enrolled: 31,
        },
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "STMATH",
            section: "X22",
            days: ["T", "H"],
            time: { start: "0730", end: "0900" },
            faculty: "PERADILLA, M.",
            room: "GT203",
            enlCap: 25,
            enrolled: 25,
        },
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "STALGCM",
            section: "X22",
            days: ["T", "H"],
            time: { start: "0915", end: "1045" },
            faculty: "PERADILLA, M.",
            room: "GT206",
            enlCap: 15,
            enrolled: 12,
        },
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "CCAPDEV",
            section: "X22",
            days: ["T", "H"],
            time: { start: "1100", end: "1230" },
            faculty: "PERADILLA, M.",
            room: "MRELBA",
            enlCap: 17,
            enrolled: 15,
        },
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "GESPORT",
            section: "X22",
            days: ["T"],
            time: { start: "1300", end: "1500" },
            faculty: "PERADILLA, M.",
            room: "CVDCRT",
            enlCap: 40,
            enrolled: 38,
        },
        {
            _id: new mongoose.Types.ObjectId(),
            courseCode: "NATLANG",
            isElective: true,
            section: "X22",
            days: ["F"],
            time: { start: "1615", end: "1745" },
            faculty: "",
            room: "",
            enlCap: 20,
            enrolled: 16,
        },
    ];

    // create documents
    var docs = [];
    for (let course of courses) {
        docs.push(new Course(course));
    }

    console.log(docs);

    Course.create(docs);
};

// Display class schedule for one student
exports.enrollment_class_schedule_get = (req, res) => {
    console.log("TODO: get data from Student");
    res.render("classschedule", {
        title: "Class Schedule | Animo.sys",
    });
};

// Add a Class
exports.enrollment_add_class_get = (req, res) => {
    console.log(
        "TODO: get data from Student, EnrolledCourses, and Course (to view available courses)"
    );
    res.render("addclass", {
        title: "Add a Class | Animo.sys",
        addedStyles: ["forms"],
    });
};

// Drop a Class
exports.enrollment_drop_class_get = (req, res) => {
    res.render("dropclass", {
        title: "Drop a Class | Animo.sys",
    });
};

// Display list of dropped classes
exports.enrollment_dropclass_list_get = (req, res) => {
    res.render("dropclass_list", {
        title: "List of Dropped Classes | Animo.sys",
        addedStyles: ["forms"],
    });
};

// Get Request a Class landing page
exports.enrollment_request_class_get = (req, res) => {
    res.render("requestclass", {
        title: "Request a Class | Animo.sys",
        addedStyles: ["forms"],
    });
};

// Post form data from /enrollment/requestclass
exports.enrollment_request_class_post = (req, res) => {
    console.log(
        "TODO: create a new Request then update the Request collection"
    );
    res.render("requestclass", {
        title: "Request a Class | Animo.sys",
        addedStyles: ["sessions", "forms"],
    });
};

// display course offerings page
exports.enrollment_course_offerings_list_get = (req, res) => {
    res.render("courseofferings", {
        addedStyles: ["forms"],
        title: "Course Offerings | Animo.sys",
    });
};

exports.enrollment_course_offerings_search_get = (req, res) => {
    console.log("TODO: get data from Course");

    var q = req.query.q;
    var regex = new RegExp(q);

    console.log(regex);

    var data = [];

    Course.find({ courseCode: regex }, "-_id -__v")
        .exec()
        .then((courses) => {
            data = courses;
            res.send(data);
        })
        .catch((err) => console.log(err));
};
