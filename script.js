const formulario = document.getElementById("formRegistro");
const nombreInput = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

function validarNombre(nombre) {
  return nombre.trim().length > 0;
}

function registrarUsuario(nombre) {
  if (!validarNombre(nombre)) {
    return {
      exito: false,
      mensaje: "Error: el nombre no puede estar vacío.",
    };
  }

  return {
    exito: true,
    mensaje: "Usuario registrado correctamente: " + nombre.trim(),
  };
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const resultado = registrarUsuario(nombreInput.value);

  mensaje.textContent = resultado.mensaje;
  mensaje.style.color = resultado.exito ? "green" : "red";
});
