document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    const password = params.get("password");

    // Check if both username and password are present
    if (username !== null && password !== null) {
        // For demonstration purposes, you can add a condition to simulate a successful login
        // You should replace this condition with your actual login logic
        if (username === "A" && password === "A") {
            // window.location.href = "EXPERI/dashboard/home.html";
            window.location.href = "https://clashingera.github.io/EXPERI/dashboard/home.html";
            // window.location.href = "dashboard/home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }

    }

    
});
