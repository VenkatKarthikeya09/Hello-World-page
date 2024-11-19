let clickCount = 0;

// Array of random font styles
const fonts = ['Arial', 'Verdana', 'Courier New', 'Times New Roman', 'Georgia', 'Comic Sans MS'];

// Function to display "Hello World" at random locations with random font styles
document.body.addEventListener("click", function() {
    clickCount++;
    let message = "Hello World " + clickCount;

    // Create a new div element for the message
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;

    // Randomize position
    messageElement.style.position = 'absolute';
    messageElement.style.top = Math.random() * window.innerHeight + 'px';
    messageElement.style.left = Math.random() * window.innerWidth + 'px';

    // Randomize font size and font family
    messageElement.style.fontSize = Math.random() * 20 + 20 + 'px';  // Random font size between 20px and 40px
    messageElement.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

    // Append the message to the body
    document.body.appendChild(messageElement);
});
