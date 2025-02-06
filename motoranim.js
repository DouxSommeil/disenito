const textContainer = document.querySelector('.text-container');
    const textElement = document.querySelector('.text');
    const symbols = ['✦︎']; // Símbolos alternados

    function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      
      // Seleccionar símbolo aleatorio
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      sparkle.textContent = randomSymbol;

      // Dimensiones del texto
      const textRect = textElement.getBoundingClientRect();
      
      // Posición aleatoria dentro del texto + pequeño margen
      const margin = 15;
      const x = Math.random() * (textRect.width + margin * 2) - margin;
      const y = Math.random() * (textRect.height + margin * 2) - margin;
      
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      // Tamaño y rotación aleatorios
      const size = Math.random() * 25 + 15; // 15px a 40px
      sparkle.style.fontSize = `${size}px`;

      textContainer.appendChild(sparkle);

      // Eliminar después de la animación
      setTimeout(() => sparkle.remove(), 1200);
    }

    // Crear destellos cada 80ms (más fluidos)
    setInterval(createSparkle, 300);
/// numeros aleatorios animacion
 const finalNumber = '1550490712';
        const digits = document.querySelectorAll('.digit');
        const totalDigits = finalNumber.length;

        function generateRandomDigit() {
            return Math.floor(Math.random() * 10); // Genera un dígito aleatorio del 0 al 9
        }

        function displayRandomDigits() {
            let currentIndex = 0;

            const interval = setInterval(() => {
                if (currentIndex < totalDigits) {
                    // Cambia el dígito actual a un número aleatorio
                    let randomDigit = generateRandomDigit();
                    digits[currentIndex].textContent = randomDigit;

                    // Verifica si el dígito aleatorio coincide con el dígito final
                    if (randomDigit == finalNumber[currentIndex]) {
                        // Si coincide, muestra el dígito final
                        digits[currentIndex].textContent = finalNumber[currentIndex];
                        currentIndex++; // Avanza al siguiente dígito
                    }
                } else {
                    clearInterval(interval); // Detiene el intervalo cuando todos los dígitos han sido liberados
                }
            }, 100); // Cambia el número para ajustar la velocidad de cambio
        }

        // Inicia la animación
        displayRandomDigits();

