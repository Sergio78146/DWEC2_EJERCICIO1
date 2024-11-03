function calcularCalificacion() {
    // Obtener el valor de la nota ingresada
    const nota = parseFloat(document.getElementById("nota").value);
    const resultadoDiv = document.getElementById("resultado");

    // Limpiar el mensaje anterior
    resultadoDiv.textContent = "";

    // Validación de entrada
    if (isNaN(nota)) {
        resultadoDiv.textContent = "Error: Por favor, introduce un número válido.";
        resultadoDiv.style.color = "red";
        return;
    }
    if (nota < 0 || nota > 10) {
        resultadoDiv.textContent = "Error: La nota debe estar entre 0 y 10.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Calificación textual
    let calificacion;
    if (nota < 5) {
        calificacion = "Suspenso";
    } else if (nota < 6) {
        calificacion = "Aprobado";
    } else if (nota < 7.5) {
        calificacion = "Bien";
    } else if (nota < 9) {
        calificacion = "Notable";
    } else {
        calificacion = "Sobresaliente";
    }

    // Mostrar resultado
    resultadoDiv.textContent = "Calificación: " + calificacion;
    resultadoDiv.style.color = "black";  // Reiniciar el color del texto
}
