// Declaração das casas de Hogwarts e variáveis de pontuação
const casas = [
    { nome: "Grifinória", pontos: 0 },
    { nome: "Sonserina", pontos: 0 },
    { nome: "Corvinal", pontos: 0 },
    { nome: "Lufa-Lufa", pontos: 0 }
];

// Função para fazer o teste
function fazerTeste() {
    let nome = prompt("Qual é o seu nome?");
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    // Perguntas para determinar a casa
    const respostas = [
        { pergunta: "Você valoriza coragem? (sim/não)", casa: "Grifinória" },
        { pergunta: "Você valoriza ambição? (sim/não)", casa: "Sonserina" },
        { pergunta: "Você valoriza inteligência? (sim/não)", casa: "Corvinal" },
        { pergunta: "Você valoriza lealdade? (sim/não)", casa: "Lufa-Lufa" }
    ];

    respostas.forEach(resposta => {
        let respostaUsuario = prompt(resposta.pergunta).toLowerCase();
        if (respostaUsuario === "sim") {
            // Aumenta a pontuação da casa correspondente
            let casaEscolhida = casas.find(casa => casa.nome === resposta.casa);
            casaEscolhida.pontos += 1;
        }
    });

    // Calcula o total de pontos para cada casa
    let totalPontos = casas.reduce((total, casa) => total + casa.pontos, 0);

    // Calcula a porcentagem de afinidade com cada casa
    let resultado = `Resultados para ${nome}:\n`;
    casas.forEach(casa => {
        let porcentagem = (casa.pontos / totalPontos) * 100;
        resultado += `${casa.nome}: ${porcentagem.toFixed(2)}%\n`;
    });

    // Determina a casa com maior afinidade
    let casaFinal = casas.reduce((a, b) => (a.pontos > b.pontos ? a : b));
    resultado += `\nVocê pertence à casa: ${casaFinal.nome}!`;

    // Exibe o resultado
    alert(resultado);
}
