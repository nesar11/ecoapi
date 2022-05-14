const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();

app.get('/,', function(req, res) {
    res.send('hellow from server')
})


app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})