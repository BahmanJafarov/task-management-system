document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent page reload

    // Collect form data
    let formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        password: document.getElementById("password").value,
    };

    // Send data to the backend using Fetch API
    fetch("/api/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")  // Ensure CSRF token is included
        },
        body: JSON.stringify(formData),
        credentials: "include"  // Ensure session is stored
    })
    .then(response => response.json().then(data => ({ status: response.status, body: data })))  // Get both status & JSON data
    .then(result => {
        if (result.status === 201) {
            document.getElementById("message").innerHTML = "Registration successful!";
            setTimeout(function() {
                window.location.href = "/login";  // Redirect to login page after success
            }, 2000);
        } else {
            document.getElementById("message").innerHTML = result.body.detail || "Registration failed!";
        }
    })
    .catch(error => console.error("Error:", error));
});

// ✅ Helper function to get CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
