function mostrarMensagem() {
  alert("Rastreie sua encomenda agora mesmo! 🚚");
}

// Validação do formulário
document.getElementById("contatoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    alert("Mensagem enviada com sucesso!");
    document.getElementById("contatoForm").reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});