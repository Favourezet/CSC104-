/**
 * Function to calculate simple interest
 * @param {number} principal - The principal amount
 * @param {number} rate - The annual interest rate (in percentage)
 * @param {number} time - The time the money is invested or borrowed for (in years)
 * @returns {number} - The calculated simple interest
 */
function calculateSimpleInterest(principal, rate, time) {
    // Convert rate from percentage to a decimal
    let interestRate = rate / 100;
    
    // Calculate simple interest
    let interest = principal * interestRate * time;
    
    return interest;
}

// Get user input using prompt
let principal = parseFloat(prompt("Enter the principal amount:"));
let rate = parseFloat(prompt("Enter the annual interest rate (in %):"));
let time = parseFloat(prompt("Enter the time (in years):"));

// Calculate simple interest
let interest = calculateSimpleInterest(principal, rate, time);

// Display the result
alert("Simple Interest: $" + interest.toFixed(2));  