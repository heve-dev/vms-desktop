class UsuariosView{
    constructor(){
    }
    renderizarLista(Usuarios){
        let container ='<div class="container">';
        Usuarios.forEach(usuario => {
            container += `<div> ${usuario.nome} - 
                                ${usuario.email} - 
                                ${usuario.senha} - 
                                ${usuario.tipo} - 
                                ${usuario.status} 
                          </div><br/>`
        });
        container += '</div>';
        return container;
    }
    renderizarFormulario(){
        return `<form id="form-usuario">
                    <label>Nome:</label>
                    <input type="text" id="nome"/>
                    <label>E-mail:</label>
                    <input type="text" id="email"/>
                    <label>Senha:</label>
                    <input type="text" id="senha"/>
                    <label>tipo:</label>
                    <input type="text" id="tipo"/>
                    <label>status:</label>
                    <input type="text" id="status"/>
                    <button>Salvar</button>
                </form>`
    }
}
export default UsuariosView;