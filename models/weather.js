const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: { type: String },
  icon: { type: String },
  temp: { type: Number },
  description: { type: String }, 
  feels_like: { type: Number },
  humidity: { type: Number },
  wind_speed: { type: Number },
});

module.exports = mongoose.model('Weather', weatherSchema);