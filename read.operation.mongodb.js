// use("esports-imdb");
// db.movies.find()

// GT OR LT
// db.movies.find({$and:[{"rating.average":{$gt:3}},{"rating.average":{$gt:5}}]})
 
// weight 96 or runtime is 60
// db.movies.find({$or:[{weight:96},{runtime:60}]})

// find movies whose status is not "Ended"
// db.movies.find({status:{$ne:"Ended"}})

// $nor
// find movies whose Status is neither "Running" nor "English"
// db.movies.find({$nor:[{Status:"Running"},{Status:"English"}]})