// use("esports-imdb");
// db.friends.updateOne(
//   {
//     name: "Nischal",
//   },
//   {
//     $set: {
//       name: "Suvechha",
//       age: 20,
//       contactNumber: "9865321478",
//       isNepali: true,
//     },
//   }
// );
// db.friends.find()

// //?$inc= increase value by given number
// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

//? decrease age of Jibana by 45
// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $inc: {
//       age: -45,
//     },
//   }
// );
// db.friends.find()
// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

//?$mul= multiples field by provided value
// db.friends.updateMany(
//       {},
//       {
//         $mul: {
//           age: 2,
//         },
//       }
//     );
// db.friends.find()

//?$
// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );
