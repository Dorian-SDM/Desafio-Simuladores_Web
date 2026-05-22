// Ejercicio 1: Transferencia de Calor
function calcularCalor() {
  let T0 = parseFloat(document.getElementById("T0").value);
  let Ts = parseFloat(document.getElementById("Ts").value);
  let k = parseFloat(document.getElementById("k").value);
  let t = parseFloat(document.getElementById("t").value);

  let T = Ts + (T0 - Ts) * Math.exp(-k * t);
  T = Math.round(T);

  document.getElementById("resultadoCalor").innerText =
    "Temperatura final: " + T + " °F";
}

// Función factorial iterativa
function factorial(n) {
  if (n < 0) return NaN;
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

// Ejercicio 2: Combinaciones
function calcularCombinaciones() {
  let n1 = parseInt(document.getElementById("n1").value);
  let r1 = parseInt(document.getElementById("r1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let r2 = parseInt(document.getElementById("r2").value);

  if (r1 > n1 || r2 > n2) {
    document.getElementById("resultadoCombinaciones").innerText =
      "Error: r no puede ser mayor que n.";
    return;
  }

  let C1 = factorial(n1) / (factorial(r1) * factorial(n1 - r1));
  let C2 = factorial(n2) / (factorial(r2) * factorial(n2 - r2));
  let total = C1 * C2;

  document.getElementById("resultadoCombinaciones").innerText =
    "Total de combinaciones: " + total.toLocaleString();
}
