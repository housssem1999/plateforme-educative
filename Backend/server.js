require('dotenv').config({path:'./config.env'});
const express = require('express');
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})  ;