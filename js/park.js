/* Cria o estacionamento */
var estacionamento = new function () {
    var vaga = {
        ocupante: "",
        placaOcupante: "",
        nomeVaga: "Vaga",
        localVaga: "Terreo",
        custo: "10",
        data: new Date(),
        reservado: false,
    };

    patio = []
    patio[9] = new Array (vaga)


    for (c=0; c < patio.length; c++){
        patio.fill(vaga);
    }


    if (vaga.ocupante == ""){
        for (i=0;i < patio.length; i++){
            vaga.ocupante = "Vazio"
            vaga.reservado = false
        }
    }else{
        vaga.ocupante = "Ocupado"
        vaga.reservado = true
    }

}



console.log(patio)
console.log(patio.length)