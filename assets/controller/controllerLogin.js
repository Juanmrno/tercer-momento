let sesion = {
   usuarioActual: null,
};

let usuarios = [];

let btnIniciar = document.getElementById("btnIniciar");
let cerrarSesionBtn = document.getElementById("cerrarSesion");

btnIniciar.addEventListener("click", function () {
   let usuarioInput = document.getElementById("usuario").value;
   let contrasenaInput = document.getElementById("contrasena").value;

   if (verificarCredenciales(usuarioInput, contrasenaInput)) {
       document.getElementById("spinner").style.display = "block";
       setTimeout(() => {
           document.getElementById("spinner").style.display = "none";
           document.getElementById("login").style.display = "none";
           document.getElementById("panel").style.display = "block";
           sesion.usuarioActual = usuarioInput;
           actualizarNombreUsuario();
       }, 3000);
   } else {
       mostrarMensajeError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
   }
});

function mostrarMensajeError(mensaje) {
   let mensajeError = document.createElement("p");
   mensajeError.textContent = mensaje;
   mensajeError.classList.add("mensaje-error"); // Agrega una clase al elemento
   document.body.appendChild(mensajeError);
}


cerrarSesionBtn.addEventListener("click", function () {
   cerrarSesion();
});

document.addEventListener("DOMContentLoaded", function () {
   const btnRegistraR = document.getElementById("btnRegistraR");
   btnRegistraR.addEventListener("click", function () {
       registrarUsuario();
   });
});



function cerrarSesion() {
   sesion.usuarioActual = null;
   actualizarNombreUsuario();
   document.getElementById("panel").style.display = "none";
   document.getElementById("login").classList.add("visible");
   mostrarMensajeExito("Sesión cerrada con éxito.");
}

function mostrarMensajeExito(mensaje) {
   let mensajeExito = document.createElement("p");
   mensajeExito.textContent = mensaje;
   mensajeExito.classList.add("mensaje-exito");
   document.body.appendChild(mensajeExito);
}

function actualizarNombreUsuario() {
   let nombreUsuarioSpan = document.getElementById("nombreUsuarioSpan");
   if (nombreUsuarioSpan) {
       nombreUsuarioSpan.textContent = sesion.usuarioActual;
   }
}

function verificarCredenciales(usuario, contrasena) {
   return usuarios.some(u => u.usuario === usuario && u.contrasena === contrasena);
}

function registrarUsuario() {
   let nuevoUsuario = document.getElementById("usuarioRegistro").value;
   let nuevaContrasena = document.getElementById("contrasenaRegistro").value;
   let nuevoCorreo = document.getElementById("correoRegistro").value;
   usuarios.push({ usuario: nuevoUsuario, contrasena: nuevaContrasena });
   mostrarMensajeExito("Usuario registrado con éxito.");
}
