document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Get form input values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address";
        return;
    }

    // Validate message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        return;
    }

    // If all validations pass, you can submit the form
    // For example, you can send the form data to your server using AJAX
    // Here, we'll just log the form data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Optionally, you can clear the form after submission
    document.getElementById("contactForm").reset();
});

document.getElementById('register').addEventListener('click', function() {
    window.location.href = 'Homepage.html'; 
});