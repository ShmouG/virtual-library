const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const db = mongoose.connection;


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}

app.use('/', routes, (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const databaseUri = 'mongodb://localhost:27017/vlibrary';

// mongoose.connect(MONGODB_URI || { useNewUrlParser: true });
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
} else {
  mongoose.connect(databaseUri, { useNewUrlParser: true })
};

db.once('error', (err) => {
  console.log('Mongoose error:', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.')
})

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
