document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);

    const mensagemDiv = document.getElementById('mensagem');

    if (numeroB > numeroA) {
        mensagemDiv.textContent = 'Formulário válido! O Número B é maior que o Número A.';
        mensagemDiv.className = 'mensagem positiva';
        mensagemDiv.style.display = 'block';
    } else {
        mensagemDiv.textContent = 'Formulário inválido! O Número B deve ser maior que o Número A.';
        mensagemDiv.className = 'mensagem negativa';
        mensagemDiv.style.display = 'block';
    }
});
