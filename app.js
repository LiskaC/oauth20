const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passort-setup");
const mongoose = require("mongoose");

const app = express();

//set up view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/oauthusers', { useNewUrlParser: true }, () => {
  console.log("connected to mongodb");
});
var db = mongoose.connection;

//setup routes
app.use("/auth", authRoutes);

//create home route
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3000, () => {
  console.log("listening on port 3000!")
})