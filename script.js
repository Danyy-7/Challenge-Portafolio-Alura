document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Capturar los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;    

    // Simulación de envío (en lugar de enviarlo a un servidor)
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `<p>Gracias ${nombre}, hemos recibido tu mensaje y te contactaremos a ${correo}.</p>`;

    // Limpiar los campos del formulario
    document.getElementById("formulario").reset();
});

const inputs = document.querySelectorAll("#formulario input, #formulario textarea");

inputs.forEach(input => {
    input.addEventListener("input", function() {
        document.getElementById("respuesta").innerHTML = ""; 
    });
});