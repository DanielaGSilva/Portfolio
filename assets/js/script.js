function validandoDados(){
    
    window.event.preventDefault()

    if(document.form.nome.value == ""){
        alert("Campo nome, não deve ser vazio!")
        document.form.nome.focus();
    } else if(document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1){
        alert("E-mail inválido!")
        document.form.email.focus(); 
    } else if(document.form.assunto.value == ""){
        alert("Por favor, insira o assunto do contato!")
        document.form.assunto.focus();
    } else if(document.form.mensagem.value.length < 10){
        alert("A mensagem deve contar no mínimo 10 caracteres.")
        document.form.mensagem.focus();    
    }else {
        alert("Formulário enviado com sucesso!")
    }
}

document.querySelector("form").addEventListener("submit", validandoDados);