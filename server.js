require("dotenv").config();

var port = process.env.PORT || 8080;
var express = require("express");
var app = express();
const path = require("path");
const favicon = require("serve-favicon");

require("./config/hbs-config")(app);

const connectDb = require("./config/db-config");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");

connectDb();

app.use(
  session({
    secret: "FeelsSadCat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// serve static files
app.use(express.static("public"));
app.use("/data", express.static("data"));

// parse both urlencoded and application/json content types
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport
require("./config/passport-config")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Routes
var indexRoute = require("./routes/index");
var cartRoute = require("./routes/cart");
var profileRoute = require("./routes/profile");
var preenlistmentRoute = require("./routes/preenlistment");
var enrollmentRoute = require("./routes/enrollment");
var degreeprocessRoute = require("./routes/degree-process");
var modRoute = require("./routes/mod");
var loginRoute = require("./routes/login");
var logoutRoute = require("./routes/logout");
var registerRoute = require("./routes/register");

app.use(favicon(path.join(__dirname, "public", "assets", "favicon.ico")));
app.use("/", indexRoute);
app.use("/home", indexRoute);
app.use("/cart", cartRoute);
app.use("/profile", profileRoute);
app.use("/preenlistment", preenlistmentRoute);
app.use("/enrollment", enrollmentRoute);
app.use("/degree-process", degreeprocessRoute);
app.use("/mod", modRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/register", registerRoute);

// API ROUTES
app.use("/api/students", require("./routes/api/studentApi"));
app.use("/api/colleges", require("./routes/api/collegeApi"));
app.use("/api/preenlistment-courses", require("./routes/api/preenlistmentApi"));
app.use("/api/document-requests", require("./routes/api/documentApi"));
app.use("/api/subject-requests", require("./routes/api/studentrequestApi"));

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
