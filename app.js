const express = require("express");
const cors = require("cors");
const setupContactRoutes = require("./app/routes/contact.routes");

const app = express();
const { BadRequestError, errorHandler } = require("./app/errors");

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

setupContactRoutes(app);

app.use((req,res,next) =>{
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req,res,next) => {
    errorHandler.handleError(error, res);
});
module.exports = app;
