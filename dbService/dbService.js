var MongoClient = require('mongodb').MongoClient;

module.exports = {
    createConnection : function(){
        MongoClient.connect("mongodb://localhost:27017",function(err,client){
            console.log("connected to database");
        module.exports.database = client.db('projector');
        }); 
    }
}