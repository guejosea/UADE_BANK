let attempts = 0;
const maxAttempts = 3;

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const documentNumber = document.getElementById('documentNumber').value;
  const password = document.getElementById('password').value;
  
  // Simular autenticación (reemplazar con lógica de autenticación real)
  if (documentNumber === '1234' && password === '1234') {
    alert('Ingreso exitoso!');
    resetAttempts();
  } else {
    attempts++;
    document.getElementById('error-msg').textContent = 'Número de documento o clave incorrectos. Intentos restantes: '+(maxAttempts-attempts);
    if (attempts >= maxAttempts) {
      lockAccount();
    }
  }
});

function lockAccount() {
  alert('Cuenta bloqueada. Por favor, proceda a desbloquear con su selfie.');
  // Aquí redirigirías a la pantalla de desbloqueo con funcionalidad de captura de selfie
}

function resetAttempts() {
  attempts = 0;
  document.getElementById('error-msg').textContent = '';
}
