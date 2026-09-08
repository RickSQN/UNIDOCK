// 1. Controle de Abertura/Fechamento do Modal
const modal = document.getElementById("modal-cta");
const btnAbrir = document.getElementById("btn-abrir-cta");
const btnFechar = document.getElementById("btn-fechar-cta");
const btnCancelar = document.getElementById("btn-cancelar");

btnAbrir.addEventListener("click", () => modal.showModal());
btnFechar.addEventListener("click", () => modal.close());
btnCancelar.addEventListener("click", () => modal.close());

// Fecha se clicar fora do card (no fundo escuro)
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

// 2. Controle do Seletor de Mês
const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let mesAtual = 4; // Começa em Maio (índice 4 no array)

function mudarMes(direcao) {
  mesAtual += direcao;

  // Lógica de loop circular
  if (mesAtual < 0) mesAtual = 11;
  if (mesAtual > 11) mesAtual = 0;

  document.getElementById("textoMes").textContent = meses[mesAtual];
  document.getElementById("inputMes").value = mesAtual + 1;
}