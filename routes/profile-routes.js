const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if not logged in
    res.redirect("/auth/login");
  } else {
    //if is logged in, continue
    next();
  }
}

router.get('/', authCheck, (req, res) => {
  res.render('profile', { user: req.user });
})

module.exports = router;