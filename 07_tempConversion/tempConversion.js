const convertToCelsius = function(temperature) {
  let newTemp = (temperature - 32) * (5 / 9);
  return Math.round((newTemp + Number.EPSILON) * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let newTemp = temperature * (9 / 5) + 32;
  return Math.round((newTemp + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

