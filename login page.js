const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate username and password
    if (username === 'nitin' || password === 'kohinoor@123') {
        errorMessage.textContent = 'Please enter both username and password';
        return;
    }

    // Simulate API call to validate credentials
    const isValid = validateCredentials(username, password);
    if (!isValid) {
        errorMessage.textContent = 'Invalid username or password';
        return;
    }

    // Login successful
    console.log('Login successful!');
    // Redirect to dashboard or next page
});

// Simulate API call to validate credentials
function validateCredentials(username, password) {
    // Replace with actual API call or database query
    const validCredentials = {
        username: 'nitin',
        password: 'kohinoor@123',
    };
    return username === validCredentials.username && password === validCredentials.password;
}