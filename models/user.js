const mongoose = require("mongoose");
const moment = require("moment")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},

    giftList: [{
        title: {type: String},
        image: {type: String},
        link: {type: String}

      }],
      updatedAt: {
        type: Date,
        default: Date.now
      }
})

const User = mongoose.model("User", userSchema)

module.exports = User