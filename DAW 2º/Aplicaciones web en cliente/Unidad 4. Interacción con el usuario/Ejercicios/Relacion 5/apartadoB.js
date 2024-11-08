function validarUsuario() {
    const usuario = document.getElementById('username');
    const boton = document.getElementById('submit');

    const minus = /[a-z]/;
    const mayus = /[A-Z]/;
    const tamaño = 6;

    const minusLi = document.getElementById('lowercase');
    const mayusLi = document.getElementById('uppercase');
    const tamañoLi = document.getElementById('minCharacters');
    const valor = usuario.value;

    const compruebaMinus = minus.test(valor);
    const compruebaMayus = mayus.test(valor);
    const compruebaTamaño = valor.length >= tamaño;
    
    minusLi.style.textDecoration = compruebaMinus ? 'line-through' : 'none';
    mayusLi.style.textDecoration = compruebaMayus ? 'line-through' : 'none';
    tamañoLi.style.textDecoration = compruebaTamaño ? 'line-through' : 'none';

    const isValid = compruebaMinus && compruebaMayus && compruebaTamaño;
    boton.disabled = !isValid;
}

window.onload = () => {
    document.getElementById('submit').disabled = true;
}