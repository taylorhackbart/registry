const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    giftList: [{
        title: {type: String, required: true},
        image: {type: String},
        link: {type: String}
      }]
})

const User = mongoose.model("User", userSchema)

module.exports = User