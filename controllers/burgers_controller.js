console.log("----------------------------------------burger contoller 1")
var models  = require('../models');
var express = require('express');
var router  = express.Router();

//app.get 
router.get('/', function(req, res) {
  alert("Crappo")
  console.log("----------------------------------------burger contoller 2")
  models.Burger.findAll({
  }).then(function(burgers) {
    //res.send(you can send the html file)
    alert("Crappo")
    // res.render('burgers/index', {burgers: burgers})
    //what should go here instead of res.send(burgers)
  });
});
router.get('/create', function(req, res){
  console.log("----------------------------------------burger contoller 3")
  res.send('hi')
})

router.post('/', function(req, res) {
  console.log(req);
  console.log("----------------------------------------burger contoller 4")

  models.Burger.create({
    burger_name: req.body.name,
    devoured: req.body.devoured
  }).then(function() {
    res.redirect('/');
  });
});

router.post("/:id", function(req, res) {
  console.log("----------------------------------------burger contoller 5")
  models.Burger.update({
    devoured: req.body.devoured
  },
  {
    where: {id : req.params.id}
  }).then(function(){
    // This may need to have a . in front of the / to append the politicians route to the root route.
    res.redirect('/')
  })
});
console.log("----------------------------------------burger contoller 6")
module.exports = router;
