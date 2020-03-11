const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
//Import the mongoose module
var mongoose = require('mongoose');

var CONTACTS_COLLECTION = "contacts";
//Set up default mongoose connection
mongoose.connect(process.env.MONGODB_URI, { user: process.env.MONGODB_USER, pass: process.env.MONGODB_PASS, useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
var db = mongoose.connection;
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

app.use(bodyParser.json());

app.post("/contacts", function(req, res) {
  var newContact = req.body;
  console.dir(req.body);
  newContact.createDate = new Date();

  if (!(req.body.firstName || req.body.lastName)) {
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }

  db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});
app.get("/contacts", function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});
app.get('/api', function (req, res) {
 return res.send('API');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);