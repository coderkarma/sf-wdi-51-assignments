const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating new object 
const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    date: String
})

// Create the book model from the schema
const Book = mongoose.model('Book', BookSchema);

// Make Book model available to use to all program
module.exports = Book;