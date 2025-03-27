document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent page reload

    let formData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    fetch("/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")  // CSRF token for security
        },
        body: JSON.stringify(formData),
        credentials: "include"  // Ensures session authentication works
    })
    .then(response => response.json().then(data => ({ status: response.status, body: data })))  // Get both status & JSON data
    .then(result => {
        if (result.status === 200) {
            window.location.href = "/tasks";  // Redirect to tasks
        } else {
            alert(result.body.message || "Invalid credentials!");  // Show error message
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
