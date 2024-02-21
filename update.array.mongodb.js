use("esports-imdb");
// db.friends.find();
//?array updates operators
//?$push, $pop, $pull, $pullAll

//?$push = adds new data to end of array
// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Riding"] },
//     },
//   }
// );
// db.friends.find();

//?$addToSet =push value to array if that item is not already there
// db.friends.updateOne(
//     { name: "Jibana" },
//     {
//       $addToSet: {
//         hobbies: { $each: ["Riding", "Playing"] },
//       },
//     }
//   );
// db.friends.find();

