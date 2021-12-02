document.getElementById("Liberar").addEventListener("click", LibrerarVagas);
document.getElementById("Calcular").addEventListener("click", CalcularValorTotal);
document.getElementById("Sair").addEventListener("click", Sair);

function LibrerarVagas() {
    var imagens = document.getElementsByTagName("img");

    for (var cont in imagens) {
        if (imagens[cont].name == "veiculoescolhido") {
            imagens[cont].src = "_Imagens/veiculolivre.png ";
            imagens[cont].name = "veiculolivre";
        } else if (imagens[cont].name == "veiculoescolhidopreferencial") {
            imagens[cont].src = "_Imagens/veiculolivrepreferencial.png ";
            imagens[cont].name = "veiculolivrepreferencial";
        }
    }
}

function VerificarVagas(name, id) {
    if (name == "veiculolivre") {
        OcuparVagas(id);
    } else if (name == "veiculolivrepreferencial") {
        OcuparVagasPreferenciais(id)
    } else {
        if (name == "veiculoocupado" || name == "veiculoocupadopreferencial") {
            alert("A vaga está Ocupada!");
        }
    }
}

function OcuparVagas(id) {
    document.getElementById(id).src = "_Imagens/veiculoescolhido.png ";
    document.getElementById(id).name = "veiculoescolhido";
}

function OcuparVagasPreferenciais(id) {
    document.getElementById(id).src = "_Imagens/veiculoescolhidopreferencial.png";
    document.getElementById(id).name = "veiculoescolhidopreferencial";
}

function CalcularValorTotal() {
    debugger;
    var imagens = document.getElementsByTagName("img");
    var acumulador = 0;
    var total = 0;

    for (var cont in imagens) {
        if (imagens[cont].name == "veiculoescolhido" || imagens[cont].name == "veiculoescolhidopreferencial") {
            acumulador += 1;
        }
    }

    if (acumulador) {
        var aux = acumulador ;
    } else {
        var aux = acumulador ;
    }

    total = aux * 10;

    if (total > 0)
        alert("Preço da Diária do Estacionamento: R$10,00\n" +
            "Quantidade de Vagas Escolhidas: " + aux + "\n" +
            "Valor Total: R$" + total.toFixed(2));

    for (var cont in imagens) {
        if (imagens[cont].name == "veiculoescolhido") {
            imagens[cont].src = "_Imagens/veiculoocupado.png";
            imagens[cont].name = "veiculoocupado";
        } else if (imagens[cont].name == "veiculoescolhidopreferencial") {
            imagens[cont].src = "_Imagens/veiculoocupadopreferencial.png"
            imagens[cont].name = "veiculoocupadopreferencial";
        }
    }
}

function Sair() {
    alert("Obrigado pela preferência,tenha uma boa viagem!");
    var tab = window.open(window.location, "_self");
    tab.close();
}