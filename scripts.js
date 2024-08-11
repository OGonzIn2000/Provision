// Script para manejar el menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    
});


function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
    prueba();
}  
function prueba()
{
    document.querySelector('#toggle-animation').addEventListener('click', classToggle);
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío por defecto del formulario

        // Deshabilitar el botón de envío
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Simular un tiempo de espera antes de habilitar nuevamente el botón
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar';
            form.reset(); // Opcional: Reiniciar el formulario
            alert('Mensaje enviado exitosamente'); // Mensaje de confirmación
        }, 2000); // 2000 ms = 2 segundos
    });
});





