document.getElementById('contactForm').addEventListener('submit' , function(event){
    const name = document.getElementById('name').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !reason || !email){
        alert('por favor, complete todos los campos.');
        event.preventDefault();    
    } else{
        alert('Formulario enviado correctamente.');
    }
});