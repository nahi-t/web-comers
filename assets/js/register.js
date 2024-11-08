document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Validate passwords match
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }
  
    // Validate email format (simple regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }
  
    // Check if all fields are filled
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      errorMessage.textContent = "All fields are required.";
      return;
    }
  
    // If all validation passes
    errorMessage.textContent = "";
    alert("Registration successful!");
  });
  