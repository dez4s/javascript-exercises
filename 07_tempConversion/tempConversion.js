const convertToCelsius = function(x) {
  return parseFloat(((x - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(y) {
  return parseFloat(((y * 9 / 5) + 32).toFixed(1));
};

convertToCelsius(10);
convertToCelsius(100);
convertToCelsius(-32);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
