document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form from submitting by default

        // Validate inputs
        let isValid = true;

        // Check if each field is filled out
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            isValid = false;
            return;
        }
        
        if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
            return;
        }

        if (subjectInput.value.trim() === "") {
            alert("Please enter a subject.");
            isValid = false;
            return;
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            isValid = false;
            return;
        }

        if (isValid) {
            alert("Thank you for your message! We will get back to you soon.");
            form.reset(); // Clear the form after successful submission
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

