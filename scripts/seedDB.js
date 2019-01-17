const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost:27017/vlibrary',
);

const contactSeed = [
  {
    "id": 0,
    "First": "Joe",
    "Last": "Devola",
    "Phone": "#",
    "Email": "#",
    "Address": "Fantasy Island"
  }
];

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
