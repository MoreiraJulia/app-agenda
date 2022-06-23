function SalvarAnotacao(){
    novoNome = document.getElementById("nome").value
    novoTelefone = document.getElementById("telefone").value
    agenda = `<span id="contatoNovo"><p>${novoNome}</p> <p>${novoTelefone}</p></span>`
    document.getElementById("anotacoes-salvas").innerHTML += agenda
    localStorage.listaContatos = agenda 
    
}
document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
})

if(localStorage.listaContatos){
    document.getElementById("anotacoes-salvas").innerHTML = localStorage.listaContatos
}

function Apagar(){
    localStorage.clear()
    document.getElementById("contatoNovo").remove()
}

document.getElementById("botao-apagar").addEventListener("click", function(){
    Apagar()
})