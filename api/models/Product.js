// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  CustomerName: {
    type: String
  },
  PersonOfContact: {
    type: String
  },
  PhoneNumber: {
    type: Number
  },
  Location: {
    type: String
  },
  NumberOfEmployees: {
    type: Number
  }
},{
    collection: 'Product'
});

module.exports = mongoose.model('Product', Product);
