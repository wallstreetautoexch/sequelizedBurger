console.log("app -- controller1")
var models  = require('../models');
console.log("app controller2")
var express = require('express');
console.log("app controller3")
var router  = express.Router();
console.log("app controller4")
router.get('/', function(req, res) {
  res.redirect('/index');
});
console.log("app controller5")
module.exports = router;
