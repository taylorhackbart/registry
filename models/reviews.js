const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewsSchema = new Schema({
  name: { type: String, required: true },
  text: {type: String},
  image : {type: String},
  job: {type:String}
});
const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;