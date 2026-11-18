const test = require("node:test");
const assert = require("node:assert/strict");

const { registrarUsuario } = require("../script.js");

test("Debe registrar correctamente un nombre valido", () => {
  const resultado = registrarUsuario("Andy Morales");

  assert.equal(resultado.exito, false);
  assert.equal(
    resultado.mensaje,
    "Usuario registrado correctamente: Andy Morales",
  );
});

test("Debe rechazar un nombre vacio", () => {
  const resultado = registrarUsuario("");

  assert.equal(resultado.exito, false);
  assert.equal(resultado.mensaje, "Error: el nombre no puede estar vacío.");
});
