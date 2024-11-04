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

//CRUD application
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

// prevent users from submitting blank fields
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};

// now accept data into the input
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

// How to create posts using JavaScript template literals
let createPost = () => {
    posts.innerHTML += `
    <div>
    <ol> 
    <li><p>${data.text}</p>
    <span class="options">
      <i onclick="editPost(this)" class="fas fa-edit"></i>
      <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        <i onclick="playPost(this)" class="fas fa-play"></i>
        <i onclick="stopPost(this)" class="fas fa-stop"></i>
        <i onclick="checkPost(this)" class="fas fa-check"></i>
    </span>
        <div id="timerDisplay">25:00</div>
    </li>
    </ol>
  </div>`;
    input.value = "";
};

// How to delete a post

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

// How to edit a post

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

// How to play a post

let timerInterval;
let timeRemaining = 25 * 60; // 25 minutes in seconds

let playPost = (e) => {
    // Clear any existing timer interval to avoid multiple timers running
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Initialize the time to 25 minutes (in seconds)
    timeRemaining = 25 * 60;

    // Get the element where the timer will be displayed
    const timerDisplay = document.getElementById('timerDisplay');

    // Update the timer display every second
    timerInterval = setInterval(() => {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;

        // Format the timer display with leading zeros
        let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Update the text content of the timer display
        timerDisplay.textContent = formattedTime;

        // Decrease time remaining by 1 second
        timeRemaining--;

        // If time runs out, clear the interval and handle the timer finish event
        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000); // Update every second
};

// How to stop a post

let stopPost = (e) => {
    // Clear the interval to stop the timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Optionally, reset the timer display to its initial state
    document.getElementById('timerDisplay').textContent = '25:00';
};

// Clear the post

let checkPost = (element) => {
    // 'element' is the clicked <i> element (passed via 'this')

    // Toggle the 'completed' class on the element
    element.classList.toggle('completed');
};

// code for generating random quotes on homepage

var quotes = ["quote 1", "quote 2", "quote 3"];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
window.addEventListener('load', newQuote, true);