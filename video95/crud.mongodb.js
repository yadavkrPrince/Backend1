//crud operation
use("CrudDB")

// create collection and put document in courses database
db.createCollection("courses")

//insert document in database
// db.courses.insertOne({
//     "name": "prince",
//     price:0,
//     assingment:12,
//     projects:45
// })

// let a = db.courses.find({price:0})
//print document by price key jis jis ke pass price 0 hai wo print hoga

// console.log(a)
//count ducument number
// console.log(a.count())
// console.log(a.toArray())

//update
// db.courses.updateOne({price: 0}, {$set:{price: 100}})

//update price of all document 

// db.courses.updateMany({price:0},{$set:{price:1000}})

//delete one 
// db.courses.deleteOne({price:100})

//delete many
db.courses.deleteMany({price:1000})