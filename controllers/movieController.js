var dbService= require("../dbService/dbService");
 exports.getAllMovies = function(req, res, next) {
    
     // Get the documents collection
     var db=dbService.database;
     var moviesCollection = db.collection("movies");
     moviesCollection.find().toArray().then(result=>{
             res.json({
               isSuccess: true,
               data: result
             });
     });
   
 };
 exports.addNewMovie = function(req, res, next) {
      var movie = req.body;
      var db=dbService.database;
      console.log(movie);
      var moviesCollection = db.collection("movies");
      moviesCollection.insert(movie).then(save_data=>{
        return res.json({
          "isSuccess": true
        });
      });
      
  };
  exports.getMovieDetails = function(req, res, next) {
      console.log(req.params.movieName);
      var db=dbService.database;
      var moviesCollection = db.collection("movies");
      moviesCollection.find({ name: req.params.movieName }).toArray().then(result=>{
        if (result.length > 0) {
          res.json({
            isSuccess: true,
            data: result[0]
          });
        } 
      })
  };
