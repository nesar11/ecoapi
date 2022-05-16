const express=require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const config = require("./config/DB")
const userroutes = require("./routes/userRoutes")
const authRouters = require("./routes/authRouters")
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

app.use(cors());
app.use(express.json());
// app.use("/users", userroutes)
app.use("/auth", authRouters)
app.use("/users", userroutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})