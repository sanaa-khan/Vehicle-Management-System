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

// add a vehicle
app.post('/addVehicle', function (req, res) {
  const vehicle = JSON.parse(req.query.vehicle);
  mongoClient.connect(function (err, client) {
    const db = client.db(dbName);
    db.collection(vehicleCollectionName).insertOne(vehicle).
    then(result => {
      console.log(result);
      res.send(result);
    });
  });
})

// update vehicle
app.post('/updateVehicle', function (req, res) {

  const toUpdate = JSON.parse(req.query.toupdate);
  const attribute = toUpdate.attribute;
  const value = toUpdate.value;


  mongoClient.connect(function (err, client) {
    const db = client.db(dbName);

    db.collection(vehicleCollectionName).updateOne(
      { _id: ObjectId(req.query.id) },
      { $set: { [attribute]: value } },
      function (err, result) {
        if (err) throw err;
        console.log("Document Updated Successfully");
      }
    );
  });
})

// set up server
module.exports = app;
app.listen(3000, () =>
  console.log('Listening on port 3000'));
