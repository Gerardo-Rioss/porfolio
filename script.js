let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Función para animar las letras de los títulos
function animarTitulos() {
    const titulos = document.querySelectorAll('h2');
    
    titulos.forEach(titulo => {
        if (!titulo.classList.contains('procesado')) {
            // Marcar el título como procesado para no repetir la preparación
            titulo.classList.add('procesado');
            
            // Obtener el texto original
            const texto = titulo.innerText;
            // Limpiar el contenido
            titulo.innerHTML = '';
            
            // Crear span para cada letra
            texto.split('').forEach((letra) => {
                const span = document.createElement('span');
                span.textContent = letra;
                span.className = 'letra';
                titulo.appendChild(span);
            });
        }
    });
}

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Función para manejar la animación al hacer scroll
function handleScrollAnimation() {
    const titulos = document.querySelectorAll('h2');
    
    titulos.forEach(titulo => {
        if (isElementInViewport(titulo) && !titulo.classList.contains('animado')) {
            titulo.classList.add('animado');
            
            const letras = titulo.querySelectorAll('.letra');
            letras.forEach((letra, i) => {
                setTimeout(() => {
                    letra.classList.add('mostrar');
                }, 100 * i);
            });
        }
    });
}

// Preparar los títulos cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    animarTitulos();
    handleScrollAnimation(); // Verificar títulos visibles inicialmente
});

// Manejar el scroll
window.addEventListener('scroll', () => {
    handleScrollAnimation();
}); 