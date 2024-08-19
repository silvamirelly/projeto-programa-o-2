const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual cidade é conhecida como "A Cidade Luz"?",
        alternativas: [

            {
                texto: "Paris",
                afirmacao: ""
            },
            {
                texto: "Roma",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é o país com o maior número de Patrimônios Mundiais da UNESCO?",
        alternativas: [

            {
                texto: "Itália",
                afirmacao: ""
            },
            {
                texto: "China",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é o destino turístico mais visitado do Brasil?",
        alternativas: [
            
            {
                texto: "Rio de Janeiro",
                afirmacao: ""
            },
            {
                texto: "Salvador",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a montanha mais alta do mundo",
        alternativas: [
            
            {
                texto: "Everest",
                afirmacao: ""
            },
            {
                texto: "kilimanjaro",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Em qual continente está localizada a Grande Muralha da China?",
        alternativas: [

            {
                texto: "Ásia",
                afirmacao: ""
            },
            {
                texto: "Europa",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = Respostas certas: 1- Paris 2- Itália 3- Rio De Janeiro 4- Everest 5- Ásia.;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
