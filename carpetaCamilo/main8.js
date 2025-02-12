// Selección de elementos del DOM
const formMascota = document.getElementById("form-mascota");
const listaMascotas = document.getElementById("lista-mascotas");
const formPropietario = document.getElementById("form-propietario");
const listaPropietarios = document.getElementById("lista-propietarios");
const selectPropietario = document.getElementById("propietario");
const formVeterinario = document.getElementById("form-veterinario");
const listaVeterinarios = document.getElementById("lista-veterinarios");
const formCitaMedica = document.getElementById("form-cita-medica");
const listaCitasMedicas = document.getElementById("lista-citas-medicas");
const selectMascotaCita = document.getElementById("mascota-cita");
const selectVeterinarioCita = document.getElementById("veterinario-cita");

// Cargar datos desde localStorage o inicializar arrays vacíos
let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
let propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];
let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
let citasMedicas = JSON.parse(localStorage.getItem("citasMedicas")) || [];

// Función genérica para guardar en localStorage
function guardarDatos(clave, datos) {
  localStorage.setItem(clave, JSON.stringify(datos));
}

// Función para actualizar el select de propietarios
function actualizarSelectPropietarios() {
  selectPropietario.innerHTML = '<option value="">Seleccione un propietario</option>';
  propietarios.forEach(propietario => {
    const option = document.createElement("option");
    option.value = propietario["nombre-propietario"];
    option.textContent = propietario["nombre-propietario"];
    selectPropietario.appendChild(option);
  });
}

// Función para actualizar el select de mascotas en el formulario de citas médicas
function actualizarSelectMascotas() {
  selectMascotaCita.innerHTML = '<option value="">Seleccione una mascota</option>';
  mascotas.forEach(mascota => {
    const option = document.createElement("option");
    option.value = mascota.nombre;
    option.textContent = mascota.nombre;
    selectMascotaCita.appendChild(option);
  });
}

// Función para actualizar el select de veterinarios en el formulario de citas médicas
function actualizarSelectVeterinarios() {
  selectVeterinarioCita.innerHTML = '<option value="">Seleccione un veterinario</option>';
  veterinarios.forEach(veterinario => {
    const option = document.createElement("option");
    option.value = veterinario.nombre;
    option.textContent = veterinario.nombre;
    selectVeterinarioCita.appendChild(option);
  });
}

// Función para registrar una mascota
function registrarMascota(event) {
  event.preventDefault();
  const formData = new FormData(formMascota);
  const nuevaMascota = Object.fromEntries(formData);
  mascotas.push(nuevaMascota);
  guardarDatos("mascotas", mascotas);
  mostrarMascotas();
  actualizarSelectMascotas(); // Actualizar select de mascotas
  formMascota.reset();
}

// Función para registrar un propietario
function registrarPropietario(event) {
  event.preventDefault();
  const formData = new FormData(formPropietario);
  const nuevoPropietario = Object.fromEntries(formData);
  propietarios.push(nuevoPropietario);
  guardarDatos("propietarios", propietarios);
  mostrarPropietarios();
  actualizarSelectPropietarios();
  formPropietario.reset();
}

// Función para registrar un veterinario
function registrarVeterinario(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre-veterinario").value;
  const especialidad = document.getElementById("especialidad").value;
  const telefono = document.getElementById("telefono-veterinario").value;
  const nuevoVeterinario = { nombre, especialidad, telefono };
  veterinarios.push(nuevoVeterinario);
  guardarDatos("veterinarios", veterinarios);
  mostrarVeterinarios();
  actualizarSelectVeterinarios(); // Actualizar select de veterinarios
  formVeterinario.reset();
}

// Función para registrar una cita médica
function registrarCitaMedica(event) {
  event.preventDefault();
  const formData = new FormData(formCitaMedica);
  const nuevaCita = Object.fromEntries(formData);
  citasMedicas.push(nuevaCita);
  guardarDatos("citasMedicas", citasMedicas);
  mostrarCitasMedicas();
  formCitaMedica.reset();
}

// Funciones para mostrar listas
function mostrarLista(data, container, formatFunction) {
  container.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = formatFunction(item);
    container.appendChild(li);
  });
}

const formatMascota = (m) => `<strong>${m.nombre}</strong> - ${m.tipo}, ${m.edad} años<br>Propietario: ${m.propietario}`;
const formatPropietario = (p) => `<strong>${p["nombre-propietario"]}</strong><br>Teléfono: ${p.telefono}<br>Correo: ${p.correo}`;
const formatVeterinario = (v) => `<strong>${v.nombre}</strong><br>Especialidad: ${v.especialidad}<br>Teléfono: ${v.telefono}`;
const formatCita = (c) => `<strong>Mascota: ${c["mascota-cita"]}</strong><br>Veterinario: ${c["veterinario-cita"]}<br>Fecha: ${c["fecha-cita"]}<br>Hora: ${c["hora-cita"]}<br>Motivo: ${c["motivo-consulta"]}`;

const mostrarMascotas = () => mostrarLista(mascotas, listaMascotas, formatMascota);
const mostrarPropietarios = () => mostrarLista(propietarios, listaPropietarios, formatPropietario);
const mostrarVeterinarios = () => mostrarLista(veterinarios, listaVeterinarios, formatVeterinario);
const mostrarCitasMedicas = () => mostrarLista(citasMedicas, listaCitasMedicas, formatCita);

// Eventos
formMascota.addEventListener("submit", registrarMascota);
formPropietario.addEventListener("submit", registrarPropietario);
formVeterinario.addEventListener("submit", registrarVeterinario);
formCitaMedica.addEventListener("submit", registrarCitaMedica);

// Cargar datos al iniciar
document.addEventListener("DOMContentLoaded", () => {
  mostrarMascotas();
  mostrarPropietarios();
  actualizarSelectPropietarios();
  mostrarVeterinarios();
  mostrarCitasMedicas();
  actualizarSelectMascotas(); // Actualizar select de mascotas
  actualizarSelectVeterinarios(); // Actualizar select de veterinarios
});