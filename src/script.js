function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const genero = prompt("¿Cuál es tu género? (masculino/femenino)");
    let saludo = `Hola, ${nombre}`;

    if (genero.toLowerCase() === "masculino") {
        saludo = `Hola, señor ${nombre}`;
    } else if (genero.toLowerCase() === "femenino") {
        saludo = `Hola, señora ${nombre}`;
    }

    document.getElementById("mensaje").textContent = saludo;
}


document.getElementById("saludarBtn").addEventListener("click", saludar);