var express = require('express');
var router = express.Router();
var movieController = require('../controllers/movieController');

/* GET users listing. */
var name;
router.get('/getAllMovies', function(req, res, next) {
  
  movieController.getAllMovies(req,res,next);

});

router.post('/addMovie',function(req,res,next){
  var movieDetails = req.body;
  movieController.addMovie(req,res,next);
});
/*
router.get('/getaMovie',function(req,res,next){
  movieController.getaMovie(req,res,next);
});  */
module.exports = router;
 