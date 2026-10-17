const titulo = document.querySelector("h1");

titulo.addEventListener("click" , function() {
    alert("¡Bienvenidos a Veterinaria Huellas Felices!");
});


const imagen = document.querySelector("img");

imagen.addEventListener("mouseover" , function() {
    imagen.style.transform = "scale(1.05)";
});


imagen.addEventListener("mouseout" , function() {
    imagen.style.transform = "scale(1)";
});


const formulario = document.getElementById("formularioCita");

formulario.addEventListener("submit" , function(evento) {
    evento.preventDefault();
    alert("¡Solicitud de cita enviada correctamente!");
});


document.addEventListener("keydown" , function(evento) {
    alert("Tecla presionada: " + evento.key);
});

