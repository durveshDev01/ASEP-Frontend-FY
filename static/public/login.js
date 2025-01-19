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

