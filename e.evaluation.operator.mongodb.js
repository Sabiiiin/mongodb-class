use("esports-imdb");
// find movies whose summary includes "Starling city"
// db.movies.find({summary:{$regex:"Starling city",$options:"i"}})

// db.movies.find({name:{$regex:"Morty",$options:"i"}})

// ?Express
// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);
// db.sales.find({order:{$gt:50}})

// ? order > volume
// db.sales.find({$expr:{$gt:["$order","$volume"]}})

// ? find the movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9or 9.3
// db.movies.find({$or:[{"rating.average":7},
// {"rating.average":7.5},
// {"rating.average":8},
// {"rating.average":8.5},
// {"rating.average":9},
// {"rating.average":9.3}]})
// db.movies.find({"rating.average":{$in:[7, 7.5, 8, 8.5, 9, 9.3]}})

// ?$nin if $nor is applied in same field
// ?find the movies whose genres is neither "Thriller" nor "Crime" nor "Supernatural"
// db.movies.find({$nor:[{genres:"Thriller"},{genres:"Crime"},{genres:"Supernatural"}]})

// db.movies.find({genres:{$nin:["Thriller","Crime","Supernatural"]}})

// db.friends.updateOne(
//   {
//     name: "Unique",
//   },
//   {
//     $set: {
//       name: "Jibana",
//       age: 21,
//       contactNumber: "985132854",
//     },
//   }
// );
// db.movies.find()
// db.movies.deleteOne({id:13})