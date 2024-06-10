/**
 * Function to calculate compound interest
 * @param {number} principal - The principal amount
 * @param {number} rate - The annual interest rate (in percentage)
 * @param {number} time - The time the money is invested or borrowed for (in years)
 * @param {number} n - The number of times that interest is compounded per year
 * @returns {number} - The calculated compound interest
 */
function calculateCompoundInterest(principal, rate, time, n) {
    // Convert rate from percentage to a decimal
    let interestRate = rate / 100;
    
    // Calculate compound interest using the formula: A = P (1 + r/n)^(nt)
    let amount = principal * Math.pow((1 + interestRate / n), n * time);
    
    // Compound interest is the amount minus the principal
    let compoundInterest = amount - principal;
    
    return compoundInterest;
}

// Get user input using prompt
let principal = parseFloat(prompt("Enter the principal amount:"));
let rate = parseFloat(prompt("Enter the annual interest rate (in %):"));
let time = parseFloat(prompt("Enter the time (in years):"));
let n = parseInt(prompt("Enter the number of times that interest is compounded per year:"));

// Calculate compound interest
let interest = calculateCompoundInterest(principal, rate, time, n);

// Display the result
alert("Compound Interest: $" + interest.toFixed(2));