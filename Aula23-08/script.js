var aluno = {
    nome: "Huguinho",
    dt_nascimento: "01/01/1990",
    endereco: {
        rua: "rua 1",
        numero: 132,
        cidade: "Bicas"
    },
    matricula: 123456,
    frequente: true


};

console.log(`A cidade do ${aluno.nome} é ${aluno.endereco.cidade}`);


var quadrado = {
    lados: 4,
    area: function(tamanhoLado){
      return tamanhoado*tamanhoLado;
    },
    perimetro: function(tamanhoLado){
      return this.lados*tamanhoLado;
    }
}