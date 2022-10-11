const express = require('express');
const router = express.Router();
const weathersCtrl = require('../../controllers/api/weathers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/search', weathersCtrl.searchWeathers);

router.get('/all', weathersCtrl.getAllWeathers);

router.post('/weatherId/details', weathersCtrl.getWeatherDetails);

router.post('/add', ensureLoggedIn, weathersCtrl.addWeatherToLocationList);

router.get('/locationList', ensureLoggedIn, weathersCtrl.getLocationList);

router.delete('/:id', ensureLoggedIn, weathersCtrl.deleteWeatherFromLocationList);

module.exports = router;