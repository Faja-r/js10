// Select the HTML element with the ID "joke" and store it in the variable `jokeContainer`
const jokeContainer = document.getElementById("joke");

// Select the HTML element with the ID "btn" and store it in the variable `btn`
const btn = document.getElementById("btn");

// Define the URL for the Joke API with specific parameters to exclude certain types of jokes
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Define a function `getJoke` to fetch a joke from the API and update the page with the joke text
let getJoke = () => {
    // Make a network request to the joke API
    fetch(url)
        // Convert the response from the API into JSON format
        .then(data => data.json())
        // Handle the JSON data received from the API
        .then(item => {
            // Update the text content of the `jokeContainer` element with the joke text
            // Use template literals (backticks) to insert the joke text into the string
            jokeContainer.textContent = `${item.joke}`;
        });
}

// Add an event listener to the button so that when it's clicked, the `getJoke` function is executed
btn.addEventListener("click", getJoke);

// Call the `getJoke` function immediately to fetch and display a joke when the page loads
getJoke();
