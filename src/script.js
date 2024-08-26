function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const genero = prompt("¿Cuál es tu género? (masculino/femenino)").toLowerCase();
    const edad = parseInt(prompt("¿Cuántos años tienes?"), 10);

    let saludo = `Hola, ${nombre}`;

    if (genero === "masculino") {
        saludo = `Hola, señor ${nombre}`;
    } else if (genero === "femenino") {
        saludo = `Hola, señora ${nombre}`;
    }

    if (edad < 18) {
        saludo = `Hola, joven ${nombre}`;
    } else {
        if (genero === "femenino") {
            saludo += ". ¡Bienvenida!";
        } else {
            saludo += ". ¡Bienvenido!";
        }
    }

    document.getElementById("mensaje").textContent = saludo;
}


document.getElementById("saludarBtn").addEventListener("click", saludar);