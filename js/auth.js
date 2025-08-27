document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігаємо стандартній відправці форми

        const email = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("error");

        if (email === "admin" && password === "123") {
            message.style.color = "green";
            message.textContent = "Login success";
            window.location.href = 'http://majida.com';
        } else {
            message.style.color = "red";
            message.textContent = "Wrong login or Email";
        }
    });