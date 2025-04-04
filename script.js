const desafios = [
  {
    categoria: "Memória",
    titulo: "Desafio das Palavras",
    descricao: "Tente memorizar 10 palavras aleatórias. Após 5 minutos, escreva todas sem olhar. Quantas conseguiu lembrar?"
  },
  {
    categoria: "Lógica",
    titulo: "Desafio da Verdade",
    descricao: "Três pessoas dizem: A: 'B está mentindo', B: 'C está mentindo', C: 'A e B estão mentindo'. Quem fala a verdade?"
  },
  {
    categoria: "Criatividade",
    titulo: "História Maluca",
    descricao: "Crie uma história com as palavras: gelo, foguete, borboleta, castelo e café. Use sua imaginação sem limites!"
  },
  {
    categoria: "Atenção",
    titulo: "Desafio da Repetição",
    descricao: "Leia um parágrafo e conte quantas vezes a palavra 'e' aparece. Depois confira com outra pessoa!"
  },
  {
    categoria: "Raciocínio Rápido",
    titulo: "Cálculo Mental",
    descricao: "Resolva: 17 x 6, 24 ÷ 3, 81 - 37, 12². Sem calculadora!"
  },
  {
    categoria: "Reflexão",
    titulo: "O que te motiva?",
    descricao: "Escreva por 5 minutos sobre o que mais te motiva a aprender e crescer mentalmente."
  }
];

let pontos = parseInt(localStorage.getItem("pontos")) || 0;
document.getElementById("pontos").textContent = pontos;

function gerarDesafio() {
  const index = Math.floor(Math.random() * desafios.length);
  const desafio = desafios[index];
  document.getElementById("categoria").textContent = `Categoria: ${desafio.categoria}`;
  document.getElementById("titulo").textContent = desafio.titulo;
  document.getElementById("descricao").textContent = desafio.descricao;

  // Pontuação
  pontos++;
  localStorage.setItem("pontos", pontos);
  document.getElementById("pontos").textContent = pontos;

  // Animação
  const card = document.getElementById("card");
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.opacity = 1;
  }, 150);
}

function alternarModo() {
  document.body.classList.toggle("escuro");
  document.body.classList.toggle("claro");
}

// Iniciar com modo claro
document.body.classList.add("claro");
