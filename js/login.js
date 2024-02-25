import { credenciales } from "../database/credenciales.js";

const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    validacionLogin()
});

function validacionLogin() {

    if (credenciales.email === email.value && credenciales.password === password.value) {
        localStorage.setItem("user", email.value);
        window.location.href = "index.html";
        
    }else{
        alert("correo o contraseña incorrectos")
        return;
    }
    
}