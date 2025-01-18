const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const showSignUp = document.getElementById('showSignUp');
const showSignIn = document.getElementById('showSignIn');

// Show the Sign Up form
showSignUp.addEventListener('click', () => {
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
});

// Show the Sign In form
showSignIn.addEventListener('click', () => {
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
});

// Sign Up Validation
const signUpFormSubmit = document.getElementById('signUpFormSubmit');
signUpFormSubmit.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign Up Successful!");
    }
});

// Sign In Validation
const signInFormSubmit = document.getElementById('signInFormSubmit');
signInFormSubmit.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameOrEmail = document.getElementById('usernameOrEmail').value;
    const password = document.getElementById('password').value;

    if (!usernameOrEmail || !password) {
        alert("Please fill in all fields!");
    } else {
        alert("Sign In Successful!");
    }
});
document.getElementById('signInFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Redirect to homepage (you can replace '/' with your homepage path)
    window.location.href = 'Home.html';
});

document.getElementById('signUpFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Redirect to homepage (you can replace '/' with your homepage path)
    window.location.href = 'Home.html';
});