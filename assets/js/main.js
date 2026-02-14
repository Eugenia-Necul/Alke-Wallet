

const login_pantalla = document.getElementById("iniciaSesion");

function validarLogin(event) {

    event.preventDefault();

    const formulario = event.target;

    if ((formulario.rutUsuario.value === "12345678-9" && formulario.contrasena.value === "Prueba123")) {
        location.href = "menu.html";
    }
    else {
        alert("¡Rut o contraseña incorrectos!")
    }
} 

if (login_pantalla) {
    const formularioLogin = document.getElementById("loginForm");

    formularioLogin.addEventListener('submit', validarLogin);

}

