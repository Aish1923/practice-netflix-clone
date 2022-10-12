const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("../api/routes/auth");
const userRoute =require("../api/routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");
var cors = require('cors')
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });
app.use(express.json());
app.use(cors()) 

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movie",movieRoute);
app.use("/api/list",listRoute);
app.listen(8080, () => {
  console.log("Backend server is running!");
});
