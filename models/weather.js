const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({

});

module.exports = mongoose.model('Weather', weatherSchema);