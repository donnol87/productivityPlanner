// Get the current date
const today = new Date();

// Array of weekday names
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the current day of the week as a number (0 for Sunday, 6 for Saturday)
const dayOfWeek = today.getDay();

// Find the h2 element with the id 'day-of-week' and update its content
document.getElementById('day-of-week').textContent = weekdays[dayOfWeek];

// Get the current date
const todayDate = new Date();

// Options for formatting the date (e.g., October 8, 2024)
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date using toLocaleDateString for the desired format
const formattedDate = today.toLocaleDateString(undefined, options);

// Find the h2 element with the id 'today-date' and update its content
document.getElementById('today-date').textContent = formattedDate;