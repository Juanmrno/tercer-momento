// // Objeto para gestionar la sesión
// let sesion = {
//     usuarioActual: null,
//  };
 
//  // Botón para iniciar sesión
//  let btnIniciar = document.getElementById("btnIniciar");
//  // Botón para cerrar sesión (renombrado a camelCase)
//  let cerrarSesionBtn = document.getElementById("cerrarSesion");
 
//  // Evento para iniciar sesión
//  btnIniciar.addEventListener("click", function () {
//     console.log("Iniciando sesión");
//     document.getElementById("spinner").style.display = "block";
//     setTimeout(() => {
//        document.getElementById("spinner").style.display = "none";
//        document.getElementById("login").style.display = "none";
//        document.getElementById("panel").style.display = "block";
//        sesion.usuarioActual = document.getElementById("usuario").value; // Obtener el usuario del formulario de inicio de sesión
//        actualizarNombreUsuario();
//     }, 3000);
//  });
 
//  // Evento para cerrar sesión
//  cerrarSesionBtn.addEventListener("click", function () {
//     cerrarSesion();
//  });
 
//  // Evento cuando se carga el contenido del documento
//  document.addEventListener("DOMContentLoaded", function () {
//     const btnRegistraR = document.getElementById("btnRegistraR");
//     btnRegistraR.addEventListener("click", validarRegistro);
//  });
 
//  // Función para validar el registro
//  function validarRegistro() {
//     let mensajeExito = document.createElement("p");
//     mensajeExito.textContent = "Formulario de registro validado con éxito";
//     mensajeExito.classList.add("mensaje-exito"); // Agrega una clase al elemento
//     document.body.appendChild(mensajeExito);
//  }
 
//  // Función para cerrar sesión
//  function cerrarSesion() {
//     // Elimina la información de la sesión (puedes implementar tu lógica específica)
//     sesion.usuarioActual = null;
 
//     // Actualiza el nombre del usuario en la sección del panel (puedes ajustarlo según tu lógica)
//     actualizarNombreUsuario();
 
//     // Oculta el panel actual y muestra el formulario de inicio de sesión
//     document.getElementById("panel").style.display = "none";
//     document.getElementById("login").classList.add("visible");
//  }
//  function actualizarNombreUsuario() {
//     let nombreUsuarioSpan = document.getElementById("nombreUsuarioSpan");
//     if (nombreUsuarioSpan) {
//        nombreUsuarioSpan.textContent = sesion.usuarioActual;
//     }
//  }





//  let sesion = {
//    usuarioActual: null,
// };

// let usuarios = [];

// let btnIniciar = document.getElementById("btnIniciar");
// let cerrarSesionBtn = document.getElementById("cerrarSesion");

// btnIniciar.addEventListener("click", function () {
//    let usuarioInput = document.getElementById("usuario").value;
//    let contrasenaInput = document.getElementById("contrasena").value;

//    if (verificarCredenciales(usuarioInput, contrasenaInput)) {
//        document.getElementById("spinner").style.display = "block";
//        setTimeout(() => {
//            document.getElementById("spinner").style.display = "none";
//            document.getElementById("login").style.display = "none";
//            document.getElementById("panel").style.display = "block";
//            sesion.usuarioActual = usuarioInput;
//            actualizarNombreUsuario();
//        }, 3000);
//    } else {
//        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
//    }
// });

// cerrarSesionBtn.addEventListener("click", function () {
//    cerrarSesion();
// });

// document.addEventListener("DOMContentLoaded", function () {
//    const btnRegistraR = document.getElementById("btnRegistraR");
//    btnRegistraR.addEventListener("click", function () {
//        registrarUsuario();
//    });
// });

// function validarRegistro() {
//    document.getElementById("mensaje").innerHTML = "Formulario de registro validado con éxito";
// }

// function cerrarSesion() {
//    sesion.usuarioActual = null;
//    actualizarNombreUsuario();
//    document.getElementById("panel").style.display = "none";
//    document.getElementById("login").classList.add("visible");
//    alert("Sesión cerrada con éxito.");
// }

// function actualizarNombreUsuario() {
//    let nombreUsuarioSpan = document.getElementById("nombreUsuarioSpan");
//    if (nombreUsuarioSpan) {
//        nombreUsuarioSpan.textContent = sesion.usuarioActual;
//    }
// }

// function verificarCredenciales(usuario, contrasena) {
//    return usuarios.some(u => u.usuario === usuario && u.contrasena === contrasena);
// }

// function registrarUsuario() {
//    let nuevoUsuario = document.getElementById("usuarioRegistro").value;
//    let nuevaContrasena = document.getElementById("contrasenaRegistro").value;
//    let nuevoCorreo = document.getElementById("correoRegistro").value;
//    usuarios.push({ usuario: nuevoUsuario, contrasena: nuevaContrasena });
//    alert("Usuario registrado con éxito.");
// }

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
