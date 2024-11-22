document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    const messageElement = document.getElementById('device-message');
  
    // Detectar si el dispositivo es Android
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      downloadButton.classList.remove('hidden'); // Mostrar el botón de descarga
      messageElement.textContent = 'Estás en un dispositivo Android. Descarga la app ahora.';
    } else {
      downloadButton.classList.add('hidden'); // Asegurarse de que esté oculto
      messageElement.textContent = 'Estás en un dispositivo que no es Android.';
    }
  });