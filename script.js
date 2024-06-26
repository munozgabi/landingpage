function mensagemEmailEnviado(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
    }
    else{
        alert("Email enviado com sucesso! Irei retornar o mais breve possível! Obrigada.");
    }
}

function mensagemInscricaoRealizada(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let dataNasc = document.getElementById("dataNasc").value;
    if(nome === "" || email === "" || dataNasc === ""){
        alert("Preencha todos os campos!");
    }
    else{
        alert("Inscrição realizada com sucesso! Os materiais serão enviados para o seu email em breve! Obrigada.");
    }
}
    