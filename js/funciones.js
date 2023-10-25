// Función para solicitar un número al usuario con validación
function solicitarNumero(mensaje) {
    let numero;
    do {
      const entrada = prompt(mensaje);
      if (isNaN(entrada)) {
        console.error("Error: Por favor, ingresa un número.");
      } else {
        numero = parseInt(entrada);
      }
    } while (isNaN(numero));
    return numero;
  }  
  
  // Solicitar al usuario la cantidad de partidos ganados, empatados y perdidos
  const partidosGanados = solicitarNumero("¿Cuántos partidos GANÓ tu equipo esta temporada?");
  const partidosEmpatados = solicitarNumero("¿Cuántos partidos EMPATÓ tu equipo esta temporada?");
  const partidosPerdidos = solicitarNumero("¿Cuántos partidos PERDIÓ tu equipo esta temporada?");
  
  // Calcular la cantidad de partidos totales
  const partidosTotales = partidosGanados + partidosEmpatados + partidosPerdidos;
  
  // Calcular la cantidad de puntos posibles
  const puntosPosibles = partidosTotales * 3;
  
  // Calcular la cantidad de puntos obtenidos
  const puntosObtenidos = partidosGanados * 3 + partidosEmpatados;
  
  // Calcular el porcentaje de puntos obtenidos sobre los posibles
  const porcentajePuntos = (puntosObtenidos / puntosPosibles) * 100;
  
  // Mostrar los resultados en la consola
  console.log("Partidos totales: " + partidosTotales);
  console.log("Puntos posibles: " + puntosPosibles);
  console.log("Puntos obtenidos: " + puntosObtenidos);
  console.log("Tu equipo obtuvo un " + porcentajePuntos.toFixed(2) + "% de los puntos posibles esta temporada. ¡A seguir practicando!");  