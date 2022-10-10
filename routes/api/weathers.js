const express = require('express');
const router = express.Router();
const weathersCtrl = require('../../controllers/api/weathers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/search', weathersCtrl.searchWeathers);

router.get('/all', weathersCtrl.getAllWeathers);

// router.post('/weatherId/details', weathersCtrl.getWeatherDetails);

// router.post('/add', ensureLoggedIn, weathersCtrl.addWeatherToLocationList);

router.get('/locationList', ensureLoggedIn, eventsCtrl.getLocationList);

// router.delete('/:id', ensureLoggedIn, eventsCtrl.deleteWeatherFromLocationList);

module.exports = router;