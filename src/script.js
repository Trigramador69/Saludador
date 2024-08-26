function saludar() {
    const idioma = prompt("¿En qué idioma quieres ser saludado? (e/i)").toLowerCase();
    const nombre = prompt("¿Cuál es tu nombre?");
    const genero = prompt("¿Cuál es tu género? (m/f)").toLowerCase();
    const edad = parseInt(prompt("¿Cuántos años tienes?"), 10);

    let saludo = idioma === "i" ? `Hello, ${nombre}` : `Hola, ${nombre}`;
    let bienvenida = idioma === "i" ? "Welcome!" : "¡Bienvenido!";

    if (genero === "m") {
        saludo = idioma === "i" ? `Hello, Mr. ${nombre}` : `Hola, señor ${nombre}`;
    } else if (genero === "f") {
        saludo = idioma === "i" ? `Hello, Ms. ${nombre}` : `Hola, señora ${nombre}`;
        bienvenida = idioma === "i" ? "Welcome!" : "¡Bienvenida!";
    }

    if (edad < 18) {
        saludo = idioma === "i" ? `Hello, young ${nombre}` : `Hola, joven ${nombre}`;
    } else {
        saludo += `. ${bienvenida}`;
    }

    document.getElementById("mensaje").textContent = saludo;
}


document.getElementById("saludarBtn").addEventListener("click", saludar);