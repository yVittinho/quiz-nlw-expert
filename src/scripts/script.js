const perguntas = [
    {
      pergunta: "Qual tag é utilizada para criar um link em HTML?",
      respostas: [
        "<link>",
        "<a>",
        "<href>",
      ],
      correta: 1
    },
    {
      pergunta: "Como se refere ao estilo interno em CSS?",
      respostas: [
        "Inline",
        "Internal",
        "In-page",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa a sigla HTML?",
      respostas: [
        "Hypertext Markup Language",
        "High-Level Text Management Language",
        "Hyperlink and Text Management Language",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade é usada para definir a cor do texto em CSS?",
      respostas: [
        "color",
        "text-color",
        "font-color",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel;",
        "variable nomeVariavel;",
        "let nomeVariavel;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função da tag <head> em HTML?",
      respostas: [
        "Definir o conteúdo principal da página",
        "Incluir scripts JavaScript",
        "Configurar as meta informações da página",
      ],
      correta: 2
    },
    {
      pergunta: "Qual propriedade em CSS é usada para alterar o estilo do cursor?",
      respostas: [
        "cursor-style",
        "mouse-cursor",
        "cursor",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma declaração de variável",
        "Um bloco de código que realiza uma tarefa específica",
        "Um tipo de dado",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do atributo 'src' na tag <script> em HTML?",
      respostas: [
        "Especificar o estilo da página",
        "Indicar a fonte do arquivo JavaScript",
        "Definir o título da página",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.getElementById('quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h2').textContent = item.pergunta;
  
    for (const resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      }
  
  
      //aqui ele mostra todo conteúdo dentro do dt
      quizItem.querySelector('dl').appendChild(dt);
    }
    
    quizItem.querySelector('dl dt').remove();
  
    quiz.appendChild(quizItem);
  }