function main() {
  const celsiusS = prompt('Type a temperature in celsius: ');
  const celsius = parseFloat(celsiusS);
  const fahrenheit = celsius * 9 / 5 + 32;
  const kelvin = celsius + 273.15;

  document.getElementById('fahrenheit').innerHTML += fahrenheit;
  document.getElementById('kelvin').innerHTML += kelvin;
}

main();
