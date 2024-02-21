use("esports-imdb");
// db.movies.find()
// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);
 
// db.owners.find();
 
// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a4d184288e62a2a29ce4"),
// });
// db.vehicles.find();

//? $lookup
// db.vehicles.aggregate([{
//     $match:{},
// },
// {
//     $lookup:{
//         from:"owners",
//         localField:"ownerId",
//         foreignField:"_id",
//         as:"ownerDetails",
//     },
// },
// {
//     $project:{
//         name:1,
//         brand:1,
//         color:1,
//         cc:1,
//         ownerName:{$first:"$ownerDetails.name"}
//     }
// }
// ])

//  db.courses.insertMany([
//       {
//         name: "MERN",
//         duration: 90,
//       },
//       {
//         name: "Python",
//         duration: 45,
//       },
     
//       {
//         name: "Devops",
//         duration: 65,
//       },
     
//       {
//         name: "AI",
//         duration: 90,
//       },
//       {
//         name: "Flutter",
//         duration: 55,
//       },
//     ]);

// db.students.insertOne({
//     name:"Rina",
//     address:"Kalanki",
//     email:"rina@gmail.com",
//     enrolledCourseIds:[
//         ObjectId("65d5ab265c3e87b984d1572a"),
//         ObjectId("65d5ab265c3e87b984d1572b")
//     ]

// })

// db.students.aggregate([{
//     $match:{}
// },
// {
//     $lookup:{
//         from:"courses",
//         localField:"enrolledCourseIds",
//         foreignField:"_id",
//         as:"courseDetails",
//     },
// },
// {
// $project:{
//     name:1,
//     address:1,
//     email:1,
//     "courseDetails.name":1,
//     "courseDetails.duration":1,
// },
// }
// ])
