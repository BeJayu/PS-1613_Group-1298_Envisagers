// Function to navigate back to the home page
function goHome() {
    window.location.href = 'index.html'; // Update this with your home page URL
}

// Form validation for the Sign-Up page
document.addEventListener('DOMContentLoaded', function() {
    // Handle the Sign-Up form validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const password = document.getElementById('createPassword').value;
            const rePassword = document.getElementById('reEnterPassword').value;

            // Check if passwords match
            if (password !== rePassword) {
                document.getElementById('message').innerText = 'Passwords do not match!';
                return;
            }

            // Here you would typically handle form submission, e.g., send data to a server
            alert('Sign up successful!');

            // Reset the form after successful submission
            signupForm.reset();
            document.getElementById('message').innerText = '';
        });
    }

    // Handle the Faculty Login and Admin Login forms if necessary
    // You can add additional form handling logic here if needed
});
