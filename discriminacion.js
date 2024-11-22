document.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.getElementById('download-button');
  const messageElement = document.getElementById('device-message');

  if (!downloadButton || !messageElement) {
    console.error('No se encontraron los elementos necesarios en el DOM.');
    return;
  }

  // Detectar dispositivos
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isAndroid) {
    downloadButton.classList.remove('hidden'); // Mostrar el botón
    messageElement.textContent = 'Estás en un dispositivo Android. Descarga la app ahora.';
  } else if (isIOS) {
    downloadButton.classList.add('hidden'); // Ocultar el botón
    messageElement.textContent = 'Estás en un dispositivo iOS.';
  } else {
    downloadButton.classList.add('hidden'); // Ocultar el botón
    messageElement.textContent = 'Tu dispositivo no es compatible.';
  }
});
