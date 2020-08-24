const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Employee = new Schema(
  {
    first_name: { type: String, required: true },

    last_name: { type: String, required: true },

    age: { type: Number, required: true },

    country: { type: String, required: true },

    adress: { type: String, required: true },

    identity_card: { type: Number, required: true },

    id_card: { type: Number, required: true },

    education: { type: String, required: true },

    speciality: { type: String, required: true },

    status: { type: String, required: true },

    date_of_birth: { type: Date, required: true },

    //gender: { type: String, required: true },
  },
  {
    collection: "persons",
  }
);

module.exports = mongoose.model("Employee", Employee);
