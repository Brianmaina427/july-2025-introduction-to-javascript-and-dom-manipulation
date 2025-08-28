// script.js

// Part 1: Variables and Conditionals
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const eligibilityResult = document.getElementById('eligibilityResult');

checkAgeBtn.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    
    if (isNaN(age) || age <= 0) {
        eligibilityResult.textContent = 'Please enter a valid age.';
    } else if (age >= 18) {
        eligibilityResult.textContent = 'You are eligible to vote!';
        eligibilityResult.style.color = 'green';
    } else {
        eligibilityResult.textContent = 'You are not old enough to vote.';
        eligibilityResult.style.color = 'red';
    }
});

// Part 2: Functions
function calculateArea(length, width) {
    return length * width;
}

function formatName(firstName, lastName) {
    const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return `${formattedFirst} ${formattedLast}`;
}

const functionOutput = document.getElementById('functionOutput');
const area = calculateArea(5, 8);
const fullName = formatName('john', 'doe');
functionOutput.innerHTML = `<p>The area of a rectangle with length 5 and width 8 is: ${area}</p>
                           <p>The formatted name is: ${fullName}</p>`;

// Part 3: Loops
const loopOutput = document.getElementById('loopOutput');

// For loop to iterate through an array
const colors = ['red', 'green', 'blue'];
let colorList = '<h4>List of Colors:</h4><ul>';
for (let i = 0; i < colors.length; i++) {
    colorList += `<li>${colors[i]}</li>`;
}
colorList += '</ul>';
loopOutput.innerHTML += colorList;

// While loop for a countdown
let countdown = 5;
loopOutput.innerHTML += '<h4>Countdown:</h4>';
while (countdown > 0) {
    loopOutput.innerHTML += `<p>Counting down: ${countdown}</p>`;
    countdown--;
}

// Part 4: DOM Manipulation
const changeTextBtn = document.getElementById('changeTextBtn');
const domHeading = document.getElementById('domHeading');
const toggleBgBtn = document.getElementById('toggleBgBtn');
const toggleText = document.getElementById('toggleText');
const addListItemBtn = document.getElementById('addListItemBtn');
const dynamicList = document.getElementById('dynamicList');
let listItemCount = 2;

// DOM Interaction 1: Change text content
changeTextBtn.addEventListener('click', () => {
    domHeading.textContent = 'Text has been successfully changed!';
});

// DOM Interaction 2: Toggle a CSS class
toggleBgBtn.addEventListener('click', () => {
    toggleText.classList.toggle('highlight');
});

// DOM Interaction 3: Create and append a new element
addListItemBtn.addEventListener('click', () => {
    listItemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${listItemCount}`;
    dynamicList.appendChild(newItem);
});