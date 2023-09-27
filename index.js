document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const messageButton = document.getElementById("message-button");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Here, you can add code to handle the form submission, like sending an email or storing the message in a database.
        // For now, let's just alert the user.
        alert("Message sent successfully!");
        emailInput.value = "";
        messageInput.value = "";
    });
});


    