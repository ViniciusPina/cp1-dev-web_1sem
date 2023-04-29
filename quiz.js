var perguntas = [
    {
        pergunta: "Qual é o país que mais consome vinho per capita no mundo?",
        resposta: "Vaticano"
    },
    {
        pergunta: "Qual é a uva mais plantada no mundo?",
        resposta: "Airen"
    },
    {
        pergunta: "Quantas uvas são necessárias para produzir uma garrafa de vinho?",
        resposta: "600 a 800"
    },
    {
        pergunta: "Qual é o vinho mais antigo do mundo?",
        resposta: "Speyer"
    },
    // Adicione mais perguntas e respostas aqui
];

function exibirQuiz() {
    var acertos = 0;
    for (var i = 0; i < perguntas.length; i++) {
        var resposta = prompt(perguntas[i].pergunta);
        alert("A resposta correta é: " + perguntas[i].resposta);
        if (resposta.toLowerCase() === perguntas[i].resposta.toLowerCase()) {
            acertos++;
        }
    }
    alert("Você acertou " + acertos + " de " + perguntas.length + " perguntas.");
}