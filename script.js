function validarNombre(nombre) {
  return typeof nombre === "string" && nombre.trim().length > 0;
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

// Exportar funciones para pruebas con Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validarNombre,
    registrarUsuario,
  };
}

// Ejecutar el formulario solamente en el navegador
if (typeof document !== "undefined") {
  const formulario = document.getElementById("formRegistro");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje");
      const resultado = registrarUsuario(nombre);

      mensaje.textContent = resultado.mensaje;
      mensaje.style.color = resultado.exito ? "green" : "red";
    });
  }
}
