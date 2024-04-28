
function salvarCadastro() {
    var placa = document.getElementById('placa').value;
    var nome = document.getElementById('nome').value;
    var apartamento = document.getElementById('apartamento').value;
    var bloco = document.getElementById('bloco').value;
    var modelo = document.getElementById('modelo').value;
    var cor = document.getElementById('cor').value;
    var vaga = document.getElementById('vaga').value;

    console.log("Placa do Veículo:", placa);
    console.log("Nome do Proprietário:", nome);
    console.log("Número do Apartamento:", apartamento);
    console.log("Bloco do Apartamento:", bloco);
    console.log("Modelo do Veículo:", modelo);
    console.log("Cor do Veículo:", cor);
    console.log("Número da Vaga de Estacionamento:", vaga);

    alert("Cadastro realizado com sucesso!");
}
