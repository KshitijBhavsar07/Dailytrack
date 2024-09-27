// Login function to hide login page and show profile creation
function login() {
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    if (emailOrPhone === "" || password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in both email/phone and password!',
        });
    } else {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('profilePage').classList.remove('hidden');
    }
}

// Function to submit profile details
function submitProfile() {
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;

    if (username === "" || age === "" || weight === "" || height === "" || gender === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all profile details!',
        });
    } else {
        document.getElementById('profilePage').classList.add('hidden');
        document.getElementById('goalsPage').classList.remove('hidden');
    }
}

// Function to submit goal
function submitGoal() {
    const selectedGoal = document.getElementById('goal').value;

    if (selectedGoal === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select a goal!',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Goal selected!',
            text: 'You have successfully set your goal.',
        });

        // After goal is selected, show the main page
        document.getElementById('goalsPage').classList.add('hidden');
        document.getElementById('mainPage').classList.remove('hidden');
        document.getElementById('welcomeMessage').innerText = `Welcome to your dashboard! Goal: ${selectedGoal}`;
    }
}

// Function to go back to a previous section
function goBack(page) {
    if (page === 'loginPage') {
        document.getElementById('profilePage').classList.add('hidden');
        document.getElementById('loginPage').classList.remove('hidden');
    }
}
// Back to Profile Page from Goals Page
function goBack(page) {
    document.querySelectorAll('.container').forEach(el => el.classList.add('hidden'));
    document.getElementById(page).classList.remove('hidden');
}

function navigateToGoals() {
    document.querySelectorAll('.container').forEach(el => el.classList.add('hidden'));
    document.getElementById('goalsPage').classList.remove('hidden');
}

