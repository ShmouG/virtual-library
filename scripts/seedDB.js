const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost:27017/vlibrary',
);

const address = [
  {
    "id": 0,
    "First Name": "Joe",
    "Last Name": "Devola",
    "Phone": "#",
    "Email": "#",
    "Address": "Fantasy Island"
  }
];

db.Address
  .remove({})
  .then(() => db.Address.collection.insertMany(address))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
