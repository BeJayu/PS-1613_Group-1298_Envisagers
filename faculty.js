document.addEventListener('DOMContentLoaded', function() {
    // Handle the Faculty Login form
    const loginForm = document.getElementById('facultyLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add validation and login logic here
            alert('Faculty login submitted!');
        });
    }

    // Handle the Sign-Up button
    const signUpButton = document.getElementById('signUpButton');
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = 'signup.html'; // Redirect to sign-up page
        });
    }
});
