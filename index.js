// Lógica de diálogo
const mostrar = document.getElementById('mostrar');
const cerrar = document.getElementById('cerrar');
const modal = document.getElementById('modal');

document.getElementById("mostrar").onclick = function() {
    document.getElementById("modal").showModal();
};

document.getElementById("cerrar").onclick = function() {
    document.getElementById("modal").close();
};


mostrar.addEventListener('click', () => modal.showModal());
cerrar.addEventListener('click', () => modal.close());
