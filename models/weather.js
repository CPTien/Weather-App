const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  users: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // name: {type: String},
  // id: {type: Number},
  // temperature: {type: Number},
  // description: {type: String},
  // feels_like: {type: Number},
  // humidity: {type: Number},
  // wind_speed: {type: Number},
  // icon: {type: String},
  
  coord: {
    lon: {type: Number },
    lat: {type: Number }
  },
  weather: [
    {
      id: {type: Number },
      main: {type: String },
      description: {type: String },
      icon: {type: String }
    }
    ],
  base: {type: String },
    main: {
      temp: {type: Number },
      feels_like: {type: Number },
      temp_min: {type: Number },
      temp_max: {type: Number },
      pressure: {type: Number },
      humidity: {type: Number },
      sea_level: {type: Number },
      grnd_level: {type: Number }
    },
  visibility: {type: Number },
  wind: {
    speed: {type: Number },
    deg: {type: Number },
    gust: {type: Number }
  },
  rain: {
    '1h': {type: Number }
  },
  clouds: {
    all: {type: Number }
  },
  dt: {type: Number },
  sys: {
    type: {type: Number },
    id: {type: Number },
    country: {type: String },
    sunrise: {type: Number },
    sunset: {type: Number }
  },
  timezone: {type: Number },
  id: {type: Number },
  name: {type: String },
  cod: {type: Number }
});

module.exports = mongoose.model('Weather', weatherSchema);