require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");


const corsOptions ={
  origin:'*', 
  credentials:true,            // access-control-allow-credentials:true
  optionSuccessStatus:200
}
connectDB();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api",require("./routes/userRoutes"));
app.use("/api",require("./routes/courseRoute"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/private", require("./routes/private"));
app.use("/api",require("./routes/quizRoutes"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
