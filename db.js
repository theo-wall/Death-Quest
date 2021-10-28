const MongoClient = require('mongodb').MongoClient
const dbUrl = "mongodb://localhost:27017/"

let connectMongoClient = MongoClient.connect(dbUrl)

let getDb = connectMongoClient.then((client) => {
  return client.db("c7LearningMongo")
})

function getCollection(name) {
  return getDb.then((db) => db.collection(name))
}

module.exports = {
  getCollection,
}