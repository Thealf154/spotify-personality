//Load dependencies
const express = require("express");
const app = express();
//Middleware
const index = require("./middleware/index");
//Routes
const getAuthorization = require("./routes/getAuthorization");
const getUsersTop = require("./routes/getUsersTop");

app.use(express.json());
app.use(express.urlencoded({ encoded: true }));

//Import routes
app.use("/auth", getAuthorization);
app.use("/getUsersTop", getUsersTop);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
