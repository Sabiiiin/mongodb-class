// use ("daraz") //database
//CRUD
// create => add
// insertone, insertmany
// db.product.insertOne({
//   name: "Bottle",
//   brand: "Serve well",
//   price: 700,
// });
// db.product.find();

// db.product.insertOne({
//     name:"noodle",
//     brand:"Wai Wai",
//     price:30
// })

// db.product.find();
// db.product.insertMany([
//     {name:"Shampoo", brand:"Sunsilk",price:700},
//     {name:"Hair oil",brand:"Dabur Amala",price:500}
// ])
// db.product.find();

// db.customer.insertOne({
//     name:"Sandesh",
//     address:"Kapan",
//     email:"sandesh@gmail.com",
// })
// db.customer.find();

// # READ OPERATION
// db.product.findOne({
//   price: 700,
// });
// db.product.findOne({
//   brand: "Wai Wai",
// });
// db.product.find({
//   price: 700,
// });

// #delete
// deleteOne or deleteMany
// db.product.find(

// )
// db.product.deleteOne({name:"Shampoo"})
// db.product.find()

// db.product.deleteMany({price:700})
// db.product.find()

// #UPDATE
// db.product.updateOne(
//      {   name:"Hair oil"},
//      {
//         $set:{
//             price:1000,
//             brand:"Parachute"

//         }
//      }
// )
// db.product.find();

// db.product.insertOne({
//     name:"Hair oil",
//     brand:"",
//     price:800
// })
    // db.product.find()
    // db.product.find("name:Hair oil")