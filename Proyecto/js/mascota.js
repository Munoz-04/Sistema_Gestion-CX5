class Mascota {
    constructor(nombre, tipo, edad, propietario) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.edad = edad;
      this.propietario = propietario;
      
    }
  
    registrarVacuna(vacuna, fechaVacuna) {
      this.historialVacunas.push(vacuna);
    }
  
    mostrarHistorialVacunas() {
      return this.historialVacunas;
    }
  }
  
  export { Mascota };
  
  
  