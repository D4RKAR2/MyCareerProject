document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar/ocultar secciones
    function showSection(sectionID) {
        // Oculta el login-container
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) loginContainer.style.display = 'none';
        
        // Oculta la sección de servicios
        const servicios = document.getElementById('solicitud');
        if (servicios) servicios.style.display = 'none';
        
        // Oculta el formulario
        const formulario = document.getElementById('formulario');
        if (formulario) formulario.style.display = 'none';

        // Oculta el contenedor principal
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) mainContainer.style.display = 'none';
        
        // Muestra la sección solicitada
        const section = document.getElementById(sectionID);
        if (section) section.style.display = 'block';
    }

    // Función para mostrar login (nueva función)
    function showLogin() {
        // Oculta todas las otras secciones
        const servicios = document.getElementById('solicitud');
        if (servicios) servicios.style.display = 'none';
        
        const formulario = document.getElementById('formulario');
        if (formulario) formulario.style.display = 'none';
        
        // Muestra/oculta el login container
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) {
            // Toggle: si está visible lo oculta, si está oculto lo muestra
            if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
                loginContainer.style.display = 'flex';
            } else {
                loginContainer.style.display = 'none';
            }
        }

        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) mainContainer.style.display = 'none';
        }

    // Eventos para el menú de navegación
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionID = this.getAttribute('href').substring(1);
            showSection(sectionID);
        });
    });

    // NUEVO: Evento para el botón de login principal
    const mainLoginBtn = document.querySelector('.main-btnlogin');
    if (mainLoginBtn) {
        mainLoginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showLogin();
        });
    }

    // Evento para el botón de agua potable
    const btnAgua = document.getElementById('btn-agua-potable');
    if (btnAgua) {
        btnAgua.addEventListener('click', function() {
            // Oculta lo que no necesitas
            document.querySelector('.login-container').style.display = 'none';
            document.getElementById('solicitud').style.display = 'none';
            
            // Muestra el formulario
            document.getElementById('formulario').style.display = 'block';
        });
    }

    // OPCIONAL: Ocultar login container al cargar la página
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
        loginContainer.style.display = 'none';
    }

    // Función para mvolver al inicio
    function showMainContainer() {
        // Oculta todas las secciones
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) loginContainer.style.display = 'none';
        
        const servicios = document.getElementById('solicitud');
        if (servicios) servicios.style.display = 'none';
        
        const formulario = document.getElementById('formulario');
        if (formulario) formulario.style.display = 'none';

        // Muestra el main-container
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer) mainContainer.style.display = 'block';
    }

    // Evento para el logo clickeable
const logoInicio = document.getElementById('logo-inicio');
if (logoInicio) {
    logoInicio.addEventListener('click', function() {
        showMainContainer();
    });
    // Cambiar cursor para indicar que es clickeable
    logoInicio.style.cursor = 'pointer';
}

// Evento para el botón de volver al inicio en toda la página
document.querySelectorAll('.btn-volver').forEach(button => {
    button.addEventListener('click', function() {
        showMainContainer();
    })
})

});