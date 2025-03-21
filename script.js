function mostrarMensagem() {
alert("Bootstrap funcionando no Replit! 🚀");
}
// Simples validação do formulário
document.getElementById("contatoForm").addEventListener("submit",
function(event) {
event.preventDefault();
alert("Mensagem enviada com sucesso!");
});