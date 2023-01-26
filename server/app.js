const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

mongoose.set("strictQuery", false);
mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error In MongoDB Connection", err);
});

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
