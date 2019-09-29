// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Customer = new Schema({
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
    collection: 'Customer'
});

module.exports = mongoose.model('Customer', Customer);
