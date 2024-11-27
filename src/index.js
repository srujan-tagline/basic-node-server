const express = require("express");
const connectDB = require("../config/db");
const app = express();
const routes = require("./routes/index");
const scheduleEmail = require("./utils/emailScheduler");
require("dotenv").config();

app.use(express.json());

app.use("/api", routes);

connectDB();

scheduleEmail();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
