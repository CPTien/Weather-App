import sendRequest from "./send-request";

const BASE_URL = "/api/weathers";

export function searchWeathers(query) {
  console.log("from weather-api-service, searchWeather", query)
  return sendRequest(`${BASE_URL}/search`, 'POST', {query});
}

export function getAllWeathers() {
  return sendRequest(`${BASE_URL}/all`);
}

export function getWeatherDetails(params) {
  return sendRequest(`${BASE_URL}/weatherId/details`, 'POST', {params});
}

export function addWeatherToLocationList(event) {
  return sendRequest(`${BASE_URL}/add`, 'POST', event);
}

export function getLocationList() {
  return sendRequest(`${BASE_URL}/locationList`);
}

export function deleteWeatherFromLocationList(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

//testing below

// export function searchDetailWeathers(query) {
//   console.log("from weather-api-service, searchWeather", query)
//   return sendRequest(`${BASE_URL}/search`, 'POST', {query});
// }