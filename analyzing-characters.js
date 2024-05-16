const contarCaracteresRepetidos = (cadena) => {
  const contador = {};

  // Iterar sobre cada carácter en la cadena
  for (const caracter of cadena) {
    // Si el carácter ya está en el objeto contador, aumenta su contador
    contador[caracter] = (contador[caracter] || 0) + 1;
  }

  // Mostrar el resultado
  for (const caracter in contador) {
    console.log(contador);
    console.log(
      `El caracter '${caracter}' aparece ${contador[caracter]} veces.`
    );
  }
};

// Ejemplo de uso
const cadena = "asdsdfssakssdkjdksjd";
contarCaracteresRepetidos(cadena);
