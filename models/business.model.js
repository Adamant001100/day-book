const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String, required: true
  },

  last_name: {
    type: String, required: true
  },

  business_name: {
    type: String, required: true
  },
  business_gst_number: {
    type: Number, required: true
  },

  storage: {
    type: String, required: true
  },

  os: {
    type: String, required: true
  },

  date: {
    type: Date, required: true
  }

},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);