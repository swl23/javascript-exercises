const convertToCelsius = function(fahrenheitInput) {
  celsiusConversion = ((fahrenheitInput - 32) * (5/9));
  const celsiusAsString = celsiusConversion.toString();
  if (celsiusAsString.includes('.')) {
    let finalCelsius = Number(celsiusConversion.toFixed(1));
    return finalCelsius
  }
  else {
    let finalCelsius = Number(celsiusConversion);
    return finalCelsius
  }
};

const convertToFahrenheit = function(celsiusInput) {
  fahrenheitConversion = (celsiusInput * (9/5) + 32);
  const fahrenheitAsString = fahrenheitConversion.toString();
  if (fahrenheitAsString.includes('.')) {
    let finalFahrenheit = Number(fahrenheitConversion.toFixed(1));
    return finalFahrenheit
  }
  else {
    let finalFahrenheit = Number(fahrenheitConversion);
    return finalFahrenheit
  } 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
