const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");
const tweetRoute = require("./routes/tweetRoute.js");
const cookieParser = require("cookie-parser");
const cors = require('cors');

dotenv.config();

const app = express();



mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => console.log("Error connecting DB", err));

//Middlewares
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
app.use(cookieParser());

app.use(cors());



// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute)

const PORT = 10000
app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
})