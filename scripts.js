app.use(express.static(path.join(__dirname, '../public')));

document.addEventListener("DOMContentLoaded", function () {
    let isLoginEnabled = true; // Change to true to enable login

    if (!isLoginEnabled) {
        document.getElementById("loginLink").addEventListener("click", function (event) {
            event.preventDefault();
            alert("Login is currently disabled!");
        });
    } else {
        document.getElementById("loginLink").classList.remove("disabled-link");
    }
    function signupform() {
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
    
        if (!isValidPassword(password)) {
            alert("Password is too weak! Please follow the password guidelines.");
            return false;
        }
    
        // Save credentials in localStorage
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
    
        alert("Account Created Successfully! Redirecting to Login...");
    
        // Redirect to login page
        window.location.href = 'login.html';
    
        return false;
    }
    
});

// delivery//


