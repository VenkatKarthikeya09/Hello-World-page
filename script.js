let clickCount = 0;

// Function to display "Hello World" based on number of clicks
document.body.addEventListener("click", function() {
    clickCount++;
    let message = '';
    for (let i = 0; i < clickCount; i++) {
        message += "Hello World " + (i + 1) + "<br>";
    }
    document.getElementById("message").innerHTML = message;
});
