document.addEventListener('DOMContentLoaded', () => {
  const inputFoto = document.getElementById('inputFoto');
  const imgPreview = document.getElementById('imgPreview');
  const formContacto = document.getElementById('formContacto');
  const nombreInput = document.getElementById('nombre');

  // Cargar datos previos de localStorage
  const fotoGuardada = localStorage.getItem('fotoPerfil');
  const nombreGuardado = localStorage.getItem('nombrePerfil');

  if (fotoGuardada) imgPreview.src = fotoGuardada;
  if (nombreGuardado) nombreInput.value = nombreGuardado;

  // Previsualización y guardado de imagen
  inputFoto.addEventListener('change', (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = (event) => {
      imgPreview.src = event.target.result;
      localStorage.setItem('fotoPerfil', event.target.result);
    };
    lector.readAsDataURL(archivo);
  });

  // Envío del formulario
  formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('nombrePerfil', nombreInput.value.trim());
    window.location.href = 'perfil.html';
  });
});