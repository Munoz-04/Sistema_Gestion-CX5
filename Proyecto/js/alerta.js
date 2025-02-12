class Alerta {
    constructor(tipo, mensaje) {
      this.tipo = tipo;
      this.mensaje = mensaje;
    }
  
    enviarAlerta() {
      alert(`🔔 ${this.tipo}: ${this.mensaje}`);
    }
  }
  
  export { Alerta };
  