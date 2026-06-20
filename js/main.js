function login(event){
    event.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    fetch("https://itransition-task4-production.up.railway.app/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem("sessionToken", data.sessionToken);
            window.location.href = `users.html?sessionToken=${data.sessionToken}`;
        } else {
            alert("Неверный логин или пароль");
        }
    })
}

function register(event) {
    event.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    email = document.getElementById("email").value;

    fetch("https://itransition-task4-production.up.railway.app/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password, confirmPassword: confirmPassword, email: email})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            localStorage.setItem("sessionToken", data.sessionToken);
            window.location.href = `users.html?sessionToken=${data.sessionToken}`;
        } else {
            alert(data.message);
        }
    })
}


