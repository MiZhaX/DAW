window.onload = () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (event) => {
        let valid = true;

        const errores = document.querySelectorAll('.error');
        errores.forEach(error => error.textContent = '');

        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const usuario = document.getElementById('usuario').value.trim();

        const correoRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const usuarioRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

        // Validar Nombre y Apellidos
        if (!/^[A-Za-z\s]+$/.test(nombre)) {
            document.getElementById('nombreError').textContent = 'Nombre debe contener solo letras y espacios.';
            valid = false;
        }

        if (!/^[A-Za-z\s]+$/.test(apellidos)) {
            document.getElementById('apellidosError').textContent = 'Apellidos deben contener solo letras y espacios.';
            valid = false;
        }

        // Validar DNI 
        if (!/^\d{8}[A-Za-z]$/.test(dni)) {
            document.getElementById('dniError').textContent = 'El DNI debe contener 8 números seguidos de una letra.';
            valid = false;
        }

        // Validar Teléfono
        if (!/^\d{9}$/.test(telefono)) {
            document.getElementById('telefonoError').textContent = 'El teléfono debe contener 9 dígitos.';
            valid = false;
        }

        // Validar Correo Electrónico
        if (!correoRegex.test(correo)) {
            document.getElementById('correoError').textContent = 'El correo electrónico no es válido.';
            valid = false;
        }

        // Validar Usuario 
        if (!usuarioRegex.test(usuario)) {
            document.getElementById('usuarioError').textContent = 'El nombre de usuario debe tener al menos 8 caracteres, incluyendo un número y un signo de puntuación.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
};
