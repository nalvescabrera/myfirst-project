function enviarForm(){
    var nome = document.getElementById("nomeId");
    var sobrenome = document.getElementById("sobrenomeId");

    if(nome.value!= "" && sobrenome.value!=""){
        alert('Ok!' + nome.value + 'os seus dados foram encaminhados com sucesso!');
    }
}