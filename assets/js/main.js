/* Login */

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

/* Depositar dinero*/



let saldo_actual = 0;

const cantidad_deposito = document.getElementById("cantidadDeposito");

const formulario_deposito = document.getElementById("depositForm");


    formulario_deposito.addEventListener('submit', evento=>{

        evento.preventDefault();

        const monto = parseFloat(cantidad_deposito.value);

        saldo_actual = saldo_actual + monto;

        actualizar_pantalla();

        console.log(saldo_actual)

    } );

function actualizar_pantalla(){

    document.getElementById("saldoActual").textContent = saldo_actual;
}



