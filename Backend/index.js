const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./routes/taskRoute");
const cors = require('cors')

dotenv.config();
app.use(cors())
// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB connected Successfully and listening to " + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
