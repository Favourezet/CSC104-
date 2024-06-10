/**
 * Function to convert Celsius to Fahrenheit
 * @param {number} celsius - The temperature in Celsius
 * @returns {number} - The temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Get user input using prompt
let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

// Convert Celsius to Fahrenheit
let fahrenheit = celsiusToFahrenheit(celsius);

// Display the result
alert("Temperature in Fahrenheit: " + fahrenheit.toFixed(2));