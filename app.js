const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes")
const passportSetup = require("./config/passort-setup");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

const app = express();

//set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))

//initialise passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/oauthusers', { useNewUrlParser: true }, () => {
  console.log("connected to mongodb");
});
var db = mongoose.connection;

//setup routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

//create home route
app.get('/', (req, res) => {
  res.render('home', { user: req.user });
})

app.listen(3000, () => {
  console.log("listening on port 3000!")
})