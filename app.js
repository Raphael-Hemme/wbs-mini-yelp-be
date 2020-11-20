require("dotenv").config();
const express = require("express");
/* const path = require('path'); */
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const restaurantsRouter = require("./routes/restaurants");
const citiesRouter = require("./routes/cities");
const tagsRouter = require("./routes/tags");
const commentsRouter = require("./routes/comments");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
/* app.use(express.static(path.join(__dirname, 'public')));
 */

app.use("/", indexRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/cities", citiesRouter);
app.use("/tags", tagsRouter);
app.use("/comments", commentsRouter);

module.exports = app;
