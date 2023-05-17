const express = require("express");

const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

//connects to database
connectDb();

const app = express();

const port = process.env.PORT || 5000;

//middleware that provides a parser that
//will parse the data from the client to the server side
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server running on the port " + port);
});