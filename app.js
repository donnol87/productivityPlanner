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
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
    input.value = "";
};

// How to delete a post

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};