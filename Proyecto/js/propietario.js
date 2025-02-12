class Propietario {
    constructor(nombre, contacto) {
      this.nombre = nombre;
      this.contacto = contacto;
      this.mascotas = [];
    }
  
    registrarMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    listarMascotas() {
      return this.mascotas;
    }
  
    eliminarMascota(nombreMascota) {
      this.mascotas = this.mascotas.filter(m => m.nombre !== nombreMascota);
    }
  }
  
  export { Propietario };
  