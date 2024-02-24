const form = document.getElementById("form-login");
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

form.addEventListener("submit", (evento) => {
    evento.preventDefault();


    localStorage.setItem("user", email.value);
    window.location.href = "index.html";
});
