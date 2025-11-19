class Usuarios {
  constructor() {
    this.Usuarios = [
      {"nome": "jose", 
        "email": "xxxx@xxxxx.com", 
        "senha": "xxxxxxxx", 
        "tipo": "admin", 
        "status": "ativo"},
        
      {"nome": "maria", 
        "email": "xxxx@xxxxx.com", 
        "senha": "xxxxxxxx", 
        "tipo": "usuario", 
        "status": "inativo"},
    ];
  }
  adicionar(usuario) {
    this.Usuarios.push(usuario);
  }
  async listar() {
    return this.Usuarios;
  }
  remover(usuario) {
    const index = this.Usuarios.indexOf(usuario);
    if (index !== -1) {
      this.Usuarios.splice(index, 1);
    }
  }
}
export default Usuarios;