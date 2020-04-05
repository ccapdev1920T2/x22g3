// REQUIRE MODELS AS NEEDED
const mongoose = require("mongoose");
var Course = require("../models/course");

exports.course_create = (req, res) => {
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

// display course offerings page
exports.course_offerings_list = (req, res) => {
    res.render("courseofferings", {
        addedStyles: ["forms"],
        title: "Course Offerings | Animo.sys",
    });
};

exports.course_offerings_search = (req, res) => {
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
