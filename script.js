function calcular() {
    var convidados = parseInt(document.getElementById("convidados").value);
    var resultado = document.getElementById("resultado");

    if (convidados > 0) {
        resultado.textContent = "Você terá " + convidados + " convidados para a festa da Barbie!";
    } else {
        resultado.textContent = "Por favor, informe um número válido de convidados.";
    }
}
