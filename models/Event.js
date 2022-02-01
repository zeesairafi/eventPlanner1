const mongoose = require("mongoose");
const mongooseZlugPlugin = require("mongoose-slug-plugIn");

const DataSchema = new mongoose.Schema({
  
    organizer: String,
    name: {type: String, required: true},
    email: String,
    image: String ,
    numOfSeats: Number,
    bookedSeats: Date,
    endDate: Date
},
{timestamps: true}
)


DataSchema.plugin(mongooseSlugPlugin, {tmpl: "<%=name%>"})
module.exports = mongoose.module("Data", DataSchema)


// quantity:{type: Number, min: 0}