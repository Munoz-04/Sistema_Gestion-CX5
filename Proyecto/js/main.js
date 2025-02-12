import { Mascota } from "./mascota.js";
import { CitaMedica } from "./citaMedica.js";
import { Alerta } from "./alerta.js";

// Selección de elementos del DOM
const formMascota = document.getElementById("form-mascota");
const listaMascotas = document.getElementById("lista-mascotas");
const formCitasMedicas = document.getElementById("form-citas-medicas");
const listaCitas = document.getElementById("lista-citas");

// Arrays con localStorage
let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
let citas = JSON.parse(localStorage.getItem("citas")) || [];

// Función para mostrar mascotas
function mostrarMascotas() {
  listaMascotas.innerHTML = "";

  mascotas.forEach((mascota, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Nombre :</strong> ${mascota.nombre} <br>
      <strong>Tipo: </strong>${mascota.tipo} <br>
      <strong>Edad: </strong> ${mascota.edad} Años <br>
      <strong>Propietario:  </strong>${mascota.propietario} <br>
      <button onclick="eliminarMascota(${index})">❌ Eliminar</button>
    `;
    listaMascotas.appendChild(li);
  });
}

// Función para registrar una nueva mascota
if (formMascota) {
  formMascota.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const tipo = document.getElementById("tipo").value;
    const edad = document.getElementById("edad").value.trim();
    const propietario = document.getElementById("propietario").value.trim();

    if (nombre && tipo && edad && propietario) {
      const nuevaMascota = new Mascota(nombre, tipo, edad, propietario);
      mascotas.push(nuevaMascota);

      localStorage.setItem("mascotas", JSON.stringify(mascotas));
      mostrarMascotas();
      formMascota.reset();
    } else {
      new Alerta("Error", "Por favor, complete todos los campos.").enviarAlerta();
    }
  });
}

// Función para eliminar una mascota
window.eliminarMascota = (index) => {
  mascotas.splice(index, 1);
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
  mostrarMascotas();
};

// Función para mostrar citas
function mostrarCitas() {
  listaCitas.innerHTML = "";
  citas.forEach((cita, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Nombre Mascota: </strong>${cita.mascota} <br>
      <strong> Fecha: </strong> ${cita.fecha} <br>
      <strong> Hora: </strong> ${cita.hora} <br>
      <strong>Veterinario: </strong> ${cita.veterinario} <br>
      <button onclick="eliminarCita(${index})">❌ Eliminar</button>
    `;
    listaCitas.appendChild(li);
  });
}

// Función para registrar citas médicas
if (formCitasMedicas) {
  formCitasMedicas.addEventListener("submit", (event) => {
    event.preventDefault();

    const fechaCita = document.getElementById("fechaCita").value;
    const horaCita = document.getElementById("horaCita").value;
    const nombreVeterinario = document.getElementById("nombreVeterinario").value.trim();
    const nombreMascota = document.getElementById("nombreMascota").value.trim();

    if (fechaCita && horaCita && nombreVeterinario && nombreMascota) {
      const nuevaCita = new CitaMedica(fechaCita, horaCita, nombreVeterinario, nombreMascota);
      citas.push(nuevaCita);

      localStorage.setItem("citas", JSON.stringify(citas));
      mostrarCitas();
      formCitasMedicas.reset();
    } else {
      new Alerta("Error", "Por favor, complete todos los campos.").enviarAlerta();
    }
  });
}

// Función para eliminar una cita
window.eliminarCita = (index) => {
  citas.splice(index, 1);
  localStorage.setItem("citas", JSON.stringify(citas));
  mostrarCitas();
};

// Inicializar datos en la carga de la página
document.addEventListener("DOMContentLoaded", () => {
  if (listaMascotas) mostrarMascotas();
  if (listaCitas) mostrarCitas();
});


  formMascota.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const tipo = document.getElementById("tipo").value;
    const edad = document.getElementById("edad").value.trim();
    const propietario = document.getElementById("propietario").value.trim();

    if (nombre && tipo && edad && propietario) {
      const nuevaMascota = new Mascota(nombre, tipo, edad, propietario);
      mascotas.push(nuevaMascota);

      localStorage.setItem("mascotas", JSON.stringify(mascotas));
      mostrarMascotas();
      formMascota.reset();
    } else {
      new Alerta("Error", "Por favor, complete todos los campos.").enviarAlerta();
    }
  });
