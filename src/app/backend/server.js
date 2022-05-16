// required dependencies
const cors = require('cors');
const mongo = require('mongodb');
const express = require('express');
const {ObjectId} = require("mongodb");

// connect to mongodb
const url = "mongodb://localhost:27017";
const dbName = "demo-db";
const vehicleCollectionName = "vehicles";
const MongoClient = mongo.MongoClient;
const mongoClient = new MongoClient(url);

// connect to express
const app = express();
app.use(cors());

// get all vehicle data
app.get('/getAllVehicles', function (req, res) {
  mongoClient.connect(function (err, client) {
    const db = client.db(dbName);
    db.collection(vehicleCollectionName)
      .find()
      .toArray(function (err, items) {
        if (err) throw err;
        res.send(items);
      });
  })
})

// delete a vehicle
app.post('/deleteVehicle', function (req, res) {
  mongoClient.connect(function (err, client) {
    const db = client.db(dbName);
    const query = { _id: ObjectId(req.query.id) };
    db.collection(vehicleCollectionName).deleteOne(query).
    then(result => {
      console.log(result);
      res.send(result);
    });
  });
})

// set up server
module.exports = app;
app.listen(3000, () =>
  console.log('Listening on port 3000'));
