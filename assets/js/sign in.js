document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Validate email format (simple regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }
  
    // Check if all fields are filled
    if (email === "" || password === "") {
      errorMessage.textContent = "Both fields are required.";
      return;
    }
  
    // If all validation passes
    errorMessage.textContent = "";
    alert("Sign-In successful!");
  });
  