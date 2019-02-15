// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//connect to DB 
const db = require('./models');

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({
  extended: true
}));

// var newBookUUID = 18;

////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html', {
    root: __dirname
  });
});

// // get all books
app.get('/api/books', (req, res) => {
  //send all our book as a json response
  db.Book.find((err, foundBooks) => {
    if (err) {
      console.log(`Index error: ${err}`);
      res.sendStatus(500);
    }
    res.json(foundBooks);
  });
});


// Dalton instructions




// //////////////////////////////
// get one book
app.get('/api/books/:id', (req, res) => {
  // find one book by its id
  db.Book.findOne({
    _id: (req.params.id)
  }, (err, foundBook) => {
    if (err) {
      console.log("this is not the book you're looking for");
    }
    res.json(foundBook);
  }).populate('author').exec((err, foundBook) => {
    if (err) return console.log(err);
    res.json(foundBook);
  })
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  let newBook = new db.Book({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    date: req.body.date
  })
  console.log(newBook)
  //save to db
  newBook.save((err, book) => {
    if (err) {
      throw err;
    }
    console.log(`Saved ${book.title}`);
    res.json(book);
  });
});

// update book
app.put('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log("books update", req.params);
  console.log(`The body is ${req.body}`);
  const bookId = req.params.id;
  // find the index of the book we want to update
  db.Book.findOneAndUpdate({
      _id: bookId
    },
    req.body, {
      new: true
    },
    (err, updatedBook) => {
      if (err) {
        throw err
      };
      res.json(updatedBook);
    });
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('books delete', req.params);
  const bookId = req.params.id;
  //find the index of the book we want to remove
  db.Book.findOneAndDelete({
    _id: bookId
  }, (err, deletedBook) => {
    if (err) {
      throw err;
    }
    res.json(deletedBook);
  });
});


//Routes 
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find(function (err, books) {
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});