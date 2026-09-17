document.addEventListener('DOMContentLoaded', () => {
  const fotoPerfil = document.getElementById('fotoPerfil');
  const nombrePerfil = document.getElementById('nombrePerfil');

  const fotoGuardada = localStorage.getItem('fotoPerfil');
  const nombreGuardado = localStorage.getItem('nombrePerfil');

  if (fotoGuardada) {
    fotoPerfil.src = fotoGuardada;
  }

  if (nombreGuardado) {
    nombrePerfil.textContent = nombreGuardado;
  }
});