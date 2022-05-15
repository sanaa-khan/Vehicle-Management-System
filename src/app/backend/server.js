// required dependencies
const cors = require('cors');
const mongo = require('mongodb');
const express = require('express');

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
        //console.log(items);
        res.send(items);
      });
  })
})

// set up server
module.exports = app;
app.listen(3000, () =>
  console.log('Listening on port 3000'));
