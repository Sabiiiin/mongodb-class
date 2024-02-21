// USE ("Netflix")
// add a new movie to movie table
// db.movie.insertOne({
//     name:"Cast away",
//     leadActor:"Tom Hanks",
//     releasedYear: 2002,
//     length:120
// })
// db.movie.find()
// db.movie.insertOne({
//         name:"Batman",
//         leadActor:"Christian Bale",
//         releasedYear: 2000,
//         length:90
//     })
// db.movie.find()

// db.movie.insertMany([
//   {
//     name: "Chhaka Panja",
//     leadActor: "Dipak Raj Giri",
//     releasedYear: 2017,
//     length: 180,
//   },
//   {
//     name: "12th fail",
//     LeadActor: "Vikrant Massey",
//     releasedYear: 2023,
//     length: 90,
//   },
// ]);
// db.movie.find()

// db.movie.find({length:90})
// db.movie.find({LeadActor:"Vikrant Massey" })
//  db.movie.updateOne({
//     name:"Chhaka Panja"},
//     {
//         $set:{
//             releasedYear:2020,
//         }

//     }


//  )
// db.movie.find(

// )

// db.movie.updateOne({name:"Batman"},
// {
//    $set: {
// name:"Batman Returns",
// }})
// db.movie.find(
// )
// db.movie.updateMany({name:"Cast away"},{
//     $set:{
//         length:90,
//         releasedYear:"2000",
//     }})
// db.movie.findOne({name:"Cast away"})
// db.movie.updateMany({length:90},
//     {$set:
//     {
//         length:105
//     }})
// db.movie.find({length:105})

// db.movie.deleteOne({leadActor:"Dipak Raj Giri"})
// db.movie.find()
