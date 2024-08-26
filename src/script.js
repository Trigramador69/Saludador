function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    document.getElementById("mensaje").textContent = `Hola, ${nombre}`;
}

document.getElementById("saludarBtn").addEventListener("click", saludar);