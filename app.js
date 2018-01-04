var mongo = require('mongodb').MongoClient;
var prompt = require ("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
   
    // var allChoice = prompt("Type all and press enter to display all the restaurants: ");
    // if (allChoice == "all"){}
   
    
    // db.restaurants.address.insert
    // db.restaurants.yelp.insert
  
    var collection = db.collection('restaurants');
    var newName = prompt('Enter name information ')
    var newAddress = prompt('Enter new Address information')
    var newStreet = prompt('Enter new Street information ')
    var newZip = prompt('Enter new Zip information ')
    var newYelp = prompt('Enter new Yelp information ')
    collection.insert(
        {name: newName,
        address: {
            street: newStreet, 
            zipcode: newZip,
        },
        yelp: newYelp}
        

)});




    // var findOne = prompt('Enter a restaurant name to see more info');
    // collection.find({name: findOne}).forEach(function(doc){
    //         console.log(doc);
    //     });
    // });

   
    // } else {
    //     console.log("aw, you dont like foods?")};