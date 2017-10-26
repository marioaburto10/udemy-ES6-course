// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

// Refactoring using ES6
// Should no longer be using var
// const is for variables that will never be changed once declared 
// let is for variables that can be changed after they are declared

const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 45;

// title has changed over time so we can redefine title
title = 'Senior Software Engineer';

console.log(title); // Senior Software Engineer

// Ex. 1 Practical example - Const/Let Refactoring
// The following code uses 'var' instead of 'const' and 'let'. Refactor the function to use the new keywords.  Be sure to consider whether the variable should be declared using 'const' or 'let' depending on whether the variable gets reassigned or not.

var statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

// statuses will not be changed but message, currentCode, and i will be changed throughout the code
const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

